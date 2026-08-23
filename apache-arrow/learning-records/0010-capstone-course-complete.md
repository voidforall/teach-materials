# 0010 — Capstone delivered; course complete, enters maintenance

**Date:** 2026-08-23

Lesson 0010 + `reference/capstone-build-slice-compute-ipc.cc`: annotated C++ tool exercising the full lifecycle (builder → layout inspection → zero-copy slice → compute → IPC write → mmap round-trip), each section labeled by lesson. CMake snippet, expected output, interleaved course-wide quiz, three extension directions (dictionary encode, chunked building, Flight serve).

**Course state:** 10 lessons, 6 drill widgets, cheat sheet (extended), capstone source. All three mission goals covered: layout fluency (1–2,6), performance reasoning (3–5), C++/pyarrow API + IPC (4,7–10).

**Maintenance plan (spaced retrieval):** 3 days — bitmap drill + cheat sheet; 1 week — offsets & dictionary drills; 2 weeks — zero-copy classifier + Flight verbs; 1 month — full quiz set. User invokes by asking agent to drill.

**Future candidates if user returns:** run-end encoding (REE) mini-lesson; Flight SQL; C++ compute kernel authoring; libarrow deep dives (row/ dir, expression.cc).
