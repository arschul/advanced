# Advanced Hub — Content Standards

How to add new content to `arschul/advanced` so it matches what is already there.
Read this before building anything new in this repo. Adopted 2026-09-29; the rules that
can be automated are enforced by the checks in §5.

Pages are served at `https://arschul.github.io/advanced/…`. Shared assets, the catalog
and the build tooling live in `arschul/arschul.github.io`.

---

## 1. Content families

Every new item belongs to exactly one family. Pick the family first; it decides the
template, design system, data shape and registration steps.

| Family | Location | Design system | Data lives in |
|---|---|---|---|
| Hub | `index.html` | Spectral + Work Sans, teal | hand-written cards |
| TOEFL Error Correction sheet | `toefl/<slug>.html` | Fraunces + DM Sans, violet + gold | inline `A`, `B`, `C` arrays |
| TOEFL section index / Quiz Builder | `toefl/index.html`, `toefl/quiz.html` | Fraunces + DM Sans | rows / `FAM` (copied from sheets) |
| C1 Vocabulary theme | `vocab/data/<slug>.js` | Fraunces + DM Sans (shell) | external data file |
| Project Lab project | `projects-data.js` | — (shared catalog) | `ADVANCED_PROJECTS` |
| Advanced 4 set | `adv4.html` | own (Bricolage Grotesque + Newsreader) | `DATA.push({...})` |
| Intensive course day | `intensive-b2-c1.html` | own | `DAYS_META` + `DAYS_HTML` (system fonts, see Appendix) |
| Essay Coach lesson / prompt | `essay-coach.html` | Fraunces + Inter | `LESSONS`, `PROMPTS` |
| TOEFL ITP item | `toefl-itp.html` | Fraunces + Inter | `PART_A`, `PART_C`, `STRUCTURE`, `WRITTEN`, `READING` |
| IELTS Listening test | `ielts/data/<slug>.js` | Fraunces + DM Sans (shell `ielts/listen.html`) | external data file |
| New standalone page | `<slug>.html` at root | Spectral + Work Sans, teal | inline, or `data/` if large |
| New section | `<section>/index.html` + leaves | Fraunces + DM Sans | per-leaf or `<section>/data/` |

Content that fits an existing family is added **inside** that family — a new sheet, theme,
project or set — never as a parallel one-off page.

---

## 2. Rules for every page

### Files and paths
- Lowercase kebab-case file names: `sentence-boundaries.html`, `data/urban.js`.
- One self-contained HTML file per page: inline CSS and JS, Google Fonts as the only
  external stylesheet. External data files only where there is precedent: per-theme data
  (`vocab/data/`) and catalogs shared with another app (`projects-data.js`).
- A new section gets its own folder with an `index.html`.

### `<head>` order
```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Page Name · Parent</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=…&display=swap" rel="stylesheet">
<!-- HUBGEN:leaf start --> … <!-- HUBGEN:leaf end -->
<style>…</style>
```
- The `HUBGEN:leaf` region is inserted by `leafgen.py` (in `arschul.github.io`). Do not
  hand-edit it; if writing it by hand, copy it byte-for-byte from an existing leaf.

### Title
- Format: `Page Name · Parent` with a middle dot.
  - Root-level page: `Project Lab · Advanced Hub`
  - Section leaf: `Word Form · TOEFL Error Correction`
- No em dashes, en dashes or other hub names (`GrammarHub`) in `<title>`.

### Theme
- Dark by default. Light mode via `:root[data-theme="light"]{…}` overriding the same tokens.
- Theme is set on `<html data-theme>`, never as a class on `<body>`.
- **No per-page theme key.** The shared key is `arschul:theme`, handled by the leaf region.
  Don't read a theme from storage at load — the leaf boot script already has.
- A toggle button gets class `theme-btn` or `theme-toggle` and calls `window.toggleTheme()`
  at click time (`onclick="toggleTheme()"` does this). `leaf.v1.js` replaces
  `window.toggleTheme` with the shared dark / light / system cycle. Define a local fallback
  in case the shared script fails to load:
  ```js
  function toggleTheme(){
    var r=document.documentElement, t=r.getAttribute('data-theme')==='dark'?'light':'dark';
    r.setAttribute('data-theme',t);
    try{localStorage.setItem('arschul:theme',t)}catch(e){}
  }
  ```
  A handler bound directly (`btn.onclick=()=>{…}`) bypasses the shared cycle — don't.
- Token names: `--bg --surface --surface2 --text --muted --border --radius` plus the family
  accent (`--teal`, or `--violet` / `--key-accent` in the Fraunces family).

### Navigation
- Every page has a visible way back, top-left, in the page's own style:

| Page | `href` | Label |
|---|---|---|
| Root-level page | `./index.html` | `← Advanced Hub` |
| Section leaf | `./index.html` | `← <Section name>` |
| Section index | `../index.html` | `← Advanced Hub` |

- Footer: `Part of the <Section> section · Advanced Hub · Phil Young’s English School`
  (root-level pages drop the first part).

### Storage
- Wrap every `localStorage` call in `try/catch`; the page must work without it.
- New keys: `adv:<page-slug>:<what>`, e.g. `adv:debate-lab:progress`.
- Add a `-v2` suffix only when the stored shape changes.
- **Never rename an existing key** — it silently wipes saved progress. (That is why
  `toefl-sva-v2-v2` stays as it is.)

### Exercises and answers
- Answers are revealed inline, one item at a time, in any order (per-question **Show** or
  tap-to-reveal). A "reveal all" control is optional and never the only option.
- No `alert()`, `confirm()` or modal dialogs.
- Every page with exercises offers **Print worksheet** and **Print answer key**:
  - worksheet print: a `printhead` line with `Name: ____  Date: ____`, answers hidden;
  - key print: answers visible, set in the key accent;
  - print CSS is black on white, no backgrounds, `break-inside: avoid` on items.
- A **Start over** button clears scored answers *and* reveals.

### Answer balance (applies to every multiple-choice set, not just TOEFL sheets)
- In each displayed set of *n* four-option items, every position (A–D) is correct between
  max(1, round(n/4) − 1) and ceil(n/4) + 1 times — e.g. 2–4 for 12 items, 1–2 for 4.
  (TOEFL sheets keep their own bounds: Set A 2–5, Set B 2–4.)
- No more than 2 identical correct positions in a row.
- Error-spotting items: the error falls early / middle / late in the sentence at least once
  each per set, and the error span appears only once in the sentence.
- A sentence-initial correction starts with a capital letter.
- Matching exercises shuffle their definitions (never 1=a, 2=b, 3=c).

### Language and copy
- American English, spelling and word choice. *Dialogue* and *theatre* are acceptable.
  Deliberate US/UK contrasts belong only in vocabulary `note` / `contrast` fields.
- Run `lint_copy.py report` before pushing and classify every hit.
- English only, with two exceptions: C1 vocabulary `pitfall` / `contrast.why` (Portuguese-
  speaker errors) and the Project Lab rubric `labelPt`.
- Typography: curly apostrophes (’), en dash for ranges (`1–12`), em dash for breaks (—),
  middle dot as a separator (·), arrow for level ranges (`B2 → C1`), CEFR codes uppercase.
- Example sentences are plausible, adult and topic-neutral; no real living people.

### Levels
- Use CEFR codes. A page states the full range it serves in its chips and its catalog entry
  (`["B1","B2"]`), not a default `["C1"]`.

---

## 3. Recipes by family

### 3.1 New TOEFL Error Correction sheet
Copy the most recent sheet (`toefl/verb-forms.html`) and keep its structure exactly.

Page content:
- Eyebrow: `Phil Young’s English School · Sheet N of M`
- `<h1>` with one word in `<span class="accent">`, then a lede.
- Actions: **Print worksheet** · **Print answer key** · **Start over**.
- `<h2>The twelve patterns</h2>` — exactly 12 `<details class="pat">`, each with an `.ex.no`
  (error in `<span class="strike">`), an `.ex.yes` (fix in `<b>`), and a `.why`.
- Set A · *Choose the correct form* — questions 1–12
- Set B · *Find the error* — questions 13–22
- Set C · *Correct the sentence* — questions 23–30

Data shapes:
```js
// Set A — 12 items
{s:["before gap ","after gap"], o:["opt0","opt1","opt2","opt3"], a:0, w:"why (HTML ok)"}
// Set B — 10 items; p = [text, underlined?]; exactly 4 underlined parts
{p:[["text ",0],["part",1],…], a:2, f:"correction", w:"why"}
// Set C — 8 items; x must occur exactly once in t
{t:"full sentence", x:"error span", a:["accepted fix"], p:<pattern number>, w:"why"}
```
- Display order is set by `_PA`, `_PB`, `_PC` permutations; balance is checked on the
  displayed order.
- Each Set C `w` points to a correct example of the same pattern elsewhere in the sentence.

Registration:
1. Renumber `Sheet N of M` in **every** sheet.
2. Add a row to `toefl/index.html` (its `<h3>` becomes the family name in the Quiz
   Builder) and update the exercise totals there and on the hub card (currently 11 / 330).
3. `python3 tools/sync_quiz.py` — rebuilds the Quiz Builder bank from the sheets.
4. Catalog item `toefl-<slug>` (see §4). Storage key `toefl-<slug>-v2` for consistency
   within the section.
5. `python3 tools/check_balance.py` must pass (it finds sheets on its own).

The sheet also needs `const PAT=[""…]` — the twelve short pattern labels the Quiz Builder
shows. Any later edit to a sheet's exercises means running `sync_quiz.py` again;
`sync_quiz.py --check` fails if the bank is stale.

### 3.2 New C1 Vocabulary theme (or new items)
File `vocab/data/<slug>.js`:
```js
/* <Title> — 40 items at C1. Schema: word, pos, def, colls[3], ex, note, pitfall, family, tags, contrast{good,bad,why} */
window.VOCAB = window.VOCAB || {};
window.VOCAB.<slug> = {
  slug: "<slug>", title: "<Title>", icon: "<one emoji>", blurb: "<one sentence>",
  items: [ { word, pos, def, colls:[3], ex, note, pitfall, family, tags:[…],
             contrast:{good, bad, why} }, … ]
};
```
- Exactly 40 items; exactly 3 collocations each; all ten fields present.
- `pos`: `n`, `v` or `adj` (phrasal verbs are `v`). Aim for at least 25% verbs + adjectives
  in a new theme — the first twelve are 86% nouns.
- `tags` from the existing vocabulary: `formal, academic, informal, everyday, policy,
  negative, figurative, tech, business, euphemism`. Add a new tag only deliberately.
- No headword may already exist in another theme.
- `def` is one sentence; `ex` is one sentence using the headword; `family` uses
  `word (pos) · word (pos)`.

Registration: add to `THEMES` in `vocab/index.html` (`live:true`), catalog item
`c1-vocab-<slug>` with path `vocab/theme.html#/<slug>`, 25 minutes, `whole-class`.

### 3.3 New Project Lab project
Add an object to `ADVANCED_PROJECTS` in `projects-data.js` following the schema comment in
that file. This file is also loaded by the teacher dashboard.
- 6 stages with ids `s1`–`s6`; steps numbered `n` continuously from 1 across the project.
- Stage `hours` sum exactly to the project's `hours`.
- `extra` adds the one project-specific rubric criterion.
- **Never renumber or reuse step ids** on a project that has been assigned; bump the
  project's `version` when steps change materially, and update
  `ADVANCED_PROJECTS_META.updated`.

### 3.4 New Advanced 4 set / Intensive day / Essay Coach / TOEFL ITP item
These are single-file apps; copy an existing entry and keep its shape.
- **Advanced 4**: `{n, t, s, grp, tags, sec:[{L, t, learn:[{b:…}], ex:[…]}]}`. `grp` is
  one of `Grammar core`, `Review`, `Skills & writing`. `learn` block types: `p, table,
  note, trick, eg, formula`.
- **Intensive**: add to `DAYS_META` and `DAYS_HTML` at the same index; the `<h2>` and
  print header must read `Day <n> — <theme>` matching `DAYS_META` exactly.
- **Essay Coach**: prompts are `{level, cat, text}`; `level` in `LEVELS`, `cat` in `CATS`.
- **TOEFL ITP**: `a` is a 0-based index (Written Expression uses a letter). Balance is
  checked per displayed set — each Listening part / talk, Structure, Written Expression,
  and each Reading passage — by `check_balance.py`. In Written Expression the letters mark
  underlined parts in sentence order, so balance comes from where the error sits, not from
  reordering. A `why` that names an option by letter must be re-read after any reorder.

### 3.5 New standalone page or section
- Root-level page: Advanced Hub design system (Spectral + Work Sans, teal tokens copied
  from `index.html`).
- New section: Fraunces + DM Sans system copied from `toefl/index.html`, with its own
  `index.html` listing rows or cards.
- Add a card to `index.html` under **Courses**, **Tools** or **Resources** by copying an
  existing `course-card` (or `mini-card` for Resources): icon, three chips, `<h3>`, one-
  paragraph blurb, three `meta-item`s, and `Open <Name>` in `card-enter`. The hub's cards
  are hand-written — there is no `HUBGEN:cards` region here.

---

### 3.6 New IELTS Listening test
File `ielts/data/<slug>.js` (`test-3`, `test-4`, …), copied from `ielts/data/test-2.js`:
```js
window.IELTS = window.IELTS || {};
window.IELTS["<slug>"] = { slug, title: "Test N", blurb, parts: [
  { n, title, ctx, speakers: { X: { n: "Name", g: "f|m", acc: "en-GB|en-US|en-AU|…" } },
    groups: [ … ], script: [ … ] }  // exactly four parts, questions 1–40
]};
```
- Script lines: `{nar}` narrator, `{pause: seconds}` reading time, `{sp, t, tts?}` speech.
  `[[n|text]]` marks where the answer to question *n* is heard — exactly one per question,
  in that question’s part. `tts` overrides what is spoken (phone numbers, odd readings);
  spelled words written `H-A-L` are read letter by letter automatically.
- Group types: gap types `form`, `notes`, `table`, `flow`, `sentences`, `summary`, `short`
  (with `{n}` placeholders, `ans: {n: [accepted…]}` and `limit: {w, num}`); `mc` (three
  options, 0-based `a`); `mc2` (choose TWO: five options, `a: [i, j]`, counts as two
  questions); `match` (`opts: [[letter, text]]`, items with a letter); `map` (inline `svg`
  with `m-key` letter markers, `letters`, items with a letter).
- Every accepted answer obeys its group’s word limit; list US and UK spellings both.
- Each part follows the real format: Part 1 two-speaker everyday transaction, Part 2
  monologue, Part 3 two to four speakers in an academic setting, Part 4 lecture.
  Scripts are original and include the usual distractors (self-corrections, rejected options).
- Answer balance for 3-option MC **(new)**: across a test’s single-answer MC, each letter
  is correct at least twice and never three times in a row.

Registration: add the slug to `TESTS` and a `<script src="data/<slug>.js">` tag in
`ielts/index.html`, a catalog item `ielts-listening-<slug>` with path
`ielts/listen.html#/<slug>`, refresh the hub card’s counts, and run
`python3 tools/check_ielts.py` (must pass).

## 4. Catalog entry (every linkable page)

Add an item to `arschul.github.io/data/catalog.json`:
```json
{
  "id": "<section>-<slug>",
  "hub": "advanced",
  "path": "<path relative to repo root>",
  "title": "<Section> — <Page>",
  "blurb": "<one or two sentences, same as the card>",
  "icon": "",
  "levels": ["B2", "C1"],
  "skills": ["reading", "writing"],
  "mode": "solo | team | whole-class | teacher",
  "prep": "none | print | setup",
  "minutes": 30,
  "keywords": ["…"],
  "status": "live",
  "section": "<section slug, if any>"
}
```
- `id` is unique across the catalog and never a bare word like `index`.
- `skills` from: `speaking, listening, reading, writing, grammar, vocabulary, admin,
  assessment` — list what the page actually trains.
- `prep` is `print` for any page whose main use is a printed worksheet.

---

## 5. Before pushing

In this repo (all need `node` on PATH):
```
python3 tools/check_content.py      # titles, theme, leaf region, dialogs, fonts, data schemas
python3 tools/check_balance.py      # answer positions: TOEFL sheets + TOEFL ITP
python3 tools/sync_quiz.py --check  # Quiz Builder bank matches the sheets
python3 tools/check_ielts.py        # IELTS Listening: numbering, anchors, word limits, balance
```
Then:
1. Extract each changed `<script>` block and run `node --check` on it (and on any `.js`
   data file).
2. From the folder holding the cloned repos: `python3 arschul.github.io/hubgen.py check`,
   then `index` for the search index; `leafgen.py` for new leaves (it skips only each
   repo's root `index.html`).
3. `lint_copy.py report` — resolve or justify every hit.
4. Open the page in both themes, run one exercise end to end, print both worksheet and key.
5. Edits to existing files use unique-anchor replacements (`src.count(old) == 1`).
6. Push with `push_tree.py` — one commit per logical change, message
   `<area>: <imperative summary>` (e.g. `TOEFL error correction: add Sheet 12 …`).
   Changes to `arschul.github.io` (catalog, index) go in the same session.

---

## Appendix — deliberate exceptions

These don't meet the rules above and are kept on purpose. `check_content.py` reports
the first as a note, not a failure.

1. **Intensive course fonts.** `intensive-b2-c1.html` keeps system fonts — it is a dense
   course-navigator UI. Its theme does follow the shared key.
2. **`toefl-sva-v2-v2`.** The subject–verb agreement sheet's progress key has a doubled
   suffix. Renaming it would wipe saved progress, so it stays.
3. **Vocabulary noun share.** The first twelve themes are 86% nouns. The 25% verb/adjective
   target applies to new themes only.
