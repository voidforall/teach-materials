# Notes

- Audience: experienced mid-level C++ engineer. Do not explain basics (pointers, RAII, what a mutex is). Assume C++11–20 fluency; teach the model underneath.
- User asked to "finish all lessons non stop" — full course authored in one session (2026-08-23).
- Bilingual via paired files: `NNNN-slug.html` + `NNNN-slug.zh.html`, with a `中`/`EN` langbtn in the masthead (convention of this repo; `scripts/add_lang_switches.py` can patch).
- Quiz answers should be equal-length to avoid format leaks (course convention).
- Linux/macOS focus; ISAs x86-64 + ARM64/Apple Silicon (user is on darwin arm64 — examples that run locally are a plus).
- Quiz answer style: short answers + "why" paragraph, in `<details>` blocks, matching llm-security template.
