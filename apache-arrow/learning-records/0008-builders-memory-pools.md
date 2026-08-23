# 0008 — Lesson taught: builders & memory pools (build arc begins)

**Date:** 2026-08-23

Lesson 0008 started the build-arc: ArrayBuilders as mutable scratch in the known layouts (Int64 = bitmap+values; String = 3 scratches; List/Struct recursive), Finish() as ownership transfer not copy, doubling preallocation (amortized ~2 copies/element, 2× transient memory) vs chunked building (bounded slack), and MemoryPool (64-byte alignment, jemalloc/mimalloc backends, bytes_allocated metering).

**Emphasized (likely-new, non-obvious):**
- Slack lives only inside builders; finished ArrayData is trimmed — the 2× blow-up is construction-time only.
- Finish transfers buffers, builders reset; immutability starts at Finish.
- Chunked building = the same strategy as IPC/Flight max_chunksize, one layer down.

**Practice artifacts:** `assets/growth-sim.js` (interactive doubling vs chunked-1k simulator: capacity/waste/copies columns). pyarrow task probes finished-array tightness vs construction slack.

**Next up (Lesson 9):** guided libarrow source reading — ArrayData, a builder implementation, one elementwise kernel. Then optional capstone: minimal C++ build→slice→IPC tool. Format arc (1–7) + construction (8) done; user can now read real source with full context.
