# Advanced Hub

Advanced English (B2 → C1) materials for Phil Young’s English School — courses, TOEFL
preparation, projects and C1 vocabulary. Live at
[arschul.github.io/advanced](https://arschul.github.io/advanced/), linked from the
[Classroom Hub](https://arschul.github.io/).

## What's here

| Page | What it is |
|---|---|
| [`adv4.html`](adv4.html) | Advanced 4 Booklet Companion — 25 sets, grammar, practice and writing drafts |
| [`intensive-b2-c1.html`](intensive-b2-c1.html) | 17-day B2 → C1 evening intensive with printable worksheets |
| [`essay-coach.html`](essay-coach.html) | Step-by-step essay lessons (A2–B2) and a TOEFL-style prompt bank |
| [`toefl-itp.html`](toefl-itp.html) | TOEFL ITP Coach — Listening, Structure & Written Expression, Reading |
| [`toefl/`](toefl/) | TOEFL Error Correction — 11 error families, 330 exercises, Quiz Builder |
| [`project-lab.html`](project-lab.html) | Project Lab — 12 multi-session team projects (data in `projects-data.js`, shared with the teacher dashboard) |
| [`vocab/`](vocab/) | C1 Vocabulary — 12 themes × 40 items (data in `vocab/data/`) |

## Adding content

Read **[CONTENT-STANDARDS.md](CONTENT-STANDARDS.md)** first. It says which family new
content belongs to, the page and data rules, and how to register it on the hub and in the
catalog (`arschul/arschul.github.io/data/catalog.json`).

Before every push (needs `node`):

```
python3 tools/check_content.py
python3 tools/check_balance.py
python3 tools/sync_quiz.py --check
```

After editing any TOEFL sheet's exercises, run `python3 tools/sync_quiz.py` to refresh the
Quiz Builder.
