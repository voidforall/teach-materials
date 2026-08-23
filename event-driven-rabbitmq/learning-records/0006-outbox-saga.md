# 0006 — Outbox / saga / eventual consistency lesson delivered

## Context
L6 delivered on the L3 plant (dual-write → outbox). Course L1–L6 done; only L7
(broker comparison) remains in the planned arc.

## Decisions
- Unified framing: no distributed transactions anywhere (DB+broker, cross-service);
  three responses — outbox (local atomicity + retry), saga (local atomicity +
  compensation), UX pending states (absorb the lag).
- Choreography-vs-orchestration taught as a topology decision with a rule of thumb
  (≤3 steps choreography; ≥4/branching/money → orchestration).
- Added "terminal-for-humans" idea: not every step is compensable (re-charging
  customers is never automated) — ties back to L4 parking lot.
- Event sourcing deliberately deferred (mentioned as adjacent, not covered) — mission
  is build real systems with RabbitMQ; ES is a candidate for a future mini-arc.
- "You drive": refund saga w/ eventually-consistent PSP — forces orchestrator-on-
  completion-events (not acks), compensation asymmetry, outbox recursion.
- CSS: added reusable .fl-edge.comp / .fl-lbl.bad (compensation path styles).

## Signals to watch
- If L6's task landed well, L7 (comparison) can be taught as a decision exercise
  ("argue the choice for three scenarios") rather than a feature-matrix lecture.
- Candidate next arcs after L7: event sourcing, RabbitMQ ops/clustering (currently
  out of scope in MISSION), or applied: design the user's actual work system.
