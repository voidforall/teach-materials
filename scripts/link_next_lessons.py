#!/usr/bin/env python3
"""Turn each lesson's plain-text "Next lesson" footer line into a real link.

The nav footers were authored with prev/glossary as links but the next-lesson
affordance as plain text. This wraps it in an anchor to the same-language next
lesson (by filename ordering), removes stale "(coming)" markers, and links the
GT "your pick" placeholders. One-shot migration; idempotent.

    python3 scripts/link_next_lessons.py
"""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
NAV = re.compile(r'<div class="nav">.*?</div>|<nav class="nav">.*?</nav>', re.S)


def wrap(nxt: str, label: str) -> str:
    label = label.replace(" (coming)", "")
    arrow = " ►" if "►" in label else ""
    label = label.replace(" ►", "").rstrip()
    return f'<a href="{nxt}">{label}</a>{arrow}'


def fix_nav(nav: str, nxt: str | None) -> str:
    if nxt is None:
        return nav

    def repl(mo: re.Match) -> str:
        prefix = "下一课：" if mo.group(0).startswith("下一课") or "下一课" in mo.group(0)[:8] else "Next: "
        inner = mo.group(1)
        if "<a " in inner:
            return mo.group(0)
        return f"{prefix}{wrap(nxt, inner)}</span>"

    nav = re.sub(r"Next(?: \(your list\))?:\s*(.*?)</span>", repl, nav)
    nav = re.sub(r"下一课（你清单上的）：\s*(.*?)</span>", repl, nav)
    nav = re.sub(r"下一课：\s*(.*?)</span>", repl, nav)

    # apache-arrow course pattern: "Lesson N (soon): title" — lessons all exist now
    def soon_en(mo: re.Match) -> str:
        if "<a " in mo.group(2):
            return mo.group(0)
        return f"{mo.group(1)}: {wrap(nxt, mo.group(2))}</span>"

    def soon_zh(mo: re.Match) -> str:
        if "<a " in mo.group(2):
            return mo.group(0)
        return f"{mo.group(1)}：{wrap(nxt, mo.group(2))}</span>"

    nav = re.sub(r"(Lesson \d+) \(soon\):\s*(.*?)</span>", soon_en, nav)
    nav = re.sub(r"(第 \d+ 课)（即将推出）：\s*(.*?)</span>", soon_zh, nav)
    # GT lesson 5 placeholders ("course arc done, your pick" era)
    nav = nav.replace(
        "— next, your pick</span>",
        f'— next: <a href="{nxt}">repeated games &amp; the folk theorem</a></span>',
    )
    nav = nav.replace(
        "—— 接下来你选</span>",
        f'—— 下一课：<a href="{nxt}">重复博弈与 folk theorem</a></span>',
    )
    return nav


def main() -> None:
    changed = 0
    for course in sorted(ROOT.iterdir()):
        ldir = course / "lessons"
        if not ldir.is_dir():
            continue
        all_files = sorted(ldir.glob("*.html"))
        seqs = [
            [f for f in all_files if not f.name.endswith(".zh.html")],
            [f for f in all_files if f.name.endswith(".zh.html")],
        ]
        for seq in seqs:
            for i, page in enumerate(seq):
                text = page.read_text(encoding="utf-8")
                m = NAV.search(text)
                if not m:
                    continue
                nxt = seq[i + 1].name if i + 1 < len(seq) else None
                new_nav = fix_nav(m.group(0), nxt)
                if new_nav != m.group(0):
                    page.write_text(text[: m.start()] + new_nav + text[m.end():], encoding="utf-8")
                    changed += 1
    print(f"nav blocks updated: {changed}")


if __name__ == "__main__":
    main()
