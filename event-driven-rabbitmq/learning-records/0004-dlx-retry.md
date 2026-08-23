# 0004 — DLX / retry ladder / poison lesson delivered

## Context
Arc continues on "continue" commands. L4 closes the failure-handling gap left by L2's
nack warning. Delivery-semantics + failure-handling half of the arc is now complete
(L1–L4); L5–L7 are design/patterns/comparison.

## Decisions
- Taught DLX as *routing infrastructure reused as a timer* (TTL queue + DLX → back to
  work) rather than just an error bucket — the keystone generalizes.
- Both traps included: handler sleeps (wastes prefetch slots, ties to L2) and
  per-message TTL head-of-line blocking (why the ladder is a ladder of queues).
- Cycle protection mentioned briefly (drop-on-unchanged-cycle) without deep x-death
  semantics — full rules left to primary source.
- "You drive" introduced the *failure classification* insight: consumer is the only
  place that knows retryable-vs-poison; retry policy is per-failure-class. This is the
  deepest design insight so far — check it landed.

## Signals to watch
- L5 (topology design) will integrate everything: ask user to design a full service
  topology next session. If they nail L4's task, make L5 a single large design exercise
  with review, not a content lesson.
- Delayed-message plugin question planted — good tangent if user asks.
