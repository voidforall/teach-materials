# 0001 — Course started

## Context
User asked to be taught ClickHouse knowledge & use cases, assuming OLAP basics, bilingual EN/中文, whole course in one sitting ("finish all lessons non stop").

## Decision
10-lesson arc mirroring the apache-arrow course structure:
mechanisms (1–2) → schema design (3–4) → engines & constraints (5–6) → pipelines & SQL (7–9) → decision capstone (10).
Accent color amber #b8860b. Reused shared lesson.css pattern + one new drill component (partsize-drill.js).

## ZPD notes
Skip generic columnar/MPP content; start at ClickHouse differentiators. User's interest is judgment ("when to use"), so every mechanism lesson ends in a decision rule.
