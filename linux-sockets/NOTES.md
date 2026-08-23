# Notes

- Course requested 2026-08-23: "socket programming in linux, both theorem
  [sic — theory] and practice, write both English and Chinese."
- Mission is a first draft inferred from that request; confirm the "why" with
  the user in an early session and update MISSION.md + learning record.
- Structure follows the apache-arrow / rabbitmq house style: shared
  `assets/lesson.css`, `NNNN-name.html` + `NNNN-name.zh.html` pairs with the
  masthead 中/EN toggle, `.keystone` for the core aha, details-based `.quiz`
  retrieval, `.task` for hands-on code, `.source` for the primary source,
  `.nav` footer with links to same-language neighbors.
- Sockets accent color: rust #7a3b12 (arrow=teal, rabbitmq=amber).
- Hands-on code is C on Linux, compiled with `cc -Wall`. The user is on macOS
  (darwin) for lessons — Lesson 1 code is portable POSIX and runs on macOS
  too; kernel-behavior tasks should note where a Linux box/container is needed.
