# 0001 — Course published: C++ Memory Model

**Date:** 2026-08-23

## Context
User requested a full course on the C++ memory model including OS-level details, pitched at an experienced mid-level C++ engineer, bilingual (EN/ZH), authored in a single non-stop session.

## Course shape (as published)
10 lessons, bottom-up from the OS to lock-free code:
1. Virtual memory / process address space
2. Stack vs heap allocation mechanics
3. C++ object model (storage duration, lifetime, alignment)
4. Happens-before & the data-race UB rule
5. std::atomic & the six memory orders (+ ISA codegen)
6. Acquire/release vs seq_cst vs relaxed in practice
7. Fences, data races, volatile≠atomic, TSAN
8. Caches, MESI, false sharing
9. Allocators, page faults, THP, NUMA
10. Capstone: lock-free SPSC ring buffer

Plus a bilingual printable cheat sheet in `reference/`.

## Notes for future sessions
- ZPD: user knows C++ well; next sessions should be practice-heavy (TSAN labs, benchmarking on their Apple Silicon machine, lock-free bug hunt) rather than more theory.
- Their machine is darwin arm64 — Linux-specific exercises (THP, numactl, perf c2c) were noted as such in lessons; a follow-up on a Linux box would unlock those.
- Candidate future lessons: memory model of C++20 atomic_ref/wait-notify in depth, LKMM vs C++ MM, seqlocks/RCU.
