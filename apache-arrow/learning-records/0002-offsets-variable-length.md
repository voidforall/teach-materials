# 0002 — Lesson taught: offsets & variable-length layout

**Date:** 2026-08-23

Lesson 0002 delivered the second core layout recipe: validity + int32 offsets (n+1 fenceposts) + contiguous data soup, then generalized to `list<T>` (offsets → child array) and recursion into nested types.

**Emphasized (likely-new, non-obvious):**
- Null vs empty string differ only in the validity bit; both are a `[k,k]` zero-length span.
- Offsets are the vectorizable fixed-stride structure; the soup never moves.
- int32 offsets → 2 GB cap → `large_*` variants with int64.
- Short-string columns are offset-dominated (~4 bytes/row tax).

**Practice artifacts:** `assets/offsets-drill.js` (extract slot given offsets+data, streak-based), hand-decoding pyarrow task using `struct.unpack` on real buffers.

**Next up (Lesson 3):** zero-copy slicing & buffer lifetimes — array-level `offset` field, `Slice()`, why slicing costs 0 bytes, `Buffer` refcounting across the C++/Python boundary. Then Lesson 4: IPC/Feather + mmap.
