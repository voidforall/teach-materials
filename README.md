# teach-materials

Personal learning repo. Stores materials created with the `/teach` skill plus assorted study notes.

**Read online:** <https://voidforall.github.io/teach-materials/> — course index served by GitHub Pages.

## Structure

One folder per topic at the repo root. Keep each folder self-contained.

## Conventions

- One topic per folder.
- Prefer many small Markdown files over few large ones.

## Bilingual pages (convention)

Every public page (lesson, glossary) exists as an English original `NNNN-name.html`
plus a Chinese version `NNNN-name.zh.html` in the same folder:

- The Chinese page is a **full translation of the prose**; **key terminology stays in
  English** on first use with an optional Chinese gloss — 交换机（exchange）— and in
  English thereafter. Messaging terms (exchange, binding, routing key, prefetch, ack,
  dead-letter, idempotency…) and game-theory terms (Nash equilibrium, best response,
  backward induction…) are never translated away.
- Diagrams/SVG keep their English labels — consistent with the terminology rule.
- Each page carries a **language toggle button** in its masthead kicker (`.langbtn`):
  `中` on English pages, `EN` on Chinese pages, linking to the counterpart. Injected
  by `python3 scripts/add_lang_switches.py` (idempotent — run it after creating a new
  bilingual pair; styling lives in each course's `assets/lesson.css`). Lesson-to-lesson
  nav links point to same-language files.
- `scripts/build_index.py` detects `.zh.html` siblings automatically and adds a 中
  badge per lesson. When editing a page, update its pair too.
- Course working notes (`NOTES.md`, `MISSION.md`, learning records) stay in English —
  they are agent-facing teaching state, not reader-facing pages.

## Site (GitHub Pages)

Served from the root of `main`; `.nojekyll` keeps HTML served as-is. After adding
lessons, regenerate the index and commit it:

```sh
python3 scripts/build_index.py            # add --exclude <folder> for untracked courses
```
