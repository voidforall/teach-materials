# 0006 — Lesson taught: dictionary encoding

**Date:** 2026-08-23

Lesson 0006 delivered the third layout trick: dictionary = indices array (fixed-width recipe, nulls in its bitmap) + shared payload array. Covered compute special-casing (take gathers indices; some kernels force decode), slicing pins full payload, IPC dictionary messages (replace/delta), and unification as a copy-trigger.

**Emphasized (likely-new, non-obvious):**
- Win condition cardinality ≪ length; high cardinality = pure overhead + indirection.
- Payload never contains a "null entry" — nulls are null indices.
- Dictionary messages out-of-band in IPC; delta messages keep old indices valid.
- concat/compare across differing dictionaries ⇒ dictionary_unify (re-index copy).

**Practice artifacts:** `assets/dictionary-decode-drill.js` (dictionary[indices[i]] with bitmap check, streak-based). pyarrow task: cast to dictionary, inspect manifest (2 tiny buffers), payload identity check, dict-vs-plain equal timing, cast-decode.

**Housekeeping:** cheat sheet extended with "Beyond one array" block (dictionary, IPC framing, kernel validity rule) — clears the pending IPC-block item from records 0004/0005.

**Next up (Lesson 7):** Arrow Flight — gRPC, DoGet/DoExchange, the Lesson 4 stream over the network, dictionaries as a protocol concern. Then pivot to the build arc: C++ ArrayBuilders, memory pools, reading libarrow source.
