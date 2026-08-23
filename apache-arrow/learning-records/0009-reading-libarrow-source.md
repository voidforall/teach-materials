# 0009 — Lesson taught: reading libarrow source (graduation of theory arc)

**Date:** 2026-08-23

Lesson 0009: guided four-stop source tour — ArrayData (six fields = the whole course; null_count kUnknown laziness), Buffer/memory_pool (parent-pinning field, 64-byte alignment, backend switch), builders (Reserve doubling, BitmapWriter, Finish transfer), compute (function.cc signature dispatch, macro-generated kernel tables in kernels/scalar_arithmetic.cc, and_bitmaps). Source paths verified against the live repo (compute/kernels layout confirmed via GitHub, 2026-08-23).

**Emphasized:** the 600k-line repo has a small load-bearing core; breadth composes from primitives. Checklist safari with greps; checkboxes double as spaced-retrieval diagnostics.

**Noted for future:** REE (run-end encoding) flagged as a candidate fourth-layout-trick lesson if the user asks. Course pivots to maintenance mode after capstone: spaced review, drill re-runs.

**Next up (Lesson 10, optional capstone):** small C++ tool — build → slice → compute → IPC write, annotated by lesson. Then maintenance schedule.
