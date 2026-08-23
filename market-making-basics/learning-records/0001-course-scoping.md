# 0001 — Course scoping: market making for a bot builder

## Context
User requested a full bilingual course on "basic market making knowledge and algorithms required for making a trading bot on my own", delivered in one non-stop session. Same delivery pattern as `accounting-basics`.

## Decisions
- 8 lessons, ordered by the build pipeline: what MM is → order book → spread economics → quoting algorithms (symmetric, inventory skew, Avellaneda–Stoikov) → adverse selection → risk → capstone architecture.
- Algorithm-forward, math-light: formulas presented with intuition, derivations omitted (mission constraint).
- All practice in simulation/paper trading; live capital explicitly deferred.

## Non-obvious lessons
- The user is a builder, not a finance student — lead every lesson with the design decision it changes in their bot.
