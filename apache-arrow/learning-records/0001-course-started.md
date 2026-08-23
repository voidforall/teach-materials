# 0001 — Course started: mission is mechanism-first, C++/Python

**Date:** 2026-08-23

The user's mission: build data systems directly on Arrow libraries (C++ libarrow + pyarrow), plus genuine curiosity about the machinery. Wants internals — memory layout, zero-copy, IPC, compute — not a black-box API tour.

**ZPD assessment:** Comfortable with the ecosystem (chose "building on Arrow libs" unprompted), but starting Arrow internals from the ground. Assumed prior exposure to columnar thinking at user level (pandas-adjacent) but not buffer-level.

**Decisions:**
- Lesson 0001 teaches the two-slab model (validity bitmap + values buffer) with an interactive bitmap-decoding drill — the bit-level detail everyone gets backwards (LSB-first) is the perfect desirable difficulty.
- Bytes-first course style: derive the layout, then show the API that produces it.
- Ground truth is the columnar format spec; every lesson cites it.
- Cheat sheet of buffer recipes per type created up-front in `reference/` so lessons can stay tiny.

**Next up (Lesson 2):** offsets & variable-length layout (strings → lists → nested), since it builds directly on the bitmap lesson and the mission needs nested types.
