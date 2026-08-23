# Mission: The C++ Memory Model — from silicon to std::atomic

## Why
The user is an experienced mid-level C++ engineer who wants a complete, vertically-integrated mental model of memory in modern C++: not just the language rules (C++11 abstract machine, happens-before, memory orders), but what the OS (virtual memory, pages, page faults, mmap) and the hardware (caches, MESI, memory barriers) are actually doing underneath — so that performance work, lock-free code, and concurrency debugging stop being folklore and become engineering.

## Success looks like
- Draw a Linux process address space from memory and explain virtual → physical translation (page tables, TLB, page faults).
- Explain stack frames vs heap allocation mechanics (brk/mmap, allocator arenas) and their costs.
- Reason about storage duration, lifetime, alignment, and padding precisely (C++ object model).
- Define happens-before, sequenced-before, synchronizes-with; identify data races and their UB consequences.
- Choose memory_order correctly for atomics and fences; know what seq_cst, acquire/release, and relaxed compile to on x86 and ARM.
- Explain cache coherency (MESI), false sharing, and fix it with alignment.
- Reason about allocator behavior (glibc malloc, tcmalloc/jemalloc), THP, and NUMA effects.
- Read and write a small lock-free structure (SPSC ring buffer) and validate it with ThreadSanitizer.

## Constraints
- Bilingual: every lesson ships in English and Chinese (`0001-x.html` + `0001-x.zh.html`).
- Audience: experienced mid-level C++ engineer — skip beginner material (what a pointer is, RAII basics), keep the deep dives.
- Citation-backed: cppreference, the C++ standard intro paragraphs, P0062R0, Jeff Preshing's blog, Paul McKenney's LKMM talks, Ulrich Drepper's "What Every Programmer Should Know About Memory", OSDev/man7.
- Short, concept-first lessons with a retrieval quiz and a hands-on exercise (compilable, observable).

## Out of scope
- Garbage collection / managed runtimes beyond contrast notes.
- C++26 executor/memory-model proposals beyond a pointer.
- Detailed Windows-specific internals (Linux/macOS focus, ARM64 + x86-64 ISAs).
