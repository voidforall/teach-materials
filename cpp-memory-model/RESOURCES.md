# Resources — C++ Memory Model

## Primary / canonical
- [cppreference: std::memory_order](https://en.cppreference.com/w/cpp/atomic/memory_order) — the definitive practical reference for memory orders, with formal happens-before definitions.
- [cppreference: The C++ memory model](https://en.cppreference.com/w/cpp/language/memory_model) — abstract machine, data races, evaluation order.
- [P0062R0: A primer on the C++ memory model](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2017/n0062.html) — standard-committee primer.
- [C++ standard [intro.memory], [intro.races]](https://eel.is/c++draft/intro.memory) — normative text (read selectively).

## OS level
- man pages: [mmap(2)](https://man7.org/linux/man-pages/man2/mmap.2.html), [brk(2)/sbrk(2)](https://man7.org/linux/man-pages/man2/brk.2.html), [madvise(2)](https://man7.org/linux/man-pages/man2/madvise.2.html), [getrusage(2)](https://man7.org/linux/man-pages/man2/getrusage.2.html)
- [What Every Programmer Should Know About Memory — Ulrich Drepper](https://people.freebsd.org/~lstewart/articles/cpumemory.pdf) — caches, NUMA, the classic.
- [Meltdown/Spectre-era notes on virtual memory](https://www.kernel.org/doc/html/latest/arch/x86/x86_64/mm.html) — x86-64 page-table layout.
- Brendan Gregg, [The Page Cache](https://www.brendangregg.com/linuxupb/pc.html) and perf/`minflt` material.

## Hardware / coherency
- [A Primer on Memory Consistency and Cache Coherence — Sorin, Hill, Wood](https://pages.cs.wisc.edu/~markhill/papers/primer2020_2nd_edition.pdf) — the textbook (chapters 1–5 suffice).
- [MESI (Wikipedia, with diagram)](https://en.wikipedia.org/wiki/MESI_protocol) — quick reference.
- [Memory Barriers: a Hardware View for Software Hackers — Paul McKenney](https://www.puppet.com/moby-program-various-lecture-notes/memory-barriers.html) (also on lwn.net) — why barriers exist per-ISA.

## Practice / blog-grade wisdom
- [Jeff Preshing's memory model series](https://preshing.com/20120913/acquire-and-release-semantics/) — acquire/release, fences, seq_cst, atomics under the hood; the single best tutorial-grade source.
- [Herb Sutter: atomic<> Weapons](https://herbsutter.com/2013/02/11/atomic-weapons-the-c-memory-model-and-modern-hardware/) — talk, 2 parts.
- [CppCon 2016: Timur Doumler, C++ atomics](https://www.youtube.com/watch?v=ZQFzMfHIx4g) — practical atomic usage.
- [glibc malloc internals](https://sourceware.org/glibc/wiki/MallocInternals) — arenas, tcache, bins.
- [tcmalloc design doc](https://github.com/google/tcmalloc/blob/master/docs/design.md), [jemalloc paper](https://people.freebsd.org/~jasone/jemalloc/bsdcan2006/jemalloc.pdf)
- [ThreadSanitizer Wiki — Algorithm](https://github.com/google/sanitizers/wiki/ThreadSanitizerAlgorithm)
- [False sharing — Martin Thompson](https://mechanical-sympathy.blogspot.com/2011/07/false-sharing-java-7.html) (Java-flavored but the cache-line logic is universal)
- [Fedor Pikus, C++ Concurrency in Action (Anthony Williams)](https://www.manning.com/books/c-plus-plus-concurrency-in-action-second-edition) — the standard book, chapters 3 and 5.

## Tools the course uses
- Compiler Explorer (godbolt.org) for checking barrier codegen on x86-64 vs ARM64.
- `perf stat -e page-faults,cache-misses`, `/proc/<pid>/smaps`, `pmap`, `numastat`.
- Clang `-fsanitize=thread`, `-fsanitize=address`.
