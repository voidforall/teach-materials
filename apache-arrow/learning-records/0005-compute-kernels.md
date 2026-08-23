# 0005 — Lesson taught: the compute layer

**Date:** 2026-08-23

Lesson 0005 opened the compute arc: kernels as pure buffer-in/buffer-out functions, validity propagation as bitmap logic, kernel-signature dispatch (no JIT), the four function families (scalar/vector/scalar-aggregate/hash-aggregate), chunk plumbing, and immutability ⇒ fresh output buffers per kernel.

**Emphasized (likely-new, non-obvious):**
- Output validity for elementwise ops = bitwise AND of input bitmaps; absent bitmap = implied all-ones (Lesson 1 rule becomes a kernel fast path).
- Null semantics are part of the kernel signature (add propagates, coalesce absorbs, aggregates skip).
- One API name → many registered kernels per type combination; dispatch is function-table matching with implicit promotion.
- filter/take are "vector functions" — the structural reason they copy (ties to Lesson 3).

**Practice artifacts:** `assets/validity-logic-drill.js` (mark output nulls for add/coalesce given input bitmaps, streak-based). pyarrow task audits pc.add's output bitmap by hand and peeks at `get_function("add").kernels`.

**Next up (Lesson 6):** dictionary encoding — indices buffer + dictionary payload, take-over-dictionary as index gather, decode/encode kernels, dictionary replacement in IPC. Also pending: IPC block in the cheat sheet.
