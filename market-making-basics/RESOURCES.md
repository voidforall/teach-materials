# Market Making Resources

## Knowledge

- [Avellaneda & Stoikov, "High-frequency trading in a limit order book" (2008)](https://www.math.nyu.edu/faculty/avellane/HighFrequencyTrading.pdf)
  The canonical optimal-quoting paper; source of the reservation-price and volatility-scaled spread formulas. Use for: Lesson 4 primary source.
- [Cartea, Jaimungal & Penalva, *Algorithmic and High-Frequency Trading* (Cambridge, 2015)](https://www.cambridge.org/core/books/algorithmic-and-highfrequency-trading/9856C70C748AB85278D22C67F1F49180)
  The standard textbook: market making, inventory, and execution as stochastic control, with readable intuition. Use for: Lessons 3–5, 7 grounding.
- [Larry Harris, *Trading and Exchanges: Market Microstructure for Practitioners* (OUP, 2003)](https://www.amazon.com/Trading-Exchanges-Microstructure-Practitioners/dp/0195144708)
  The practitioner's bible: who trades, why, and how limit orders really get filled. Use for: Lessons 1, 2, 6 primary grounding.
- [Joel Hasbrouck, *Empirical Market Microstructure* (OUP, 2007)](https://www.amazon.com/Empirical-Market-Microstructure-Institutions-Empirical/dp/0195301641) — adverse selection, price impact, VAR models. Use for: Lesson 6 depth.
- [Nasdaq — Order types & market mechanics docs](https://www.nasdaqtrader.com/content/ProductsServices/Trading/Order_Entry_Guide.pdf) — primary documentation of how a real order book matches. Use for: Lesson 2.
- [Wikipedia — Avellaneda–Stoikov model](https://en.wikipedia.org/wiki/Avellaneda%E2%80%93Stoikov_model) — quick worked summary with the key equations. Use for: quick reference.
- [Hummingbot docs — market making strategies](https://hummingbot.org/strategies/) — open-source bot implementing pure MM / cross-exchange MM with configurable bid/ask spreads. Use for: Lesson 8 concrete example.
- [SEC/CFTC flash-crash report (2010)](https://www.sec.gov/news/studies/2010/marketevents-report.pdf) — anatomy of liquidity evaporation; motivates risk lessons. Use for: Lesson 7.

## Wisdom (Communities)

- [r/algotrading](https://www.reddit.com/r/algotrading/) — the largest practitioner-adjacent community; post-backtest critique threads.
- [QuantLib / hummingbot Discord](https://discord.gg/hummingbot) — open-source MM bot community.
- [Wilmott forums / QuantNet](https://forum.wilmott.com/) — quant practitioners on market-making models.
- [NYSE / CBOE education portals](https://education.cboe.com/) — exchange-run courses on market structure.

## Gaps

- Exchange-specific maker/taker fee schedules and rebate economics — defer until the user picks a venue (crypto vs equities vs futures).
