# Mission: RL for Kaggle — reinforcement learning techniques for simulation competitions

## Why
The user wants to compete (and medal) in Kaggle's simulation competitions (Lux AI, Halite, Connect X, Kore, Santa-style episodes…), where an agent plays a game against other submitted agents on a ladder. These competitions are won with a specific, pragmatic toolbox: MDP framing, self-play, reward shaping, DQN/PPO, AlphaZero-style MCTS + neural nets, imitation bootstrapping, and sound local evaluation against an opponent pool. The goal is practical engineering skill, not academic RL theory.

## Success looks like
- Frame any Kaggle simulation as an MDP: state, action space, reward, episode structure.
- Build a self-play training loop on `kaggle-environments`, with sane reward shaping and opponent pools.
- Know when RL is the wrong tool (tree search / handcrafted policy wins) and when it is essential.
- Implement/understand DQN (with target networks, double/dueling tricks) and PPO well enough to run CleanRL/Stable-Baselines3 code and debug it.
- Understand the AlphaZero recipe (policy/value heads + MCTS) that dominates most modern sim competitions.
- Evaluate agents locally against a league of past snapshots without overfitting the public ladder.
- Ship a submission file and survive the Kaggle validation/timeout constraints.

## Constraints
- Bilingual: every lesson ships in English and Chinese.
- Practical and citation-backed: each lesson cites canonical sources (Sutton & Barto, CleanRL, SB3, DeepMind papers, Kaggle winner write-ups).
- Short, mechanism-first lessons with a quiz and a hands-on task.

## Out of scope
- Full academic RL theory (continuous control, model-based RL beyond MCTS).
- Deep multi-agent MARL algorithms (MAPPO etc.) beyond awareness.
