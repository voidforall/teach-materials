# Mission: LLM Security — attacking and defending AI agents

## Why
The user is preparing to compete in CrowdStrike's International AI Security Challenge ("AI Unlocked: Agents of Chaos", Aug–Sep 2026): a virtual AI red-teaming game where players use prompt injection and social engineering to turn an adversary organization's AI agents against them — extracting secrets and triggering unauthorized actions while evading detection. Scoring is puzzle points minus tokens consumed, across three Acts (The Sanctum, The Gatekeeper, The Basilisk). The user needs hands-on mastery of LLM attack techniques (prompt injection, jailbreaks, indirect injection, agent abuse, detection evasion) and the defender's view (guardrails, sandboxing, runtime protection) to score high.

## Success looks like
- Classify any attack against OWASP LLM Top 10 / agent threat models and reason about which applies.
- Craft layered prompt injections: direct, indirect (via retrieved content), multi-turn, and tool-mediated.
- Understand jailbreak families (role-play, encoding/cipher, many-shot, hypothetical framing) and why they work mechanistically.
- Attack agent scaffolds: confused deputy, excessive agency, tool poisoning, markdown/link data exfiltration.
- Evade guardrails: low-resource languages, obfuscation, steganography, timing — and know their detection trade-offs.
- Prompt token-efficiently (score = points − tokens): terse prompts, replay puzzles to optimize.
- Design defenses: instruction hierarchy, spotlighting/delimiters, output filtering, least-privilege tools, human-in-the-loop.

## Constraints
- Bilingual: every lesson ships in English and Chinese.
- Citation-backed: OWASP, Simon Willig's prompt-injection series, Microsoft/Anthropic/OpenAI guardrail papers, Carmichael/Greshake etc.
- Short, technique-first lessons with a retrieval quiz and a hands-on exercise.

## Out of scope
- Model weight-level attacks (adversarial examples on classifiers, model extraction).
- Full ML security MLOps pipeline hardening beyond agent runtime.
