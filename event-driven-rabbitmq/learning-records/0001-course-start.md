# 0001 — Course start: mission set, routing model installed

## Context
New course requested: event-driven async systems + RabbitMQ. Mission interviewed:
**build real production systems at work**. Starting point self-assessed: has used
RabbitMQ basically (publish/consume), shaky on exchanges, routing, acks, DLQs.
Same learner as game-theory course (CS background, likes precise models).

## Decisions
- Application-level model first (routing → acks/confirms → failure → topology design
  → patterns → broker comparison); broker internals/clustering deferred (see MISSION out-of-scope).
- Lesson 1 targets the single most load-bearing correction: producers address
  exchanges, not queues; bindings decide message fate; no match = silent drop.
- Default recommendation taught: one durable topic exchange per domain.
- Folk-model anchor used: SQS-style "send to queue" mental model as the thing to unlearn.

## Signals to watch
- Did the learner already know "no binding match = drop"? If yes, L1 was too easy —
  skip ahead in L2 (acks/prefetch) and raise difficulty.
- Work language for tutorials unknown — ask next session (affects code samples later).
