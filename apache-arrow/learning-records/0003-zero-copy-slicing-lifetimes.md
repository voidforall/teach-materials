# 0003 — Lesson taught: zero-copy slicing & buffer lifetimes

**Date:** 2026-08-23

Lesson 0003 connected the array-level `offset` field (introduced in Lesson 1) to Arrow's ownership model: one immutable allocation, many lightweight views.

**Emphasized (likely-new, non-obvious):**
- Slice = re-pointed metadata (offset+length), 0 bytes moved; slices pin parents — a 100-row window keeps 10 GB alive; sometimes you copy on purpose to release overhang.
- Array-level offset shifts the validity bitmap start bit too — never read buffers raw.
- Zero-copy numpy bridge only for primitive no-null arrays (numpy has no validity concept).
- Copies are unavoidable when result can't be a window: concat, take, filter, cast, combine_chunks.

**Practice artifacts:** `assets/zero-copy-drill.js` — classify 14 operations as zero-copy vs copies, deliberately interleaved across Lessons 1–3 for spacing/interleaving. pyarrow task verifies `a.buffers()[1] is b.buffers()[1]`.

**Next up (Lesson 4):** IPC — encapsulated message framing, RecordBatch stream vs Feather file layout, and mmap: serialized bytes that deserialize to arrays without parsing. After that: compute functions (Lesson 5) and dictionary encoding (Lesson 6).
