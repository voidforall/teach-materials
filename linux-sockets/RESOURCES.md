# Linux Sockets Resources

## Knowledge

- [Beej's Guide to Network Programming](https://beej.us/guide/bgnet/)
  The classic hands-on intro to POSIX sockets: `getaddrinfo`, the client/server
  sequence, datagrams. Use for: the course's practical backbone. (Also the
  usual primary-source recommendation per lesson.)
- [man 7 socket](https://man7.org/linux/man-pages/man7/socket.1.html) and the
  whole `man7.org` socket family (`man 2 bind`, `listen`, `accept`, `connect`,
  `man 7 tcp`, `man 7 udp`, `man 7 ip`, `man 7 unix`)
  The normative ground truth on Linux. Use for: every claim about syscall
  semantics, options, and errors.
- [Beej's Guide to Network Concepts](https://beej.us/guide/bgnet0/)
  The companion theory guide: packets, layers, IP, TCP vs UDP, routing, NAT.
  Use for: the "why" behind the APIs, gently.
- [The Linux Programming Interface, ch. 56–61 — Michael Kerrisk](https://man7.org/tlpi/)
  The most rigorous sockets treatment in book form: fd semantics, TCP state
  machine, `SO_*` options, concurrent server designs. Use for: depth beyond
  Beej.
- [UNIX Network Programming, Vol. 1 — Stevens, Fenner, Rudoff](https://www.unpbook.com/)
  The encyclopedic reference; superb on the TCP state transitions and every
  socket option. Use for: "what exactly happens at close/RESET" questions.
- [C10K problem page — Dan Kegel](https://kegel.com/c10k.html)
  The historical forcing ground for `select`/`poll`/`epoll` and event-driven
  servers. Use for: motivation when the course reaches multiplexing.
- [The SO_ORIGINAL_DST eBPF-free classics / `ss`, `strace`, `tcpdump` docs](https://www.tcpdump.org/manpages/tcpdump.1.html)
  Use for: the debugging lessons — seeing the kernel's behavior from outside.

## Wisdom (Communities)

- [Stack Overflow `sockets` + `linux` tags](https://stackoverflow.com/questions/tagged/sockets+linux)
  Practical debugging questions; good for testing one's own answers.
- [unix.stackexchange.com](https://unix.stackexchange.com/questions/tagged/sockets)
  Kernel-side behavior questions (`net.core`, sysctls, socket stats).
- [LWN.net](https://lwn.net/)
  Where networking kernel changes are actually discussed and explained.

## Gaps

- A single great illustrated walkthrough of `epoll` internals on modern
  kernels — likely mine kernel docs + LWN articles when that lesson arrives.
