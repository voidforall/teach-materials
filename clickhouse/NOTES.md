# Notes

- Mission gathered 2026-08-23: user has OLAP basics; wants ClickHouse knowledge + use cases; bilingual EN/中文; "finish all lessons non stop" — so the whole course was authored in one session rather than one lesson per session.
- Course style follows apache-arrow course: shared `assets/lesson.css` (recolor: amber #b8860b), details-based retrieval quizzes, `.keystone` for the core aha, `.antipattern` for don't-do-this, `.task` for hands-on SQL.
- Assumed prior knowledge: columnar storage, star schema, MPP basics. Lessons skip generic OLAP motivation.
- Interactive component: `assets/partsize-drill.js` (granule/part arithmetic + compression-ratio estimate drill), reused by lessons 2–4.
- Primary sources: clickhouse.com/docs (authoritative), the Altinity blog for operator wisdom.
