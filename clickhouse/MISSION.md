# Mission: ClickHouse — knowledge & use cases

## Why
The user already understands OLAP database basics (columnar storage, star schemas, MPP). They want practical, opinionated mastery of ClickHouse specifically: how it achieves its speed, how to design schemas for it, and — critically — which real-world use cases it wins and loses, so they can decide when to reach for it.

## Success looks like
- Explain ClickHouse's speed from mechanisms up: vectorized execution, MergeTree parts/granules, sparse primary index, compression codecs.
- Design a MergeTree table for a given query workload: ORDER BY, partitioning, codecs, LowCardinality, skip indexes.
- Choose the right engine from the MergeTree family (Replacing / Summing / Aggregating / Collapsing) and know when plain MergeTree + materialized views beats a special engine.
- Reason about ClickHouse's constraints like an operator: mutations, deletes, joins, memory limits — and the workarounds.
- Name canonical use cases (event analytics, logs/observability, funnels, tick data, feature stores) and anti-use-cases (OLTP, mutable data, heavy joins), with reasons.

## Constraints
- Reader already has OLAP basics — no time on "what is a columnar DB"; start at differentiators.
- Bilingual: every lesson exists in English and Chinese (中文版).
- Mechanism-first, then SQL, then decision rules.

## Out of scope (for now)
- Cluster operations at depth (replication topology, ZooKeeper/Keeper internals, sharding ops) — covered only as it affects design choices.
- ClickHouse Cloud vs self-hosted procurement decisions.
