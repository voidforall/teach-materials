# Apache Arrow Resources

## Knowledge

- [Spec: Arrow Columnar Format](https://arrow.apache.org/docs/format/Columnar.html)
  The definitive, language-agnostic spec: buffers, validity/offset bitmaps, variable-length and nested layouts, dictionary encoding, IPC. Use for: every claim about memory layout. This is the course's ground truth.
- [Spec: Introduction to the Arrow format](https://arrow.apache.org/docs/format/Intro.html)
  Approachable conceptual walkthrough of how tabular/nested data maps onto the columnar layout. Use for: first pass on nested types before braving the full spec.
- [Arrow overview](https://arrow.apache.org/overview/)
  Why a standardized in-memory format matters: SIMD, zero-copy, O(1) random access. Use for: design rationale and the ecosystem map.
- [pyarrow API reference](https://arrow.apache.org/docs/python/index.html)
  The Python face of libarrow: arrays, tables, IPC, compute functions. Use for: every hands-on exercise.
- [Arrow C++ API reference](https://arrow.apache.org/docs/cpp/index.html)
  The underlying implementation the user builds against: ArrayData, Buffer, builders, compute kernels. Use for: C++-side lessons and reading libarrow source.
- [Deep Dive into the Arrow Columnar Format (video, pyarrow + nanoarrow)](https://www.youtube.com/watch?v=k0mkDXWfLb4)
  Spec walkthrough with live buffer inspection. nanoarrow's minimal C implementation of the spec is itself a great study object. Use for: seeing buffers dumped live.
- [nanoarrow project](https://github.com/apache/arrow-nanoarrow)
  Minimal, readable C implementation of the columnar format. Use for: reading what libarrow hides behind abstractions.

## Wisdom (Communities)

- [Arrow dev@ mailing list & Zulip](https://arrow.apache.org/communittee/) — see [community page](https://arrow.apache.org/community/)
  Where format and implementation decisions actually happen. Use for: "why is it designed this way" questions and spec ambiguities.
- [Stack Overflow `apache-arrow` tag](https://stackoverflow.com/questions/tagged/apache-arrow)
  Practical API questions across languages. Use for: debugging real buffer/IPC issues.

## Gaps

- A good systematic treatment of the Arrow C++ compute kernel architecture (visitor dispatch, kernels, executables) — may need to mine libarrow source directly when that lesson comes.
