# Notes — Event-Driven & RabbitMQ course

Working notes on how the learner wants to be taught. Update as preferences surface.

## Learner profile
- **CS background**, same learner as the game-theory course. Precise models land well;
  intuition first, then the mechanism.
- **Used RabbitMQ basically**: has published/consumed messages. Shaky on exchanges,
  bindings/routing, ack semantics, DLQs. Don't re-explain "what is a queue" — use
  basic familiarity as the anchor and correct the folk model.

## Mission
- **Build real production systems at work.** Ground every lesson in production
  scenarios: order processing, notifications, integrations, failure at 2am.
- Compare-with-alternatives (Kafka/SQS) is in scope as a secondary thread.

## Teaching preferences (carried over from game-theory course)
- Short, self-contained lessons finishable in one sitting.
- Tufte-ish beautiful docs, re-readable. Shared stylesheet `assets/lesson.css`.
- Each lesson: keystone callout, retrieval quiz, a "you drive" task with hidden
  reveal, one primary source, an "ask me" reminder.
- Glossary at `reference/glossary.html` is authoritative once created.

## Style / mechanics
- Reusable components in `assets/lesson.css`: `.flow` message-pathway SVG diagram,
  `.topo` topology diagram styles — REUSE; don't inline per-lesson duplicates.
- Quiz answers: same length, no formatting tells.

## Progress
- L1 ✅ AMQP routing model. L2 ✅ acks/prefetch/redelivery. L3 ✅ confirms/idempotency/dual-write.
  L4 ✅ DLX/retry ladder/poison. L5 ✅ topology design (durability trinity, ordering, versioning).
  L6 ✅ outbox/saga/eventual consistency. L7 ✅ broker shootout (RabbitMQ vs Kafka vs SQS).
  **Planned arc COMPLETE (L1–L7).**
- Next-session candidates (ask user, in rough priority):
  1. **Applied design review** of the user's actual work system using the full course
     vocabulary (L7 planted this hook; strongest mission fit — mission says "build real
     systems at work").
  2. Spaced-review session: retrieval quiz spanning L1–L7 (storage strength check).
  3. Deepen arcs if requested: event sourcing; RabbitMQ ops (quorum/clustering —
     currently MISSION out-of-scope); Kafka hands-on if their work leans that way.
- Work language STILL unknown — asked in L1 and via L2/L3 tasks; never answered. Ask
  directly before writing any code-heavy material.
  5. Topology design for real services: competing consumers, ordering, versioning
  6. Patterns beyond the broker: outbox, saga, eventual consistency
  7. Broker shootout: RabbitMQ vs Kafka vs SQS — when to pick which
