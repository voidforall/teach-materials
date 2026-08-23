# Mission: Apache Arrow — internals, mechanisms & APIs

## Why
The user is building data systems directly on Arrow libraries (C++ and Python/pyarrow) and, beyond that, wants a genuine mechanistic understanding of how Arrow works — memory layouts, zero-copy, IPC, compute — rather than treating it as a black box.

## Success looks like
- Read any Arrow type (primitive, string, nested, dictionary) and mentally lay out its exact buffers: which exist, their dtypes, and byte sizes.
- Explain *why* Arrow is fast (SIMD-friendly contiguity, zero-copy sharing, O(1) random access) from the memory layout up, not from marketing copy.
- Use the C++ / pyarrow APIs fluently: build arrays and record batches, slice without copy, read/write IPC streams and files, reason about buffer lifetimes.
- Debug real problems: alignment, validity bitmaps, offset arithmetic, serialization overhead.

## Constraints
- Primary ecosystems: C++ (libarrow) and Python (pyarrow). Rust/Java appear only for contrast.
- Lessons should be short and mechanism-first: show the bytes, then the API.

## Out of scope (for now)
- Arrow-based query engines as users of Arrow (DuckDB/Polars/DataFusion internals) — except where they illuminate Arrow itself.
- GPU (CUDA) internals; Flight SQL deployment ops.
