#!/usr/bin/env python3
"""Copy the Grammar Practice engine into every session page.

tools/grammar_engine.html holds the CSS and JS shared by all sessions in toefl/grammar/,
between GP:engine-css and GP:engine-js markers. Each session page carries an identical copy
(pages stay self-contained). This rewrites those regions so the copies can never drift.

  python3 tools/sync_grammar.py           rewrite the regions in every session page
  python3 tools/sync_grammar.py --check   exit 1 if any page is out of date (run before every push)
"""
import glob, os, re, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "tools", "grammar_engine.html")
REGIONS = ("engine-css", "engine-js")

def region(text, name):
    m = re.search(r"<!-- GP:%s start -->.*?<!-- GP:%s end -->" % (name, name), text, re.S)
    return m

def main():
    check = "--check" in sys.argv
    src = open(SRC, encoding="utf-8").read()
    stale = 0
    for p in sorted(glob.glob(os.path.join(ROOT, "toefl", "grammar", "*.html"))):
        s = open(p, encoding="utf-8").read()
        if "<!-- GP:engine-js start -->" not in s:
            continue
        new = s
        for r in REGIONS:
            a, b = region(src, r), region(new, r)
            assert a and b, (p, r)
            new = new[:b.start()] + a.group(0) + new[b.end():]
        if new != s:
            stale += 1
            print(("stale  " if check else "synced ") + os.path.relpath(p, ROOT))
            if not check:
                open(p, "w", encoding="utf-8").write(new)
    if check and stale:
        sys.exit(1)
    if not stale:
        print("all session pages match tools/grammar_engine.html")

main()
