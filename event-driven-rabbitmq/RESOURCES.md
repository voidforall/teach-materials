# Resources — Event-Driven & RabbitMQ

High-trust sources to ground teaching. Verified 2026-08-23.

## Tier 1 — official RabbitMQ (canonical, always check here first)
- **Tutorials (all five, multi-language):** https://rabbitmq.com/tutorials (now
  https://rabbitmq.com/getstarted.html) — Hello World → Work Queues → Publish/Subscribe
  → Routing → Topics. The canonical path through the routing model.
- **Consumer acknowledgements & publisher confirms:**
  https://rabbitmq.com/docs/confirms — THE doc on ack modes, prefetch, confirms.
- **Consumer prefetch:** https://rabbitmq.com/docs/consumer-prefetch
- **Dead lettering:** https://rabbitmq.com/docs/dlx
- **Exchanges & bindings (AMQP 0-9-1 model guide):** https://rabbitmq.com/tutorials/amqp-concepts
- **Production checklist:** https://rabbitmq.com/docs/production-checklist
- **RabbitMQ blog — At-least-once dead lettering:**
  https://www.rabbitmq.com/blog/2022/03/29/at-least-once-dead-lettering
- **Official broker comparisons (added for L7):**
  https://www.rabbitmq.com/docs/compare (hub) · https://www.rabbitmq.com/docs/compare/kafka

## Tier 2 — practitioner guides (good, second opinion)
- **CloudAMQP blog — DLX when & how:**
  https://www.cloudamqp.com/blog/when-and-how-to-use-the-rabbitmq-dead-letter-exchange.html
- **CloudAMQP blog series generally** — practical, correct, readable.
- **Enterprise Integration Patterns (Hohpe & Woolf):** https://www.enterpriseintegrationpatterns.com —
  the vocabulary of messaging patterns (canonical name for everything we'll build).

## Tier 3 — communities (wisdom)
- **RabbitMQ users Google Group / rabbitmq-users:** https://groups.google.com/g/rabbitmq-users —
  core team answers here.
- **r/rabbitmq:** https://www.reddit.com/r/rabbitmq
- **RabbitMQ GitHub discussions:** https://github.com/rabbitmq/rabbitmq-server/discussions

## To evaluate later
- "RabbitMQ in Depth" (Gavin Roy) — book, for deeper dives.
- Jack Vanlightly's RabbitMQ-vs-Kafka series (classic deep-dive; L7 secondary source):
  https://jack-vanlightly.com/blog/2017/12/4/rabbitmq-vs-kafka-part-1-messaging-topologies
- Kafka comparison: official Kafka docs intro + Jay Kreps' "The Log" post.
