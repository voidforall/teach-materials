# 0004 — Lesson taught: IPC, Feather & mmap

**Date:** 2026-08-23

Lesson 0004 completed the layout→ownership→serialization arc: IPC encapsulated messages (Flatbuffer manifest + raw buffer body), stream vs file containers (footer + ARROW1 magic ⇒ random access), and mmap deserialization as Buffer views over page cache.

**Emphasized (likely-new, non-obvious):**
- Metadata = buffer manifest (offset,length) into body; omitted buffers (Lesson 1's all-default validity) serialize as zero-length manifest entries.
- mmap arrays pin the mapping like slices pin parents — same ownership model one level up; read-only, so writes force copies.
- Stream = append-only frames (Flight territory); file = footer-indexed random access.

**Practice artifacts:** pyarrow task — write/read .arrow, verify ARROW1 magic both ends, memory_map → open_file → inspect read-only buffers, compare stream vs file byte delta, xxd hexdump bonus. No new widget (quiz + diagram sufficed; drills 1–3 remain interleavable).

**Next up (Lesson 5):** the compute layer — pa.compute kernels as buffer-in/buffer-out vectorized functions, kernel dispatch over types, validity handling in kernels. Then 6: dictionary encoding; 7: Arrow Flight. Also pending: extend the cheat sheet with an IPC block once Lesson 5 lands.
