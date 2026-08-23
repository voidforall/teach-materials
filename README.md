# teach-materials

Personal learning repo. Stores materials created with the `/teach` skill plus assorted study notes.

**Read online:** <https://voidforall.github.io/teach-materials/> — course index served by GitHub Pages.

## Structure

One folder per topic at the repo root. Keep each folder self-contained.

## Conventions

- One topic per folder.
- Prefer many small Markdown files over few large ones.

## Site (GitHub Pages)

Served from the root of `main`; `.nojekyll` keeps HTML served as-is. After adding
lessons, regenerate the index and commit it:

```sh
python3 scripts/build_index.py            # add --exclude <folder> for untracked courses
```
