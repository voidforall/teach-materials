#!/usr/bin/env python3
"""Inject the EN↔中 toggle button into every bilingual page's masthead.

For each course page that has a counterpart in the other language, this:
  1. removes the old plain cross-language links (中文 / English anchors),
  2. appends a styled `.langbtn` into the kicker's right-most span,
     linking to the counterpart page (button shows the OTHER language).

Idempotent — pages already carrying a langbtn are skipped. Styling lives in
each course's assets/lesson.css (.langbtn). Run from the repo root:

    python3 scripts/add_lang_switches.py
"""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# old cross-language anchors, e.g. "· <a href="x.zh.html">中文</a>" and
# "· 参考 <a href="glossary.html">English</a>" (glossary kickers carried a word)
OLD_LINK = re.compile(r"\s*·\s*[^<]*<a href=\"[^\"]+\">(?:中文|English)</a>")
KICKER = re.compile(r'<div class="kicker">(.*?)</div>', re.S)


def counterpart(page: Path) -> Path | None:
    if page.name.endswith(".zh.html"):
        c = page.with_name(page.name[: -len(".zh.html")] + ".html")
    else:
        c = page.with_name(page.name[: -len(".html")] + ".zh.html")
    return c if c.exists() else None


def inject(text: str, btn: str) -> str:
    text = OLD_LINK.sub("", text)
    m = KICKER.search(text)
    if not m:
        raise SystemExit(f"no kicker found")
    inner = m.group(1)
    idx = inner.rfind("</span>")
    if idx == -1:
        inner = inner + " " + btn
    else:
        inner = inner[:idx] + " " + btn + inner[idx:]
    return text[: m.start(1)] + inner + text[m.end(1):]


def main() -> None:
    changed = skipped = 0
    for course in sorted(ROOT.iterdir()):
        if not (course / "lessons").is_dir():
            continue
        pages = list((course / "lessons").glob("*.html")) + list(
            (course / "reference").glob("*.html")
        )
        for page in pages:
            text = page.read_text(encoding="utf-8")
            if "langbtn" in text:
                skipped += 1
                continue
            counter = counterpart(page)
            if counter is None:
                continue
            if page.name.endswith(".zh.html"):
                btn = f'<a class="langbtn" href="{counter.name}" title="Switch to English">EN</a>'
            else:
                btn = f'<a class="langbtn" href="{counter.name}" title="切换到中文">中</a>'
            page.write_text(inject(text, btn), encoding="utf-8")
            changed += 1
    print(f"injected: {changed}, already done: {skipped}")


if __name__ == "__main__":
    main()
