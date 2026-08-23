# 0005 — Topology design lesson delivered

## Context
L5 completed the mechanics→design pivot. Course now L1–L5 done; remaining: L6 patterns
(outbox/saga/eventual consistency), L7 broker comparison.

## Decisions
- Framed topology-as-API (public contract) — matches mission: building real services.
- Keystone = ordering: FIFO is per-queue-per-channel only; competing consumers break
  completion order even without broker reordering; fix = entity-scoped ordering
  (consistent-hash sharding) + order-independent consumers (version guards).
- Durability trinity taught as checklist-in-topology-code; anti-pattern = confirms
  lying via non-durable defaults.
- House style given as a default to deviate from with reason (1 topic exchange/domain,
  quorum queue per consumer group named service.purpose, versioned event keys,
  central declares, retry ladder per domain).
- Capstone "you drive": food-delivery platform with 4 requirements each mapping to a
  prior lesson — intentional integration check.

## Signals to watch
- Ask how the capstone went next session — it's the course's synthesis test. If solid,
  L6 can go deeper into saga vs choreography trade-offs than planned.
- Planted discussion threads: quorum-vs-classic, central-vs-service topology declares
  (contested — good wisdom/communities hook), consistent-hash = reinventing Kafka
  (bridges to L7).
