# Mission: Event-Driven Async Systems & RabbitMQ

## Why
I want to **build real production systems at work** on an event-driven architecture,
with RabbitMQ as the broker. Not tutorials-as-tourism — I want the operating model that
lets me design a topology, reason about delivery guarantees, and debug it at 2am.

## Success looks like
- I can **design the message flow** for a feature: choose exchange types, queue
  topologies, and routing keys deliberately — and justify each choice.
- I fluently reason about **delivery semantics**: acks, publisher confirms, prefetch,
  redelivery, and what "at-least-once" forces me to do (idempotency).
- I can handle **failure properly**: dead-letter exchanges, retry with backoff,
  poison messages, and monitoring queue depth / consumer lag.
- I know the **async-systems vocabulary** beyond one broker: competing consumers,
  pub/sub, work queues, eventual consistency, outbox pattern, saga vs distributed tx.
- I can compare RabbitMQ with the alternatives (Kafka, SQS, Redis Streams) well enough
  to pick the right tool and say why.

## Starting point
- **Used RabbitMQ basically**: published and consumed messages, but shaky on exchanges,
  routing, bindings, ack semantics, dead-lettering.
- CS background — precise models welcome; ground them in production scenarios.

## Constraints
- Short, self-contained lessons finishable in one sitting.
- Ground everything in **building real services**, not toy examples.
- Beautiful, re-readable reference docs (cheat sheets, glossary) I'll return to.

## Out of scope (for now)
- Broker internals / clustering & ops deep-dives (quorum queues internals, federation,
  shovel) — until the application-level model is solid.
- Kafka-specific internals — only as comparison.
