# 0003 — Publisher confirms & idempotency lesson delivered

## Context
User said "continue to next course" again — momentum confirmed; keep auto-advancing the arc.

## Decisions
- Unified L2+L3 into one mental model: consumer acks + publisher confirms = system-wide
  at-least-once; duplicates on both ends are the *price*, idempotency the *payment*.
- Idempotency taught as three ranked strategies (natural > dedup key > state guard).
- Dual-write anti-pattern introduced HERE (motivates confirms) with outbox deferred to
  L6 — deliberate forward reference, flagged in lesson text.
- "You drive": invoice.paid handler (mark-paid + points delta + email side effect) —
  forces combining all three strategies plus correct step ordering.

## Signals to watch
- L3's task is the hardest so far (multi-strategy + ordering). If user reports it was
  easy, bump difficulty: make L4's task a full retry-topology design, not a quiz.
- If user asks the planted questions ("dedup table = distributed tx?", "email double-send
  window?") — those answers are good L4 or L6 material.
