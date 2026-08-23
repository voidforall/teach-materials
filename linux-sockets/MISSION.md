# Mission: Linux Socket Programming — theory & practice

## Why
The user wants to write network programs on Linux and understand what actually
happens — not just memorize a syscall sequence. Both halves matter: the theory
(the kernel's TCP/IP stack, file descriptors, the byte-stream abstraction,
backlogs, buffers) and the practice (writing, compiling, running and debugging
real client/server code in C on Linux).

## Success looks like
- Write a TCP client and a concurrent TCP server from memory, and explain every
  syscall: `socket`, `bind`, `listen`, `accept`, `connect`, `close`.
- Explain what the kernel does on each side of those calls: queues, ports,
  the three-way handshake, half-close, TIME_WAIT.
- Read and write POSIX/C socket code fluently: address structs, byte order,
  `getaddrinfo`, error handling, `SO_REUSEADDR`.
- Debug real servers: with `ss`/`netstat`, `strace`, `tcpdump`, and by reading
  `errno`s — not by guessing.
- Understand the alternatives and when they matter: UDP, `select`/`poll`/
  `epoll`, non-blocking I/O, unix-domain sockets.

## Constraints
- Platform: Linux, C (POSIX sockets). Other languages only for contrast.
- Lessons are mechanism-first: show what the kernel does, then the code that
  observes it. Every lesson should have runnable code the user executes.
- Bilingual: every lesson and reference doc exists in English and Chinese.

## Out of scope (for now)
- Kernel network-stack source internals (driver/IRQ level).
- TLS, HTTP protocol design, and higher-level RPC frameworks.

> Note: mission inferred from the initial request ("socket programming in
> linux, both theory and practice"); confirm/refine with the user as the
> course develops.
