# 0002 — Acks & prefetch lesson delivered

## Context
Lesson 2 created unprompted after user said "continue to next course" — signals they
want momentum; keep choosing next lesson autonomously unless told otherwise.

## Decisions
- Framed everything around ONE idea: deleted-only-on-ack ⇒ at-least-once ⇒ idempotency.
  Anti-patterns taught: auto-ack, ack-on-receipt, unlimited prefetch (hoarding + herd).
- "You drive" task is an audit of the user's own work consumer — production-grounded
  per mission. Their audit findings are a natural hook for Lesson 3/4 discussion.
- Glossary extended: ack, nack/reject, unacked, at-least-once, auto-ack, prefetch,
  redelivered flag.

## Signals to watch
- Ask about their audit results next session — failures at (b) ack placement or
  (c) idempotency are the common case and steer how hard to push Lesson 3.
- Work language still unknown (asked in L1 and again via task; not yet answered).
