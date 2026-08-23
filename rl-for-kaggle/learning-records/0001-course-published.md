# 0001 — Course published: RL for Kaggle

## Context
User requested a full bilingual (EN/ZH) course on reinforcement learning techniques commonly used for Kaggle competitions, delivered in one uninterrupted session (2026-08-23).

## What was built
- 10 lessons × 2 languages: sim-competition landscape → MDP framing → self-play infrastructure → reward shaping → DQN → PPO → AlphaZero recipe → imitation bootstrap → evaluation/leagues → capstone pipeline.
- Reference cheat sheet (EN + ZH); shared stylesheet reused from harness-engineering/valuation-basics.
- Citations: Sutton & Barto, Spinning Up, CleanRL, Stable-Baselines3, kaggle-environments, DeepMind papers (DQN, Double/Dueling, PPO, AlphaZero), Lux AI winner write-ups.

## Non-obvious decisions
- Course spine ordered the way you'd actually attack a sim competition, not by academic taxonomy.
- Lesson 1 deliberately teaches "when NOT to use RL" (Santa 2020 precedent) to counter tool-first thinking.
- Capstone is a concrete Connect X pipeline (gym wrap → DQN/AlphaZero-lite → opponent-pool eval → submission.py packaging) rather than open-ended theory.

## Suggested next steps when user returns
- Walk through the capstone together on a live Connect X submission.
- Possible extension course: multi-agent MARL (MAPPO), or a project course around an active Lux season.
