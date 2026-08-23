# Course outline — 10 lessons

1. **Virtual Memory: The Process Address Space** — pages, multi-level page tables, TLB, page faults, ASLR; anatomy of `/proc/pid/maps`; stack vs heap vs mmap regions.
2. **Stack vs Heap: Allocation Mechanics** — stack frames and the SP, red zone; `brk` vs `mmap`; glibc malloc (tcache, bins, arenas); why allocation cost is not `new`.
3. **The C++ Object Model** — storage duration vs lifetime vs scope; object lifetime rules, placement new, `std::launder`; alignment (`alignas`, `alignof`), padding, over-aligned types.
4. **The Abstract Machine: Happens-Before** — sequenced-before, synchronizes-with, happens-before; the data-race UB rule; why compilers may do terrifying things to racy code.
5. **`std::atomic` and the Memory Orders** — the six orders; RMW; what each compiles to on x86-64 vs ARM64 (Compiler Explorer); `is_lock_free`.
6. **Acquire/Release vs seq_cst vs Relaxed in Practice** — message-passing pattern; the IRIW example that needs seq_cst; refcounting with relaxed; flag+payload publishing.
7. **Fences, Data Races, and UB** — `atomic_thread_fence`; acquire fence semantics (Preshing's "fence 101"); mixed-size/tearing; `volatile` is not atomic; TSAN as ground truth.
8. **Caches, MESI, and False Sharing** — cache hierarchy latencies; MESI states and round-trips; cache lines; false sharing demo + `alignas(64)` fix; prefetching.
9. **Allocators, Page Faults, THP, NUMA** — first-touch; minor vs major faults; transparent huge pages and THP faults; tcmalloc/jemalloc vs glibc; NUMA locality and `numactl`.
10. **Capstone: A Lock-Free SPSC Ring Buffer** — design from the memory model up; which orders each load/store needs; false-sharing layout; verifying with TSAN and benchmarks.

Each lesson: `lessons/000N-slug.html` (English) + `lessons/000N-slug.zh.html` (中文), shared `assets/lesson.css`, cheat sheet in `reference/`.
