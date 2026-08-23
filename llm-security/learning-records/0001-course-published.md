# 0001 — Course published: LLM Security

## Context
User requested a full bilingual (EN/ZH) course on LLM security & attack techniques, in one uninterrupted session (2026-08-23), as preparation for CrowdStrike's International AI Security Challenge "AI Unlocked: Agents of Chaos" (Aug 31 – Sep 29 2026; score = puzzle points − tokens; Acts: The Sanctum / The Gatekeeper / The Basilisk).

## What was built
- 10 lessons × 2 languages: threat landscape → direct prompt injection → indirect injection → jailbreaks & filter evasion → agent attack surface → exfiltration channels → evading detection → token-efficient red-teaming → defense stack → capstone playbook.
- Reference cheat sheet (EN + ZH): OWASP quick table, injection pattern library, jailbreak selection guide, exfil channel table, defense checklist, token rules, glossary.
- Shared stylesheet reused (rl-for-kaggle lineage). Index regenerated with 中 badges.

## Non-obvious decisions
- Spine ordered the way you'd attack a challenge puzzle, ending on the challenge's own scoring economics (tokens) and a printable battle plan — not an academic taxonomy.
- Lesson 8 is dedicated to token efficiency because the challenge score subtracts tokens; drills rewriting a verbose payload to ¼ size.
- Defender's stack taught (Lesson 9) explicitly as attack intelligence: predict what puzzles punish, target the gaps (AgentDojo robustness–utility trade-off).

## Suggested next steps when user returns
- Work through Gandalf / AgentDojo drills together; time-boxed mock run of a capstone-style puzzle chain.
- Add a course cover image (user picks per past convention) and extend with a live post-mortem after Act 1.
