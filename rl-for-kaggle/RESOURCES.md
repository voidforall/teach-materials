# RL for Kaggle Resources

## Knowledge

- [Sutton & Barto, *Reinforcement Learning: An Introduction* (2nd ed., free HTML)](http://incompleteideas.net/book/the-book-2nd.html) — the canonical textbook. Use for: MDP framing, value/policy methods, eligibility traces. Lessons 1–6 primary grounding.
- [Spinning Up in Deep RL (OpenAI)](https://spinningup.openai.com/) — the clearest short introduction to deep RL algorithms and their pseudocode. Use for: Lessons 5–6.
- [CleanRL (single-file implementations)](https://docs.cleanrl.dev/) — readable single-file DQN/PPO implementations, ideal to read and modify for competitions. Use for: Lessons 5–6, capstone.
- [Stable-Baselines3](https://stable-baselines3.readthedocs.io/) — the standard off-the-shelf PPO/DQN library; wrapping custom Kaggle envs as Gymnasium envs. Use for: Lessons 6, 10.
- [kaggle-environments (GitHub)](https://github.com/Kaggle/kaggle-environments) — the official harness: local episode runner, agent API, validation. Use for: Lessons 3, 10.
- [Gymnasium API docs](https://gymnasium.farama.org/) — `reset`/`step` contract used to wrap any sim. Use for: Lesson 3.
- [Mnih et al., *Human-level control through deep RL* (DQN, 2015)](https://www.nature.com/articles/nature14236) — original DQN paper. Use for: Lesson 5.
- [van Hasselt et al., *Deep Double Q-learning* (2015)](https://arxiv.org/abs/1509.06461) and [Wang et al., *Dueling Networks* (2015)](https://arxiv.org/abs/1511.06581) — the two standard DQN upgrades. Use for: Lesson 5.
- [Schulman et al., *PPO* (2017)](https://arxiv.org/abs/1707.06347) — the workhorse policy-gradient algorithm. Use for: Lesson 6.
- [Silver et al., *AlphaGo Zero* (2017)](https://www.nature.com/articles/nature24270) and [AlphaZero (2018)](https://arxiv.org/abs/1712.01815) — MCTS + policy/value network recipe. Use for: Lesson 7.
- [Junxiao Song, *Generalized AlphaZero* blog & `AlphaZero_General` repo](https://web.stanford.edu/~surag/posts/alphazero.html) — the minimal reimplementation most Kaggle solutions descend from. Use for: Lesson 7, capstone.
- [Kaggle Santa 2020 top solution write-ups](https://www.kaggle.com/competitions/santa-2020/discussion?sort=votes) — worked examples of wall-clock-efficient search beating brute force. Use for: Lesson 1 wisdom.
- [Lux AI Prize Seasons 1–2 winner write-ups](https://www.kaggle.com/competitions/lux-ai-2021/discussion?sort=votes) — imitation from scratch agents + PPO/self-play at scale, the strongest public example of the full pipeline. Use for: Lessons 8–9.

## Wisdom (Communities)

- [Kaggle Competition Code discussion forums](https://www.kaggle.com/competitions/) — every sim comp's Discussion tab is where winning write-ups land; the single highest-value wisdom source.
- [r/reinforcementlearning](https://www.reddit.com/r/reinforcementlearning/) — practitioner debugging help.
- [CleanRL Discord](https://discord.gg/uPHd8t7F) — implementation help for the single-file algorithms.

## Gaps

- MARL (MAPPO, self-play league training at AlphaStar scale) — named only.
- Model-based RL beyond MCTS — out of scope.
