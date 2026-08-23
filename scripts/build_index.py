#!/usr/bin/env python3
"""Regenerate the repo-root index.html for GitHub Pages.

Scans every */lessons/*.html (course folders only) and writes a landing page
where each course is a card; opening the card reveals its lesson list.
Courses listed in --exclude (e.g. untracked locally) are skipped so the live
index never links to pages that don't exist on the remote.

Usage:
    python3 scripts/build_index.py [--exclude apache-arrow ...]
"""

import argparse
import html
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

TITLE_RE = re.compile(r"<title>(.*?)</title>", re.S)
# titles look like "GT · Lesson 1 — Actual Title" or "Lesson 1 — Actual Title";
# keep only the part after the lesson marker
TITLE_PREFIX_RE = re.compile(r"^(?:[^·—]*·\s*)?(?:Lesson\s*\d+\s*[—–-]\s*)?(.+)$")
MISSION_TITLE_RE = re.compile(r"^#\s+(?:Mission:\s*)?(.+)$", re.M)


def course_title(course: Path) -> str:
    mission = course / "MISSION.md"
    if mission.exists():
        m = MISSION_TITLE_RE.search(mission.read_text(encoding="utf-8"))
        if m:
            return html.escape(m.group(1).strip())
    return course.name.replace("-", " ").title()


def lessons(course: Path) -> list[tuple[str, str]]:
    out = []
    for f in sorted((course / "lessons").glob("*.html")):
        m = TITLE_RE.search(f.read_text(encoding="utf-8"))
        raw = m.group(1).strip() if m else f.stem
        # raw is already HTML-escaped in the source document — do not escape again
        title = TITLE_PREFIX_RE.match(raw).group(1).strip()
        out.append((f.name, title))
    return out


CSS = """
:root { --ink:#14181d; --paper:#fcfcfa; --muted:#667080; --rule:#d7dbe0;
  --accent:#1d5c8a; --accent-soft:#e7eff5; --amber:#b8560f; --amber-soft:#f8efe5;
  --serif:"Palatino Linotype","Palatino","Book Antiqua",Georgia,serif;
  --sans:"Helvetica Neue",Helvetica,Arial,sans-serif;
  --mono:"SFMono-Regular","Consolas",Menlo,monospace; }
* { box-sizing:border-box; }
body { margin:0 auto; max-width:52rem; padding:3.5rem 1.5rem 5rem;
  background:var(--paper); color:var(--ink); font-family:var(--serif);
  font-size:1.1rem; line-height:1.65; }
h1 { font-family:var(--sans); font-weight:700; font-size:1.9rem; letter-spacing:-.01em; margin:.4rem 0 .2rem; }
.dek { color:var(--muted); font-style:italic; margin:.2rem 0 0; }
.kicker { font-family:var(--sans); font-size:.72rem; letter-spacing:.18em; text-transform:uppercase; color:var(--muted); }
main > header { border-bottom:2px solid var(--ink); padding-bottom:.8rem; margin-bottom:2.2rem; }

.courses { display:grid; grid-template-columns:repeat(auto-fill,minmax(21rem,1fr)); gap:1.1rem; margin-top:1.8rem; }
details.card { border:1px solid var(--rule); border-radius:9px; background:#fff; overflow:hidden; }
details.card[open] { border-color:var(--accent); box-shadow:0 1px 6px rgba(20,24,29,.07); }
details.card summary { list-style:none; cursor:pointer; padding:1.05rem 1.15rem .95rem;
  display:grid; grid-template-columns:1fr auto; align-items:start; column-gap:.8rem; }
details.card summary::-webkit-details-marker { display:none; }
details.card summary:hover h2 { color:var(--accent); }
.card h2 { font-family:var(--sans); font-weight:700; font-size:1.02rem; line-height:1.3;
  margin:0; transition:color .12s; }
.card .meta { display:flex; align-items:baseline; gap:.5rem; margin-top:.3rem;
  font-family:var(--sans); font-size:.78rem; color:var(--muted); }
.card .chev { font-family:var(--sans); color:var(--muted); font-size:.95rem; line-height:1;
  padding-top:.2rem; transition:transform .15s; }
details.card[open] .chev { transform:rotate(45deg); color:var(--accent); }

ol.lessons { list-style:none; padding:.35rem 0 .6rem; margin:0; border-top:1px solid var(--rule); }
ol.lessons li { margin:0; }
ol.lessons a { display:flex; justify-content:space-between; gap:1rem; padding:.42rem 1.15rem;
  font-family:var(--sans); font-size:.92rem; text-decoration:none; color:var(--ink); }
ol.lessons a:hover { background:var(--accent-soft); color:var(--accent); }
ol.lessons .n { color:var(--muted); font-family:var(--mono); font-size:.8rem; white-space:nowrap; }
.glossary { font-family:var(--sans); font-size:.8rem; color:var(--muted);
  margin:.15rem 0 0; padding:.45rem 1.15rem .3rem; border-top:1px solid var(--rule); }
.glossary a { color:var(--accent); }

footer { margin-top:3.2rem; padding-top:1rem; border-top:2px solid var(--ink);
  font-family:var(--sans); font-size:.8rem; color:var(--muted); }
footer code { font-family:var(--mono); font-size:.9em; }
@media (max-width:480px) { body { padding:2.2rem 1.1rem 3.5rem; font-size:1.02rem; } }
"""


def build(exclude: set[str]) -> str:
    cards = []
    courses = sorted(
        d for d in ROOT.iterdir()
        if d.is_dir() and (d / "lessons").is_dir() and d.name not in exclude
    )
    if not courses:
        sys.exit("no course folders found")
    for course in courses:
        ls = lessons(course)
        items = [
            f'<li><a href="{course.name}/lessons/{fname}">'
            f'<span>{title}</span><span class="n">{fname.split("-")[0]}</span></a></li>'
            for fname, title in ls
        ]
        gloss = course / "reference" / "glossary.html"
        gloss_line = (
            f'<p class="glossary">Reference · <a href="{course.name}/reference/glossary.html">Glossary</a></p>'
            if gloss.exists() else ""
        )
        cards.append(
            f"""<details class="card">
<summary>
<h2>{course_title(course)}</h2>
<span class="chev" aria-hidden="true">+</span>
<span class="meta">{len(ls)} lesson{'s' if len(ls) != 1 else ''}</span>
</summary>
<ol class="lessons">
{chr(10).join(items)}
</ol>
{gloss_line}
</details>"""
        )
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>teach-materials — course index</title>
<style>{CSS}</style>
</head>
<body>
<main>
<header>
<div class="kicker">Personal learning repo · course index</div>
<h1>teach-materials</h1>
<p class="dek">Each course is a card — open it for its lessons.</p>
</header>
<div class="courses">
{chr(10).join(cards)}
</div>
<footer>Generated by <code>scripts/build_index.py</code> — rerun after adding lessons
(<code>--exclude &lt;folder&gt;</code> for untracked courses), then commit.</footer>
</main>
</body>
</html>
"""


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--exclude", nargs="*", default=[])
    args = ap.parse_args()
    out = ROOT / "index.html"
    out.write_text(build(set(args.exclude)), encoding="utf-8")
    print(f"wrote {out.relative_to(ROOT)} ({len(out.read_text(encoding='utf-8'))} bytes)")
