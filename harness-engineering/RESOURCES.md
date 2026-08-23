# Harness Engineering Resources

## Knowledge

- [Anthropic: Building effective agents](https://www.anthropic.com/research/building-effective-agents)
  The canonical framing of workflows vs agents, and "simplicity first" harness design. Use for: loop anatomy, when to add agency.
- [Anthropic: Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
  Context as a finite resource; compaction, structured note-taking, sub-agent architectures, just-in-time retrieval. Use for: every context lesson.
- [OpenAI: A practical guide to building agents](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf)
  Orchestration patterns, tool design, guardrails checklist. Use for: tool schemas and management layers.
- [Anthropic: Writing tools for agents](https://www.anthropic.com/engineering/writing-tools-for-agents)
  Concrete tool-design doctrine: fewer high-impact tools, tokens-to-tool-call ratio, response format, error steering. Use for: the tool design lesson.
- [Anthropic: Writing effective tools for agents (docs)](https://docs.claude.com/en/docs/agents-and-tools/tool-use/implement)
  Practical schema rules: concrete examples in descriptions, output contracts, errors as redirection. Use for: hands-on exercises.
- [Agent Skills / SKILL.md spec](https://agentskills.io/) and [Claude Code skills docs](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview)
  Progressive disclosure in practice: names/descriptions load always, body on invoke, bundled resources on demand. Use for: the skills lesson.
- [Claude Code hooks docs](https://docs.claude.com/en/docs/agents-and-tools/hooks)
  Deterministic shell triggers on tool events — the guardrail primitive. Use for: the permissions/hooks lesson.
- [Claude Code subagents docs](https://docs.claude.com/en/docs/agents-and-tools/sub-agents)
  Context isolation and parallel delegation. Use for: the subagents lesson.
- [OpenAI Evals](https://platform.openai.com/docs/guides/evals), [Anthropic evals tooling](https://docs.claude.com/en/docs/test-and-evaluate/develop-tests)
  Grading harness changes with model-graded and code-graded evals. Use for: the evals lesson.
- [Chip Huyen: Evaluating LLM applications](https://huyenchip.com/2023/08/16/llm-research-open-source-challenges-evaluation-part-2.html)
  The classic taxonomy of eval failure modes. Use for: eval methodology grounding.

## Wisdom (Communities)

- [r/ClaudeAI + Claude Code community](https://www.reddit.com/r/ClaudeAI/)
  Where real harness tricks (CLAUDE.md patterns, hook recipes) are traded daily. Use for: practical patterns and war stories.
- [LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/)
  Harness work independent of any one vendor; agentic tooling threads.
- [LangChain / agent-engineering Discords and GitHub discussions](https://github.com/langchain-ai)
  Implementation-level questions on loops, memory, evals.

## Gaps

- No single canonical text on permission/sandbox architecture — will mine Claude Code docs + real harnesses (ZCode, goose, opencode) when that lesson lands.
