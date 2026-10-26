# Grammar Practice (grammar/)

Thirty sessions at B1 → B2, one TOEFL ITP grammar point each, 100 items per session.
Every page is self-contained: the shared engine (CSS + JS) is copied into each page, and
each page carries its own data in the `GP:data` block.

## Files and tools

- `tools/grammar_engine.html` — the single source of the engine. Edit it, then run
  `python3 tools/sync_grammar.py` to copy it into every page (`--check` before pushing).
- `tools/check_grammar.py` — item counts, answer balance and error positions. Must pass.
- `index.html` — the section index; rows switch from “Coming” to a link when a session goes live.

## Session shape (100 items)

| Block | Items | Scored |
|---|---|---|
| Warm-up (right or wrong?) | 6 | yes |
| Explain (6 pattern cards + TOEFL tip) | — | — |
| Structure (ITP format) | 30 | yes |
| Written Expression (ITP format) | 30 | yes |
| Practice | 16 | yes |
| Production | 10 | gap, unscramble: yes · transform, combine: compared with a model |
| Exit check (4 Structure + 4 Written Expression, alternating) | 8 | yes |

## Data (`const S = {…}`)

- `slug, n, of, theme, title` — `title` is used in the print header and key.
- `warm: [{t, ok, fix?, w}]` — `fix` (HTML) only when `ok` is false.
- `pats: [{h, rule, no, yes, why}]` — six cards; `no` marks the error with `<span class="strike">`, `yes` the fix with `<b>`.
- `trap` — one TOEFL tip (HTML).
- `str: [{s:[before, after], o:[4 options], a, w}]` — `a` is 0-based.
- `we: [{p:[[text, underlined 0/1], …], a, f, w}]` — exactly 4 underlined parts; `f` is the
  correction (empty string = delete the part).
  `x: 1` marks an item whose error is **off** the session topic. Exactly half of `we` and half
  of the exit check’s Written Expression items carry it: the topic structure is underlined and
  correct, and the error is elsewhere (article, plural, preposition, word form, tense…), so
  students can’t answer by always picking the topic part.
- `exit: [{k:"str"|"we", …same fields}]`.
- `prac`, `prod`: `{type, title, instr, …}` where `type` is one of
  - `sort` — `cols:[…]`, `items:[{t, c, w}]`, optional `poolTitle`, `binPrefix`. The engine shuffles the cards.
  - `match` — `colL, colR`, `items:[{t, m, w}]`. The engine shuffles the right column (never 1 = a).
  - `gap` — `items:[{s:[before, after], a:[accepted…], h?, w}]` (typed, scored).
  - `unscramble` — `items:[{a:[accepted sentences…], h?, keep?, w}]`; tiles come from `a[0]`.
  - `transform` — `items:[{t, cue, a:[models…], w}]`.
  - `combine` — `items:[{t:[sentence 1, sentence 2], h?, a:[models…], w}]`.
  - `para` — `paras:[[ "plain text", {t}, {t, f, w}, … ], …]`; `{t}` is a correct underlined
    part, `{t, f, w}` a wrong one. 30–60% of parts should be wrong.

## Balance rules (enforced by check_grammar.py)

- Structure and Written Expression: 30 items each; every letter correct at least 6 times; no
  letter three times in a row. Exit check: every letter at least twice.
- Written Expression (with the exit items): the error falls early, middle and late in the
  sentence at least 6 times each, and the wrong part appears only once in the sentence.

Storage key: `adv:grammar-practice:<slug>`.
