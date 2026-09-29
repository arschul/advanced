#!/usr/bin/env python3
"""Content checker for arschul/advanced — enforces CONTENT-STANDARDS.md.

  python3 tools/check_content.py [repo-root]

Exit 1 on any FAIL. Known, deliberate exceptions are listed in ALLOW and
reported as notes, so they stay visible without blocking a push.
Needs node on PATH (vocab and Project Lab data are JavaScript).
"""
import glob, html, json, os, re, subprocess, sys

ROOT = os.path.abspath(sys.argv[1]) if len(sys.argv) > 1 else \
    os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# rule -> {path: reason}
ALLOW = {
    "fonts": {"intensive-b2-c1.html": "system fonts kept for the dense course-navigator UI"},
}

VOCAB_FIELDS = ["word", "pos", "def", "colls", "ex", "note", "pitfall", "family", "tags", "contrast"]
VOCAB_POS = {"n", "v", "adj"}
VOCAB_TAGS = {"formal", "academic", "informal", "everyday", "policy", "negative",
              "figurative", "tech", "business", "euphemism"}
STYLE_HOSTS = ("https://fonts.googleapis.com/", "https://arschul.github.io/assets/")

fails, notes = [], []


def fail(path, msg):
    reason = ALLOW.get(msg.split(":")[0], {}).get(path)
    (notes if reason else fails).append(f"{path}: {msg}" + (f"  [allowed — {reason}]" if reason else ""))


def rel(p):
    return os.path.relpath(p, ROOT).replace(os.sep, "/")


def node_json(code):
    return json.loads(subprocess.check_output(["node", "-e", code], cwd=ROOT))


# ------------------------------------------------------------------ every page
def check_pages():
    pages = [p for p in glob.glob(os.path.join(ROOT, "**", "*.html"), recursive=True)
             if "/.git/" not in p]
    for p in sorted(pages):
        r = rel(p)
        s = open(p, encoding="utf-8").read()
        is_hub = r == "index.html"

        m = re.search(r"<title>(.*?)</title>", s, re.S)
        if not m:
            fail(r, "title: missing <title>")
        else:
            t = html.unescape(m.group(1)).strip()
            if " · " not in t or " — " in t or " – " in t or "GrammarHub" in t:
                fail(r, f"title: {t!r} is not 'Page · Parent'")

        if not is_hub and "<!-- HUBGEN:leaf start -->" not in s:
            fail(r, "leaf: no HUBGEN:leaf region (run leafgen.py)")

        for key in re.findall(r"""(?:get|set)Item\(\s*['"]([\w:-]*theme)['"]""", s):
            if key != "arschul:theme":
                fail(r, f"theme: per-page theme key {key!r} (use arschul:theme)")
        if re.search(r"body\.dark\b|body\.classList\.toggle\(\s*['\"]dark", s):
            fail(r, "theme: dark mode on <body>; use <html data-theme>")

        if re.search(r"(?<![\w.])(alert|confirm|prompt)\(", s):
            fail(r, "dialog: alert/confirm/prompt — show messages inline")

        for href in re.findall(r'<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"', s) + \
                re.findall(r'<link[^>]*href="([^"]+)"[^>]*rel="stylesheet"', s):
            if not href.startswith(STYLE_HOSTS):
                fail(r, f"style: external stylesheet {href}")
        if not is_hub and "fonts.googleapis.com" not in s:
            fail(r, "fonts: no Google Fonts link")


# ------------------------------------------------------------------ intensive
def check_intensive():
    p = os.path.join(ROOT, "intensive-b2-c1.html")
    if not os.path.exists(p):
        return
    s = open(p, encoding="utf-8").read()
    i, j = s.index("const DAYS_HTML"), s.index("const DAYS_META")
    h2 = [html.unescape(x) for x in re.findall(r'<div class="day-hd"><h2>([^<]*)</h2>', s[i:j])]
    ph = [html.unescape(x) for x in re.findall(r'<div class="ph-hd"><strong>([^<]*)</strong>', s[i:j])]
    meta = ["Day %s — %s" % (d, html.unescape(t)) for d, t in re.findall(r'\{day:(\d+),theme:"([^"]*)"', s)]
    if not (len(h2) == len(ph) == len(meta)):
        fail("intensive-b2-c1.html", f"days: {len(h2)} headers, {len(ph)} print headers, {len(meta)} DAYS_META")
    for n, (a, b, c) in enumerate(zip(h2, ph, meta), 1):
        if not a == b == c:
            fail("intensive-b2-c1.html", f"days: slot {n} reads {a!r} / {b!r}, DAYS_META says {c!r}")


# ------------------------------------------------------------------ project lab
def check_projects():
    if not os.path.exists(os.path.join(ROOT, "projects-data.js")):
        return
    P = node_json('const vm=require("vm"),c={};vm.createContext(c);'
                  'vm.runInContext(require("fs").readFileSync("projects-data.js","utf8"),c);'
                  'process.stdout.write(JSON.stringify(c.ADVANCED_PROJECTS))')
    seen = set()
    for p in P:
        pid = p.get("id")
        if pid in seen:
            fail("projects-data.js", f"projects: duplicate id {pid!r}")
        seen.add(pid)
        ids = [s["id"] for s in p["stages"]]
        if ids != ["s%d" % k for k in range(1, len(ids) + 1)]:
            fail("projects-data.js", f"projects: {pid} stage ids {ids}")
        total = sum(s["hours"] for s in p["stages"])
        if abs(total - p["hours"]) > 1e-9:
            fail("projects-data.js", f"projects: {pid} stages sum to {total}h, project says {p['hours']}h")
        ns = [x["n"] for s in p["stages"] for x in s["steps"]]
        if ns != list(range(1, len(ns) + 1)):
            fail("projects-data.js", f"projects: {pid} steps not numbered 1..{len(ns)}")


# ------------------------------------------------------------------ vocabulary
def check_vocab():
    files = sorted(glob.glob(os.path.join(ROOT, "vocab", "data", "*.js")))
    if not files:
        return
    V = node_json('global.window={};const fs=require("fs");'
                  'for(const f of fs.readdirSync("vocab/data").filter(f=>f.endsWith(".js")))'
                  '(0,eval)(fs.readFileSync("vocab/data/"+f,"utf8"));'
                  'process.stdout.write(JSON.stringify(window.VOCAB))')
    idx = open(os.path.join(ROOT, "vocab", "index.html"), encoding="utf-8").read()
    listed = set(re.findall(r"\{slug:'([\w-]+)'", idx))
    heads = {}
    for f in files:
        slug = os.path.basename(f)[:-3]
        r = rel(f)
        t = V.get(slug)
        if not t:
            fail(r, f"vocab: file does not define window.VOCAB.{slug}"); continue
        if slug not in listed:
            fail(r, f"vocab: {slug} missing from THEMES in vocab/index.html")
        for k in ("slug", "title", "icon", "blurb", "items"):
            if k not in t:
                fail(r, f"vocab: theme lacks {k!r}")
        items = t.get("items", [])
        if len(items) != 40:
            fail(r, f"vocab: {len(items)} items (expected 40)")
        for it in items:
            w = it.get("word", "?")
            miss = [k for k in VOCAB_FIELDS if k not in it]
            if miss:
                fail(r, f"vocab: {w!r} missing {miss}")
            if len(it.get("colls", [])) != 3:
                fail(r, f"vocab: {w!r} has {len(it.get('colls', []))} collocations (expected 3)")
            if it.get("pos") not in VOCAB_POS:
                fail(r, f"vocab: {w!r} pos {it.get('pos')!r}")
            bad = set(it.get("tags", [])) - VOCAB_TAGS
            if bad:
                fail(r, f"vocab: {w!r} unknown tags {sorted(bad)}")
            if sorted((it.get("contrast") or {}).keys()) != ["bad", "good", "why"]:
                fail(r, f"vocab: {w!r} contrast needs good/bad/why")
            heads.setdefault(w.lower(), []).append(slug)
    for w, where in heads.items():
        if len(where) > 1:
            fail("vocab/data", f"vocab: headword {w!r} appears in {where}")


def main():
    check_pages()
    check_intensive()
    check_projects()
    check_vocab()
    for n in notes:
        print("  note ", n)
    for f in fails:
        print("  FAIL ", f)
    print()
    if fails:
        print("CONTENT CHECK FAILED (%d)" % len(fails))
        return 1
    print("CONTENT CHECK PASSED" + (" (%d allowed exceptions)" % len(notes) if notes else ""))
    return 0


if __name__ == "__main__":
    sys.exit(main())
