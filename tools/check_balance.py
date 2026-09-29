#!/usr/bin/env python3
"""Answer-balance linter for the TOEFL error-correction sheets and the TOEFL ITP Coach.

Fails the build if any multiple-choice set shows a positional cue a test-wise
student could exploit. Run before every push.

  python3 tools/check_balance.py [repo-root]     (default: the repo this file lives in)

Sheets are discovered, not listed: every toefl/*.html that defines `const A=[`.
"""
import os, re, sys, json, glob, collections

def discover(toefl_dir):
    out = []
    for p in sorted(glob.glob(os.path.join(toefl_dir, "*.html"))):
        src = open(p, encoding="utf-8").read()
        if "const A=[" in src and "const B=[" in src and "const C=[" in src:
            out.append(os.path.splitext(os.path.basename(p))[0])
    return out

RULES = dict(
    a_min=2, a_max=5,      # Set A: 12 items, each slot 2-5
    b_min=2, b_max=4,      # Set B: 10 items, each slot 2-4
    max_run=2,             # no more than 2 identical answers in a row
    c_min_bucket=1,        # Set C: each of early/mid/late at least this many
)

def bounds(s,name):
    i=s.find('const %s=['%name)
    if i<0: return None
    i=s.index('[',i); d=0
    for k in range(i,len(s)):
        if s[k]=='[': d+=1
        elif s[k]==']':
            d-=1
            if d==0: return s[i:k+1]

def items(b):
    out=[];d=0;st=None
    for k,c in enumerate(b):
        if c=='{':
            d+=1
            if d==1: st=k
        elif c=='}':
            d-=1
            if d==0: out.append(b[st:k+1])
    return out

def answers(b):
    out=[]
    for it in items(b):
        m=re.search(r'a:\s*(\d+)', it.replace('\n',' '))
        if m: out.append(int(m.group(1)))
    return out

def perm(s, letter):
    """Sheets permute the arrays at load time via _PA/_PB/_PC; lint the DISPLAYED order."""
    m = re.search(r'_P%s=\[([0-9,\s]+)\]' % letter, s)
    if not m: return None
    return [int(x) for x in m.group(1).split(',')]

def displayed(seq, p):
    if not p: return seq
    out = list(seq)
    for dst, src in enumerate(p): out[dst] = seq[src]
    return out

def longest_run(seq):
    best=cur=1
    for i in range(1,len(seq)):
        cur = cur+1 if seq[i]==seq[i-1] else 1
        best=max(best,cur)
    return best if seq else 0

def c_buckets(b):
    e=m=l=0; bad=[]
    for n,it in enumerate(items(b),1):
        f=it.replace('\n',' ')
        tm=re.search(r't:\s*"((?:[^"\\]|\\.)*)"', f)
        xm=re.search(r'x:\s*"((?:[^"\\]|\\.)*)"', f)
        if not (tm and xm): continue
        t=json.loads('"'+tm.group(1)+'"'); x=json.loads('"'+xm.group(1)+'"')
        if t.count(x)!=1:
            bad.append((n, "error span appears %d times" % t.count(x))); continue
        pos=t.find(x)
        if pos==0:
            am=re.search(r'a:\[\s*"((?:[^"\\]|\\.)*)"', f)
            if am:
                rep=json.loads('"'+am.group(1)+'"')
                if rep[:1].islower():
                    bad.append((n, "sentence-initial fix is lowercase: %r" % rep))
        r=pos/len(t)
        if r<0.34: e+=1
        elif r<0.67: m+=1
        else: l+=1
    return e,m,l,bad

# ---------------------------------------------------------------- TOEFL ITP
# Each displayed set of n four-option items: every slot between
# max(1, round(n/4)-1) and ceil(n/4)+1, and no run longer than max_run.

def _block(s, name, closer="\n];"):
    i = s.find("const %s = " % name)
    if i < 0: return None
    return s[i:s.index(closer, i)]

def _slots(n):
    return max(1, round(n / 4) - 1), -(-n // 4) + 1

def itp_sets(s):
    """Yield (label, [answer positions]) for every set the ITP page displays."""
    for name in ("PART_A", "STRUCTURE"):
        b = _block(s, name)
        if b: yield name, [int(x) for x in re.findall(r"\ba:\s*(\d)", b)]
    b = _block(s, "PART_B", "\n};")
    if b: yield "PART_B", [int(x) for x in re.findall(r"\ba:\s*(\d)", b)]
    for name in ("PART_C", "READING"):
        b = _block(s, name)
        if not b: continue
        for k, chunk in enumerate(re.split(r'\btitle:\s*"', b)[1:], 1):
            yield "%s #%d" % (name, k), [int(x) for x in re.findall(r"\ba:\s*(\d)", chunk)]
    b = _block(s, "WRITTEN")
    if b: yield "WRITTEN", ["ABCD".index(x) for x in re.findall(r'\ba:\s*"([A-D])"', b)]

def check_itp(path, fails):
    if not os.path.exists(path): return
    s = open(path, encoding="utf-8").read()
    for label, ans in itp_sets(s):
        lo, hi = _slots(len(ans))
        dist = [ans.count(i) for i in range(4)]
        run = longest_run(ans)
        tag = "ok"
        if not ans:
            fails.append(f"toefl-itp {label}: no answers found"); tag = "FAIL"
        elif min(dist) < lo or max(dist) > hi:
            fails.append(f"toefl-itp {label}: slot distribution {dist} outside [{lo},{hi}]"); tag = "FAIL"
        if run > RULES['max_run']:
            fails.append(f"toefl-itp {label}: {run} identical answers in a row"); tag = "FAIL"
        print(f"  {'toefl-itp':24} {label:10} {dist} run={run} {tag}")

def main(root=None):
    root = root or os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    if os.path.isdir(os.path.join(root, "toefl")):
        d = os.path.join(root, "toefl")
    else:                       # old usage: pointed straight at the sheets folder
        d, root = root, os.path.dirname(os.path.abspath(root))
    SHEETS = discover(d)
    fails=[]
    if not SHEETS:
        fails.append("no sheets found in " + d)
    for sh in SHEETS:
        p=os.path.join(d, sh+".html")
        s=open(p,encoding='utf-8').read()
        for setname, lo, hi, n_exp in (("A",RULES['a_min'],RULES['a_max'],12),
                                       ("B",RULES['b_min'],RULES['b_max'],10)):
            ans=displayed(answers(bounds(s,setname)), perm(s,setname))
            dist=[ans.count(i) for i in range(4)]
            run=longest_run(ans)
            tag="ok"
            if len(ans)!=n_exp: fails.append(f"{sh} {setname}: expected {n_exp} items, found {len(ans)}"); tag="FAIL"
            if min(dist)<lo or max(dist)>hi:
                fails.append(f"{sh} {setname}: slot distribution {dist} outside [{lo},{hi}]"); tag="FAIL"
            if run>RULES['max_run']:
                fails.append(f"{sh} {setname}: {run} identical answers in a row"); tag="FAIL"
            print(f"  {sh:24} {setname} {dist} run={run} {tag}")
        e,m,l,bad = c_buckets(bounds(s,'C'))
        # (C buckets are order-independent counts; no permutation needed)
        tag="ok"
        for n,msg in bad:
            fails.append(f"{sh} C item {n}: {msg}"); tag="FAIL"
        if min(e,m,l)<RULES['c_min_bucket']:
            fails.append(f"{sh} C: error position early/mid/late = {e}/{m}/{l}"); tag="FAIL"
        print(f"  {sh:24} C early/mid/late {e}/{m}/{l} {tag}")
    check_itp(os.path.join(root, "toefl-itp.html"), fails)
    print()
    if fails:
        print("BALANCE CHECK FAILED (%d):" % len(fails))
        for f in fails: print("  -", f)
        return 1
    print("BALANCE CHECK PASSED")
    return 0

if __name__=="__main__":
    sys.exit(main(sys.argv[1] if len(sys.argv)>1 else None))
