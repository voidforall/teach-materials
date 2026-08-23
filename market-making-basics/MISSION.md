# Mission: Market Making Basics — build your own market-making trading bot

## Why
The user wants to build a trading bot on their own, and market making is the strategy family they've chosen to learn. The goal is practical: understand enough market microstructure and quoting algorithms to design, simulate, and safely deploy a simple market-making bot — not to become a quant researcher.

## Success looks like
- Explain what a market maker does: post bids and offers, earn the spread, manage inventory, and avoid being run over by informed flow.
- Read a limit order book: price–time priority, depth, mid, microprice, queue position.
- Write down the P&L model of a market maker: spread capture minus adverse selection minus inventory risk.
- Implement the core quoting algorithms: symmetric quoting around a reference price, inventory skew, and Avellaneda–Stoikov reservation prices.
- Recognize adverse selection and order-flow toxicity, and react (widen, fade, or pull quotes).
- Size risk properly: position limits, hedging, kill-switch conditions.
- Sketch a sound bot architecture: event loop, exchange connectivity, backtesting/paper trading before any live capital.

## Constraints
- Builder-first: every concept must earn its place by changing a design decision in the bot. Stochastic-calculus derivations stay out; the resulting formulas are presented with intuition.
- Bilingual: every lesson ships in English and Chinese.
- Lessons short and mechanism-first: show the model/equation, then the intuition, then the practice.

## Out of scope
- Full-time HFT infrastructure (FPGAs, colocation, microwave links).
- Options market making and non-linear instruments.
- Regulatory/licensing detail for becoming a designated market maker (a passing mention only).

## Safety stance
All practice happens in simulation or paper trading. Live trading with real capital is a user decision made only after the capstone, with small size and hard limits.
