# ClickHouse Resources

## Knowledge

- [ClickHouse docs — Table engines](https://clickhouse.com/docs/en/engines/table-engines)
  Ground truth for MergeTree and its whole family: syntax, semantics, defaults. Use for: every engine claim in this course.
- [ClickHouse docs — MergeTree](https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree)
  The engine 95% of tables use: ORDER BY, PARTITION BY, granule size, sparse primary index, settings. The single most important page for schema design.
- [ClickHouse docs — Primary key / sparse index & granules](https://clickhouse.com/docs/en/guides/best-practice/sparse-primary-index)
  Dedicated guide to how the sparse index works, with worked examples of granule selection. Use for: lessons 2–3.
- [ClickHouse docs — Compression codecs](https://clickhouse.com/docs/en/sql-reference/statements/create/table#column_compression_codec) and [LowCardinality](https://clickhouse.com/docs/en/sql-reference/data-types/lowcardinality)
  Codec menu (ZSTD, Delta, DoubleDelta, Gorilla, T64) and the LowCardinality dictionary type. Use for: lesson 4.
- [ClickHouse docs — Mutations](https://clickhouse.com/docs/en/guides/developer/mutations) and [Lightweight DELETE](https://clickhouse.com/docs/en/sql-reference/statements/delete)
  How ALTER TABLE ... UPDATE/DELETE actually work (background rewrites) and the newer lightweight delete path. Use for: lesson 6.
- [ClickHouse docs — Materialized views](https://clickhouse.com/docs/en/guides/developer/cascading-materialized-views)
  Trigger-on-insert semantics, -State/-Merge aggregate function combinators, chained views. Use for: lesson 7.
- [ClickHouse docs — JOIN behavior](https://clickhouse.com/docs/en/sql-reference/statements/select/join) and [dictionaries](https://clickhouse.com/docs/en/sql-reference/dictionaries)
  Hash-join defaults, right-table loading, memory math, any_join, set joins; dictionaries for point lookups. Use for: lesson 8.
- [ClickHouse blog — ClickHouse and 1 billion rows challenge / history posts](https://clickhouse.com/blog)
  Engineering rationale straight from the team. Use for: "why is it designed this way".
- [Altinity blog & webinars](https://altinity.com/blog/)
  The best operator-side wisdom on ClickHouse in production: schema pitfalls, mutations, memory. Use for: use-case judgment calls.

## Wisdom (Communities)

- [ClickHouse GitHub discussions & issues](https://github.com/ClickHouse/ClickHouse/discussions)
  Core team answers real design/ops questions here.
- [ClickHouse subreddit](https://www.reddit.com/r/ClickHouse/)
  Active practitioner community; schema reviews and war stories.
- [ClickHouse Slack](https://clickhouse.com/slack)
  Fastest path to answers from users and developers.

## Gaps

- A canonical, dated comparison of lightweight DELETE vs TRUNCATE/partition-drop performance across versions — may need to benchmark claims when it matters.
