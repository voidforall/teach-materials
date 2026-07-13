# Notes — Game Theory course

Working notes on how the learner wants to be taught. Update as preferences surface.

## Learner profile
- **CS background.** Comfortable with formal models, algorithms, notation. Lean on the
  computation/fixed-point/mechanism angle where it helps — it lands.
- **Some exposure**: knows Prisoner's Dilemma and the *term* Nash equilibrium; shaky on
  actually *solving* games and on the formalism. Don't re-explain famous games from scratch —
  use them as familiar anchors.
- **Balanced math**: intuition first, then core notation worked by hand. Not proof-heavy,
  not hand-wavy. Existence proofs / topology are out of scope for now.

## Teaching preferences
- **Ground in strategy + markets**, not abstract puzzles. Pricing, entry, auctions,
  competition, adversarial multi-agent. Ties to the user's orderbook / trading-agent work.
- Short, self-contained lessons finishable in one sitting.
- Beautiful, re-readable docs (Tufte-ish) — the user returns to them.

## Style / mechanics
- Shared stylesheet: `assets/lesson.css`. Reusable `.payoff` matrix component + `.br`
  best-response underline marks — REUSE these in every lesson; don't reinvent matrices.
- Glossary at `reference/glossary.html` is authoritative — adhere to its definitions.
- Each lesson: keystone callout, retrieval quiz, a "you drive" task with hidden reveal,
  one primary source, and an "ask me" reminder.

## Progress
- L1 ✅ pure NE / underline method. L2 ✅ mixed strategies / indifference principle.
  L3 ✅ sequential games, backward induction, SPE, credible threats, commitment (hold-up).
- L4 ✅ Cournot/Bertrand, reaction functions, NE as curve intersection, Bertrand paradox.
  L5 ✅ auctions (1st/2nd-price, Vickrey truthful-dominance proof, revenue equivalence,
  winner's curse) + mechanism design intro (VCG). **Fundamentals + markets arc complete.**
- Learner is moving fast and confirms understanding between lessons (good sign; keep the
  spaced-recall quiz item in each lesson as the real check).
- Reusable components now in `assets/lesson.css`: `.payoff` matrix, `.br` best-response mark,
  `.gametree` SVG tree (+ chosen/pruned edge styles). REUSE, don't reinvent.

## Open threads for next sessions (arc 2 — deepening + application)
- **Repeated games / folk theorem** — how repetition sustains cooperation without contracts
  (makes the L3 supplier promise + L4 Bertrand collusion credible). Strong next candidate;
  flagged by the L3/L4 "ask me" hooks. Grim trigger, tit-for-tat, discounting.
- **Information: signaling & adverse selection** — Spence job-market signaling, lemons market;
  very markets-relevant (order flow toxicity, informed traders).
- **Applied bridge to the user's own work**: order book as a (double) auction, adversarial
  multi-agent / algorithmic-GT (price of anarchy) — the mission's trading endpoint. L5 "ask me"
  hook offers the order-book-as-double-auction thread.
- Deepen-in-place options if asked: asymmetric-cost Cournot, Stackelberg first-mover,
  first-price equilibrium bid derivation, VCG payment computation.
- Caveman session-mode was active at course creation; lessons themselves written normally
  (documents = normal prose per the coding-style rule). Chat can stay terse.
