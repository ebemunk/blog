# AGENTS.md

How this repo works, so a new post feels like the old ones. Conventions, not law: when a post needs something different, do it and note why in that post's own `AGENTS.md`.

The blog is "Thinking Through the Party" (https://blog.ebemunk.com), long-form data visualization essays by Bugra Firat (`ebemunk`). Hugo site, custom theme, one folder of source code per post.

## Layout

```
config.toml                 Hugo config (theme lexo, permalinks /:slug/, GA4 id, unsafe HTML on)
Makefile                    `make deploy` (see Preview and deploy)
assets/img/<name>.png       post thumbnails, referenced by front matter `image`
content/<YYYY-MM-DD-slug>/  one page bundle per post: index.md + its images, build/, fonts, …
projects/<YYYY-MM-DD-slug>/ the code and data behind that post (same folder name)
themes/lexo/                the theme, vendored and patched in-repo (no submodule)
public/                     the built site, committed; deployed to the gh-pages branch
resources/_gen/             Hugo's resized thumbnails, committed
```

- Folder names are `YYYY-MM-DD-slug`. The date is when the project started; `publishDate` in front matter is when it went live and is often months later. Both folders share the name so it's obvious which code made which post.
- `content/` and `projects/` are paired, but not every project has a post (`2024-12-11-wcc-2024`, `2020-06-29-van-weather` were never published).
- Per-post agent notes go in `projects/<post>/AGENTS.md`: goal, data sources, known gaps, sibling repos. Keep this root file general.

## Starting a new post

1. Pick a slug and today's date. Create `content/<date-slug>/index.md` and `projects/<date-slug>/`.
2. Put data collection in `projects/<post>/collect/` (or `data/`) and the figures in `projects/<post>/viz/`. Small projects can skip the split.
3. Copy the viz setup from the newest post (`projects/2026-10-17-11m-openings-poster/viz/`).
4. Add a 1.5:1 thumbnail to `assets/img/<slug>.png` and point `image` at it.
5. Write with `draft = true` and preview with `hugo serve -D`. Drop the draft flag to publish, then `make deploy`.

## Front matter

TOML (`+++`). Every post has `title`, `slug`, `tags`, `shortSummary`, `related`, `image`, `publishDate`.

```toml
+++
publishDate = "2022-06-14"
title = "Beholder: Beauty in the eyes of Playboy"
slug = "beholder-beauty-in-the-eyes-of-playboy"
tags = ["data visualization", "long form"]
image = "img/playmates.png"
shortSummary = "Finding out Playboy's idea of beauty from analyzing the data of 806 Playmates."
related = ["2021-02-18-lastwords", "2019-01-05-plane-crashes.md"]
responsive = true
+++
```

- `publishDate`, not `date`. Add `lastmod` on a real rewrite; the theme shows "Updated:" when they differ.
- `slug` is explicit and is the whole URL (`/:slug/`). Don't change it after publishing.
- `tags` vocabulary so far: `data visualization` (almost all), `long form`, `quickviz` (a single PNG with a few paragraphs), `chess`, `text mining`, `maps`, `making of`, `technical`, `javascript`. Reuse these before inventing one.
- `shortSummary` is the meta description and the home-page hover text; one plain sentence.
- `related`: two content paths; the theme renders them as "See Also" cards. Both `2019-01-05-plane-crashes.md` and `2016-02-27-visual-look-chess/index.md` forms resolve.
- `image`: path under `assets/`, resized by the theme (600px cards, 1200px og:image). Keep thumbnails 1.5:1.
- `responsive = true` lets phones zoom. Set it on every new post; the theme's default viewport disables user scaling for the old fixed-width vizzes.
- `hidden = true` keeps a post off the home grid; `draft = true` keeps it out of the build.

## Writing the post

Goldmark `unsafe = true`, so posts mix Markdown prose with raw HTML for figures.

- Prose is Markdown. Headings are `##` for sections, `###` for sub-points. Posts open straight into the subject (no preamble heading) and usually end with a short "Closing words" / wrap-up section that invites comments and links the tools used.
- A figure is an HTML mount the bundle fills in, with its title and subtitle as plain divs:

  ```html
  <div>
    <div class="viz-title">Word Count</div>
    <div class="viz-subtitle">Majority of last statements are under 100 words.</div>
    <div id="statement-lengths" class="viz"></div>
  </div>
  ```

  The newest post uses `<div data-openings-stage="prune"></div>` mounts instead (see below). Either way the mount is empty in the source and gets prerendered.
- Static figures are a linked image: `<a href="viz.png" class="viz"><img src="viz.png" /></a>` with a small `<style>` block at the bottom of the post. Quickviz posts are just that plus a few paragraphs.
- Bundle assets are loaded at the very end of `index.md`:

  ```html
  <link rel="stylesheet" href="build/index.css">
  <script type="module" src="build/index.js"></script>
  ```

  Older posts keep a commented-out `//localhost:8080/index.js` line above it for dev; that's fine to keep.
- Theme facts the post CSS has to live with: body background `#282c34`, headings `#d19a66` in Abril Fatface, body in Poppins at 18px, prose max width `40rem`. Only `p`, `ul` and headings are width-limited, so a figure can be wider than the text column. Post content sits inside `article.article`; scope post CSS under that or under a post-specific class prefix (`.openings-…`) so it can't leak into the theme.
- The theme already appends the share blurb, newsletter signup, "See Also" and the consulting line to every post. Don't repeat those in the body.

### Voice

First person, casual, curious, a little self-deprecating. Contractions, parenthetical asides, "honestly", "let's see", the occasional exclamation. Short paragraphs that react to each chart ("Wow, what a graph!", "Not really a Gauss curve!") rather than describe it clinically. Exact numbers when they matter (**2,197,113 games**, 454 statements) and bold on the one stat that carries a section. Reader suggestions get quoted as blockquotes with a name and link. No marketing language, no bullet-list prose, no hedged corporate tone. Prints and shop links go near the end, as an aside, never as the point of the piece.

When drafting for the author, reuse their own sentences from earlier posts and notes where possible, and mark anything you had to guess.

## Building figures

### Current pipeline (2026, `projects/2026-10-17-11m-openings-poster/viz/`)

Vite + React 18 + TypeScript + d3 v7, built as a library and prerendered into the post. This is the house style for a new interactive post.

- `src/embed.tsx` is the entry. It finds every `[data-<post>-stage]` mount and `hydrateRoot`s a React figure into it (or `createRoot` if the mount is empty).
- `vite.config.ts` builds `src/embed.tsx` to `../../../content/<post>/build/index.js` + `index.css` (`lib` mode, ES format, single CSS file, `emptyOutDir`).
- The post is authored in `content/<post>/tpl.md`. `scripts/ssr.mjs` loads `src/ssr.tsx` through Vite's SSR, replaces each empty mount with `renderToString` output, and writes `content/<post>/index.md`. **Edit `tpl.md`, never `index.md`.**
- Scripts: `npm run dev` (Vite playground of every figure), `npm run build` (`tsc --noEmit && vite build && node scripts/ssr.mjs`), `npm run watch` (rebuild + re-render on save, run next to `hugo serve -D`), `npm run ssr` (render only).
- Figure definitions live in one `stages.ts` (id, caption, blurb, knobs, optional panels/modes), so the SSR, the dev page and the post all draw from the same list.
- `src/embed.css` holds all post styling with a post-specific prefix. Processed data is small JSON in `src/data/`, committed; the scripts that make it live next to it or in `collect/`.
- SSR output must be deterministic (fixed iteration counts, sorted inputs, no `Math.random` without a seed) or hydration will redraw and flicker.
- Each viz folder has a short `README.md` saying how to build and what regenerates what. Keep that.

### Earlier eras (for reading old projects, not for new ones)

| Era | Posts | Stack | Output |
|---|---|---|---|
| 2016 (rewritten 2021) | visual-look-chess | TypeScript + d3 v6, Snowpack | `content/<post>/build/` |
| 2018–2019 | lost-text-mining, year-in-van, chess-part2, plane-crashes | React 16 + webpack 4 + Babel, `collect/` + `viz/` | `bundle.js` in the bundle or `build/` |
| 2020 | gutenberg-colors, cacophony, van-weather | Node scripts rendering a PNG | `viz.png` in the bundle |
| 2021 | lastwords | TypeScript + Snowpack, `poster.html` for the share image | `build/` |
| 2021–2022 | playmates | React 17 + TS + webpack/swc, shared `vizlib/` (rollup), first `tpl.md` → `ssr.js` → `index.md` prerender, `poster.webpack.config.js` | `build/` |
| 2022 | candidates | Vite + React, exported as a PNG | `viz.png` |
| 2024 | wcc-2024 | Vite + React + TS app, unpublished | — |

The `tpl.md` → prerender → `index.md` idea comes from playmates; the 2026 version is the cleaned-up one.

## Data

- Raw inputs (PGN dumps, scraped pages, API responses, keys) stay out of git: see the root `.gitignore` (`*.pgn`, `.env`, …) and per-project ignores like `projects/2021-02-18-lastwords/data/.gitignore`. Commit the processed, post-sized JSON/CSV the figures actually load.
- Keep collection code (`collect/`) separate from drawing code (`viz/`) so a dataset can be refreshed without touching figures.
- State counts exactly and keep them consistent between the post, the figures and any product copy. When a number can't be reproduced, say so in the post's `AGENTS.md`; don't round it into existence.

## Preview and deploy

- Hugo `0.168` extended (Homebrew). The theme was patched for it in commit `4959e93`; `theme.toml` says `min_version = "0.146.0"`. `config.toml` has `[security] allowContent` so bundles may ship `.html` siblings (`poster.html`, `images.html`).
- Preview: `hugo serve -D` at the repo root, plus the viz folder's `npm run watch` when working on figures.
- Deploy: `make deploy` = `rm -rf public && hugo --gc --minify`, write `public/CNAME`, commit everything as "hugo rebuild", push `master`, `git subtree push --prefix=public origin gh-pages`. GitHub Pages serves `gh-pages`. `make forceGH` re-splits the subtree if the push is rejected.
- Never commit a `public/` produced by `hugo serve` or `hugo -D`: it carries `localhost:1313` URLs and drafts. If that happens, `make deploy` rebuilds it clean.
- Analytics: `googleAnalytics = "G-HYX1G0GTVT"` (GA4) via the theme footer's internal template.
- Branch per post (`11m-openings-poster`), merge to `master`. Commit messages are short and plain ("hugo rebuild", "typo", "finishing touches"). Commit when asked, not speculatively.

## Images and media

- Photos from a phone carry GPS, device and timestamp EXIF and an HDR gain map, and are usually Display P3. Before adding one to a bundle: strip all metadata, convert to sRGB, save as JPEG without a profile. The theme's dark page makes wide-gamut photos look oversaturated.
- Crops from print files must be converted from the print ICC profile to sRGB first.
- Fonts used in figures are self-hosted in the bundle (`fonts/*.woff`) under their license, never hot-linked.
- Prefer `webp`/`jpg` under ~250 KB for inline images; the share thumbnail is a PNG in `assets/img/`.
- `alt` text on every `<img>`, `loading="lazy"` below the fold.

## Working rules

- Distinguish evidence, assumption and gap. Don't invent counts, dates, specs or file contents; say what's missing.
- Prefer the author's own wording from earlier posts and project notes. Copy facts from notes; don't copy their tone.
- Leave no working notes in published files: no HTML comments, TODOs or "per user" remarks in `tpl.md`, `index.md` or `public/`. Put them in the post's `AGENTS.md`.
- Don't edit generated files by hand: `index.md`, `build/`, `public/`, `resources/`.
- Verify by rendering: build, run Hugo into a temp dir, screenshot the section, look at it.
