#!/usr/bin/env python3
"""Balance and shape checks for Grammar Practice sessions (toefl/grammar/*.html).

  python3 tools/check_grammar.py        exit 1 on any failure

Per session (100 items): Structure and Written Expression have 30 items each and the
  exit check 8. In each, every letter is the answer at least 6 times (2 in the exit check), with no more than 2 identical answers in a row. Written Expression (block + exit WE items): exactly 4 underlined parts,
  the error span appears once in the sentence, and the error falls early, middle and late
  at least 6 times each. Sort items: the categories are used within one item of evenly.
Needs node on PATH (the session data is a JavaScript literal).
"""
import glob, json, os, re, subprocess, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JS = r"""const fs=require("fs");const s=fs.readFileSync(process.argv[1],"utf8");
const m=s.match(/<!-- GP:data start -->\s*<script>([\s\S]*?)<\/script>/);console.log(JSON.stringify(new Function(m[1]+";return S;")()));"""
def run(path):
    S = json.loads(subprocess.run(["node", "-e", JS, path], capture_output=True, text=True, check=True).stdout)
    errs = []
    blocks = {"str": [q["a"] for q in S["str"]], "we": [q["a"] for q in S["we"]], "exit": [q["a"] for q in S["exit"]]}
    need = {"str": 6, "we": 6, "exit": 2}   # 30-item TOEFL blocks, 8-item exit check
    size = {"str": 30, "we": 30, "exit": 8}  # 100 items per session
    for name, seq in blocks.items():
        if len(seq) != size[name]: errs.append(f"{name}: {len(seq)} items (expected {size[name]})")
        for k in range(4):
            if seq.count(k) < need[name]: errs.append(f"{name}: letter {'ABCD'[k]} correct {seq.count(k)}x (min {need[name]})")
    for name, seq in blocks.items():
        run_ = 1
        for i in range(1, len(seq)):
            run_ = run_ + 1 if seq[i] == seq[i-1] else 1
            if run_ > 2: errs.append(f"{name}: 3 identical answers in a row at item {i+1}")
    we = S["we"] + [q for q in S["exit"] if q.get("k") == "we"]
    pos = []
    for i, q in enumerate(we, 1):
        segs = [t for t, u in q["p"] if u]
        if len(segs) != 4: errs.append(f"WE {i}: {len(segs)} underlined parts")
        full = "".join(t for t, _ in q["p"])
        err = segs[q["a"]]
        if len(re.findall(r"\b%s\b" % re.escape(err), full)) != 1: errs.append(f"WE {i}: error span '{err}' not unique")
        off = 0
        for t, u in q["p"]:
            if u and t == err: break
            off += len(t)
        r = (off + len(err) / 2) / len(full)
        pos.append("early" if r < 1/3 else "late" if r > 2/3 else "mid")
    for b in ("early", "mid", "late"):
        if pos.count(b) < 6: errs.append(f"WE: error {b} in the sentence only {pos.count(b)}x (min 6)")
    total = len(S["warm"]) + len(S["str"]) + len(S["we"]) + len(S["prac"]["items"]) + len(S["prod"]["items"]) + len(S["exit"])
    if total != 100: errs.append(f"{total} items (expected 100)")
    if S["prac"]["type"] == "sort":
        cs = [q["c"] for q in S["prac"]["items"]]
        cnt = [cs.count(i) for i in range(len(S["prac"]["cols"]))]
        if max(cnt) - min(cnt) > 1: errs.append(f"sort: uneven categories {cnt}")
    return errs
bad = 0
for p in sorted(glob.glob(os.path.join(ROOT, "toefl", "grammar", "*.html"))):
    if "GP:data start" not in open(p, encoding="utf-8").read(): continue
    e = run(p); bad += bool(e)
    print(("FAIL " if e else "ok   ") + os.path.relpath(p, ROOT) + "".join("\n     - " + x for x in e))
sys.exit(1 if bad else 0)
