# Mission: Harness Engineering — building the scaffolding around LLMs

## Why
The user lives in agent harnesses daily (ZCode, Claude Code, custom skills) and wants to move from power user to engineer: designing and improving the system around the model — context, tools, loops, guardrails, evals — rather than treating the harness as a given.

## Success looks like
- Decompose any agent product (Cursor, Claude Code, ZCode, a support bot) into its harness parts: system prompt, context assembly, tool surface, agent loop, guardrails, evals.
- Design tools and prompts that measurably steer a model: tight schemas, error messages that act as feedback, progressive disclosure.
- Diagnose harness failures ("it keeps doing X") to their cause — context bloat, bad tool descriptions, missing stop conditions — and fix them.
- Build evals that catch harness regressions before users do.

## Constraints
- Model-agnostic principles; concrete examples may use Claude Code / ZCode / OpenAI Agents SDK style harnesses.
- Lessons short and mechanism-first: show the loop or prompt, then the principle.
- Bilingual: every lesson ships in English and Chinese.

## Out of scope
- Model training/fine-tuning, weight-level ML.
- Building a full production agent product end-to-end (course teaches the harness layer).
