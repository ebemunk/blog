# AGENTS.md

Notes for the `11m-openings-poster` post. The repo-wide conventions are in the root `AGENTS.md`; this file only holds what is specific to this post.

## Goal

Write a "making of" blog post about the chess openings sunburst: how the original 2 million game visualization was built, how the ideas developed, and how that browser SVG became the 11 million game print poster (ink on paper).

The post should cover, loosely as a tutorial of process rather than a code walkthrough:

1. How the original viz was created (2016 "A Visual Look at 2 Million Chess Games").
2. How the ideas developed from that sunburst.
3. How the 11m / "Ten Million Openings" poster was produced.
4. The translation from interactive SVG in a browser to a static print.
5. A link to the poster: https://madfilaments.etsy.com/ca/listing/4531928752/chess-openings-data-art-ten-million

Archaeology lives in `projects/2026-10-17-11m-openings-poster/`. The workbench that replays drawing stages is `projects/2026-10-17-11m-openings-poster/viz/` (`npm run dev`). The post source is `content/2026-10-17-11m-openings-poster/tpl.md`.

The post should show the sunburst **evolving**: ply, prune, radius scale, hole, pad vs stroke, palette, SAN vs names, board vs void. Those are things that were considered and iterated on, not appendix trivia. Rebuild figures from the 2m tree. The 10.3M poster is the Prodigi preview + Etsy link — do not pretend we can regenerate that SVG.

## Expected data loss

The machine that held a lot of this work was fried. Local poster files, some source references, and intermediate exports may be missing or stale. Public remnants: Etsy listing images, Prodigi originals, the live blog posts, and the repos listed below. Mark gaps explicitly. Do not invent missing files, game counts, or print specs.

## Relevant paths

### This repo

- Original 2m post: `content/2016-02-27-visual-look-chess/`
- Original 2m viz source: `projects/2016-02-27-visual-look-chess/` (especially `openings/`)
- Part 2: `content/2018-12-29-chess-part2/` and `projects/2018-12-29-chess-part2/`
- Later chess posts: `content/2022-07-04-candidates/`, `projects/2024-12-11-wcc-2024/`

### Sibling source repos (`~/src/ebemunk`)

- `chessviz.tools` — custom viz software used for the newer openings / print work.
  Openings viz: `app/src/components/viz/Openings/`
  Print upload helper: `app/src/lib/utils/upload-print-image.ts`
  SVG→canvas: `app/src/components/viz/svgToCanvas.ts`
- `pgnstats` — custom PGN parser that emits openings trees and other stats. Openings tree: `openingmove.go`
- `chess-dataviz` — original D3 library (heatmaps, openings sunburst, move paths). Openings: `src/js/Openings.js`

### Prints shop vault (Obsidian)

`/Users/ebemunk/Library/Mobile Documents/iCloud~md~obsidian/Documents/Life/prints-shop/`

Key notes:

- `03 Projects/Project - Chess Dataviz.md`
- `04 Experiments/Product - Chess Openings Sunburst.md` (public title: "Ten Million Openings"; 10,388,956 games from Lumbra's Gigabase)
- `04 Experiments/Listing - Etsy Openings 11m.md`
- `04 Experiments/Experiment - Updated Chess Blog Post Launch.md`
- `04 Experiments/Experiment - Chess Sunburst Blog CTA.md`
- `02 Sources/Source - Chess Databases.md`
- `05 Operations/Etsy Store Setup - MadFilaments.md`

Treat the vault as project memory, not as the blog voice. Copy facts; do not paste shop-strategy language into the post.

## Facts to keep straight

- "11m" is the internal / Etsy listing name. The public product title is **Ten Million Openings**, built from **10,388,956** games (Lumbra's Gigabase). The original post used **2,197,113** games from MillionBase. Prefer the exact counts in writing.
- Paper: printed on Prodigi Enhanced Matte Art, `GLOBAL-FAP`, 200gsm. The other test paper was Smooth Art Paper, `ART-FAP-SAP`, 240gsm. Older notes and the Etsy listing said 240gsm; that was wrong.
- Fonts on the poster: Fanwood (title, italic subtitle) and Junction (labels), both OFL from The League of Moveable Type, self-hosted in the post's `fonts/`.
- `poster.webp` carries the Prodigi EMA color profile; convert to sRGB (relative colorimetric + black point compensation) before cropping figures from it.

## Working rules

- The print CTA belongs near the end, not as the point of the piece.
- Related existing posts: `2016-02-27-visual-look-chess`, `2018-12-29-chess-part2`.
