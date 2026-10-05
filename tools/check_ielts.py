#!/usr/bin/env python3
"""Checker for the IELTS Listening section (ielts/data/*.js).

  python3 tools/check_ielts.py [repo-root]

Per test:
  * four parts, questions numbered 1–40 with no gaps or overlaps
  * every question has exactly one [[n|…]] answer anchor in the script,
    and the anchor sits in the part the question belongs to
  * every {n} gap appears exactly once in its group; every speaker id exists
  * every accepted gap answer obeys its group's word limit (same rule the page uses)
  * multiple choice: three options, a valid answer; choose-two: two distinct answers
  * matching/map: answers are listed letters; no 1=A, 2=B, 3=C runs
  * answer balance over the single-answer MC in the test (3-option rule):
    each letter correct at least twice, never the same letter three times in a row
  * every test in data/ is listed in TESTS in ielts/index.html
Exit 1 on any FAIL. Needs node on PATH.
"""
import glob, json, os, re, subprocess, sys

ROOT = os.path.abspath(sys.argv[1]) if len(sys.argv) > 1 else \
    os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GAP_TYPES = {"form", "notes", "table", "flow", "sentences", "summary", "short"}
fails = []


def fail(where, msg):
    fails.append(f"{where}: {msg}")


def load():
    code = ('global.window={};const fs=require("fs");'
            'for(const f of fs.readdirSync("ielts/data").filter(f=>f.endsWith(".js")).sort())'
            '(0,eval)(fs.readFileSync("ielts/data/"+f,"utf8"));'
            'process.stdout.write(JSON.stringify(window.IELTS||{}))')
    return json.loads(subprocess.check_output(["node", "-e", code], cwd=ROOT))


# --- word limit: mirrors isNumberish / overLimit in ielts/listen.html -------------
UNITS = dict(zero=0, oh=0, one=1, two=2, three=3, four=4, five=5, six=6, seven=7, eight=8, nine=9, ten=10,
             eleven=11, twelve=12, thirteen=13, fourteen=14, fifteen=15, sixteen=16, seventeen=17,
             eighteen=18, nineteen=19, first=1, second=2, third=3, fourth=4, fifth=5, sixth=6, seventh=7,
             eighth=8, ninth=9, tenth=10, eleventh=11, twelfth=12, thirteenth=13, fourteenth=14,
             fifteenth=15, sixteenth=16, seventeenth=17, eighteenth=18, nineteenth=19)
TENS = dict(twenty=20, thirty=30, forty=40, fifty=50, sixty=60, seventy=70, eighty=80, ninety=90,
            twentieth=20, thirtieth=30, fortieth=40, fiftieth=50, sixtieth=60, seventieth=70,
            eightieth=80, ninetieth=90)


def words2num(s):
    toks = [t for t in re.split(r"\s+", s.replace("-", " ")) if t and t != "and"]
    if not toks:
        return None
    total = cur = 0
    seen = False
    for t in toks:
        if t in UNITS:
            cur += UNITS[t]; seen = True
        elif t in TENS:
            cur += TENS[t]; seen = True
        elif t in ("hundred", "hundredth"):
            cur = (cur or 1) * 100; seen = True
        elif t in ("thousand", "thousandth"):
            total += (cur or 1) * 1000; cur = 0; seen = True
        elif t in ("dollars", "dollar"):
            pass
        else:
            return None
    return total + cur if seen else None


def numberish(raw):
    s = raw.strip().lower()
    return bool(re.match(r"^\$?\d[\d\s.,:/-]*(\s?(am|pm|a\.m\.|p\.m\.|dollars?|st|nd|rd|th))?$", s)) \
        or words2num(s.replace("$", "")) is not None


def over_limit(raw, lim):
    s = raw.strip()
    if not s:
        return False
    if numberish(s):
        return False if lim["num"] else len(s.split()) > lim["w"]
    toks = s.split()
    nums = sum(1 for t in toks if re.search(r"\d", t))
    words = len(toks) - nums
    if not lim["num"]:
        return words + nums > lim["w"]
    return words > lim["w"] or nums > 1


def check_test(slug, T):
    w = f"ielts/data/{slug}.js"
    if T.get("slug") != slug:
        fail(w, f"slug {T.get('slug')!r} does not match file name")
    parts = T.get("parts", [])
    if [p.get("n") for p in parts] != [1, 2, 3, 4]:
        fail(w, "parts must be numbered 1–4")
    seen, mc_seq = [], []
    anchors = {}
    for p in parts:
        pw = f"{w} part {p.get('n')}"
        spk = set(p.get("speakers", {}))
        for li, L in enumerate(p.get("script", [])):
            if "sp" in L and L["sp"] not in spk:
                fail(pw, f"script line {li + 1}: unknown speaker {L['sp']!r}")
            if not any(k in L for k in ("sp", "nar", "pause")):
                fail(pw, f"script line {li + 1}: needs sp, nar or pause")
            for n in re.findall(r"\[\[(\d+)\|[^\]]+\]\]", L.get("t", "")):
                anchors.setdefault(int(n), []).append(p["n"])
            if re.search(r"\[\[(?!\d+\|)", L.get("t", "")):
                fail(pw, f"script line {li + 1}: malformed anchor")
        for G in p.get("groups", []):
            nums = list(range(G["from"], G["to"] + 1))
            gw = f"{pw} Q{G['from']}–{G['to']}"
            seen += [(n, p["n"]) for n in nums]
            t = G["type"]
            if t in GAP_TYPES:
                blob = json.dumps({k: G.get(k) for k in ("rows", "lines", "head", "steps", "items", "text")}, ensure_ascii=False)
                for n in nums:
                    c = len(re.findall(r"\{%d\}" % n, blob)) if t != "short" else \
                        sum(1 for it in G["items"] if it["n"] == n)
                    if c != 1:
                        fail(gw, f"gap {n} appears {c} times")
                    acc = G.get("ans", {}).get(str(n))
                    if not acc:
                        fail(gw, f"no accepted answers for {n}")
                        continue
                    for a in acc:
                        if over_limit(a, G["limit"]):
                            fail(gw, f"answer {a!r} for {n} breaks the word limit")
            elif t == "mc":
                if [it["n"] for it in G["items"]] != nums:
                    fail(gw, "items do not match the question range")
                for it in G["items"]:
                    if len(it["o"]) != 3 or it["a"] not in (0, 1, 2):
                        fail(gw, f"Q{it['n']} needs three options and a 0–2 answer")
                    mc_seq.append((it["n"], "ABC"[it["a"]]))
            elif t == "mc2":
                if len(nums) != 2 or len(G["o"]) != 5 or len(set(G["a"])) != 2 or not all(0 <= a < 5 for a in G["a"]):
                    fail(gw, "choose-two needs 2 questions, 5 options and 2 distinct answers")
            elif t in ("match", "map"):
                letters = G["letters"] if t == "map" else "".join(o[0] for o in G["opts"])
                if [it["n"] for it in G["items"]] != nums:
                    fail(gw, "items do not match the question range")
                ans = [it["a"] for it in G["items"]]
                for it in G["items"]:
                    if it["a"] not in letters:
                        fail(gw, f"Q{it['n']} answer {it['a']!r} not among {letters}")
                for i in range(len(ans) - 2):
                    if [letters.find(x) for x in ans[i:i + 3]] == [i, i + 1, i + 2]:
                        fail(gw, "answers run in option order (1=A, 2=B, 3=C)")
                if t == "map":
                    for L in letters:
                        if f">{L}</text>" not in G["svg"]:
                            fail(gw, f"map letter {L} not drawn")
                if t == "match" and len(letters) < len(set(ans)):
                    fail(gw, "fewer options than distinct answers")
            else:
                fail(gw, f"unknown group type {t!r}")
    ns = [n for n, _ in seen]
    if ns != list(range(1, 41)):
        fail(w, f"questions are not numbered 1–40 in order (got {ns[:3]}…{ns[-3:]}, {len(ns)} total)")
    for n, pn in seen:
        a = anchors.get(n, [])
        if len(a) != 1:
            fail(w, f"Q{n} has {len(a)} answer anchors (expected 1)")
        elif a[0] != pn:
            fail(w, f"Q{n} is in part {pn} but its anchor is in part {a[0]}")
    for n in anchors:
        if n not in ns:
            fail(w, f"anchor for Q{n}, which does not exist")
    letters = [l for _, l in mc_seq]
    for L in "ABC":
        if letters and letters.count(L) < 2:
            fail(w, f"single-answer MC: {L} is correct {letters.count(L)} time(s) (minimum 2)")
    for i in range(len(letters) - 2):
        if letters[i] == letters[i + 1] == letters[i + 2]:
            fail(w, f"single-answer MC: {letters[i]} three times in a row from Q{mc_seq[i][0]}")
    return "".join(letters)


def main():
    data = load()
    files = sorted(os.path.basename(f)[:-3] for f in glob.glob(os.path.join(ROOT, "ielts", "data", "*.js")))
    idx = open(os.path.join(ROOT, "ielts", "index.html"), encoding="utf-8").read()
    m = re.search(r"var TESTS = \[([^\]]*)\]", idx)
    listed = re.findall(r"'([\w-]+)'", m.group(1)) if m else []
    for slug in files:
        if slug not in data:
            fail(f"ielts/data/{slug}.js", f"does not define window.IELTS[{slug!r}]")
            continue
        if slug not in listed:
            fail("ielts/index.html", f"{slug} missing from TESTS")
        if f'src="data/{slug}.js"' not in idx:
            fail("ielts/index.html", f"no <script> tag for data/{slug}.js")
        seq = check_test(slug, data[slug])
        print(f"  {slug}: MC answers {seq}")
    for f in fails:
        print("  FAIL ", f)
    print()
    if fails:
        print("IELTS CHECK FAILED (%d)" % len(fails))
        return 1
    print("IELTS CHECK PASSED (%d tests)" % len(files))
    return 0


if __name__ == "__main__":
    sys.exit(main())
