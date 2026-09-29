#!/usr/bin/env python3
"""Rebuild the Quiz Builder's exercise bank from the TOEFL sheets.

toefl/quiz.html carries a copy of every sheet's exercises in one line,
`const FAM=[...]`. This regenerates that line from the sheets so the copy
can never drift.

  python3 tools/sync_quiz.py           rewrite FAM in toefl/quiz.html
  python3 tools/sync_quiz.py --check   exit 1 if FAM is out of date (run before every push)

Source of truth, per family:
  slug    sheet file name
  order   "Sheet N of M" in the sheet eyebrow
  name    the sheet's row title in toefl/index.html
  pat     the sheet's PAT array (short pattern labels, index 0 empty)
  a/b/c   the sheet's A, B, C arrays in source order (the quiz shuffles itself)

Needs node on PATH (the sheet arrays are JavaScript literals).
"""
import html, json, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TOEFL = os.path.join(ROOT, "toefl")
QUIZ = os.path.join(TOEFL, "quiz.html")

NODE = r"""
const fs = require("fs");
const src = fs.readFileSync(process.argv[1], "utf8");
function grab(name) {
  const i = src.indexOf("const " + name + "=[");
  if (i < 0) throw new Error("no " + name);
  let d = 0; const k = src.indexOf("[", i);
  for (let j = k; j < src.length; j++) {
    if (src[j] === "[") d++;
    else if (src[j] === "]" && --d === 0) return (0, eval)(src.slice(k, j + 1));
  }
}
process.stdout.write(JSON.stringify({A: grab("A"), B: grab("B"), C: grab("C"), PAT: grab("PAT")}));
"""


def sheets():
    out = []
    for f in sorted(os.listdir(TOEFL)):
        if not f.endswith(".html"):
            continue
        p = os.path.join(TOEFL, f)
        s = open(p, encoding="utf-8").read()
        if "const A=[" in s and "const B=[" in s and "const C=[" in s:
            m = re.search(r"Sheet (\d+) of (\d+)", s)
            if not m:
                sys.exit("%s: no 'Sheet N of M' eyebrow" % f)
            out.append((int(m.group(1)), f[:-5], p, s))
    return sorted(out)


def family(slug, path, src, index_src):
    data = json.loads(subprocess.check_output(["node", "-e", NODE, path]))
    m = re.search(r'href="(?:\./)?%s\.html"[^>]*>.*?<h3>(.*?)</h3>' % re.escape(slug), index_src, re.S)
    if not m:
        sys.exit("%s: no row in toefl/index.html" % slug)
    name = html.unescape(re.sub(r"<[^>]+>", "", m.group(1))).strip()
    pat = data["PAT"]
    if len(pat) != 13 or pat[0] != "":
        sys.exit("%s: expected 12 patterns, found %d" % (slug, len(pat) - 1))
    a = [{"s": q["s"], "o": q["o"], "k": q["a"], "w": q["w"], "p": i + 1}
         for i, q in enumerate(data["A"])]
    b = [{"parts": q["p"], "k": q["a"], "f": q["f"], "w": q["w"]} for q in data["B"]]
    c = []
    for q in data["C"]:
        t, x = q["t"], q["x"]
        if t.count(x) != 1:
            sys.exit("%s C: error span %r appears %d times" % (slug, x, t.count(x)))
        i = t.index(x)
        c.append({"t": t, "pre": t[:i], "rep": q["a"][0], "post": t[i + len(x):], "p": q["p"], "w": q["w"]})
    return {"slug": slug, "name": name, "pat": pat, "a": a, "b": b, "c": c}


def build():
    index_src = open(os.path.join(TOEFL, "index.html"), encoding="utf-8").read()
    fam = [family(slug, p, s, index_src) for _, slug, p, s in sheets()]
    return "const FAM=" + json.dumps(fam) + ";"


def main():
    check = "--check" in sys.argv
    q = open(QUIZ, encoding="utf-8").read()
    m = re.search(r"^const FAM=.*$", q, re.M)
    if not m:
        sys.exit("toefl/quiz.html: no `const FAM=` line")
    new = build()
    if m.group(0) == new:
        print("quiz bank in sync (%d families)" % new.count('"slug"'))
        return 0
    if check:
        print("QUIZ BANK OUT OF DATE — run: python3 tools/sync_quiz.py")
        return 1
    open(QUIZ, "w", encoding="utf-8").write(q[:m.start()] + new + q[m.end():])
    print("quiz bank rewritten (%d families)" % new.count('"slug"'))
    return 0


if __name__ == "__main__":
    sys.exit(main())
