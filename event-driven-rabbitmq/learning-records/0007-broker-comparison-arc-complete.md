# 0007 — Broker comparison delivered; planned arc complete

## Context
L7 closes the planned L1–L7 arc (routing → semantics → failure → topology → patterns
→ comparison). All lessons produced across sessions on "continue" commands; user never
paused to report task results, so storage-strength is UNVERIFIED — spaced retrieval
across L1–L7 is the top next-session candidate.

## Decisions
- Taught comparison as ONE axis (work vs history — what happens after handling) with a
  3-step decision procedure, explicitly anti-feature-matrix. Hybrid (Kafka record +
  RabbitMQ work) presented as the mature-at-scale answer, with misfit anti-patterns
  (Kafka-as-task-queue: no per-message ack; RabbitMQ-as-event-store: acked = gone).
- Mapped every course concept to equivalents (offsets↔acks, consumer groups↔competing
  consumers, visibility timeout↔at-least-once, redrive policy↔parking lot) so L7 doubles
  as an interleaved review of the whole course.
- Primary source: rabbitmq.com/docs/compare/kafka (official, verified via search);
  Vanlightly series as classic deep-dive; added to RESOURCES.md.
- Glossary extended with the comparison vocabulary.

## State of the course
- Arc complete. Next candidates noted in NOTES.md: (1) applied design review of user's
  real work system — best mission fit, (2) spaced-review quiz session, (3) deepen arcs
  (event sourcing / RabbitMQ ops — ops currently out of MISSION scope; revisit mission
  with user before going there).
- Open unknowns: user's work language; how the capstones (L5, L6, L7 tasks) actually went.
