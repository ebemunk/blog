# Openings sunburst figures

Figures for `content/2026-10-17-11m-openings-poster`.

- Edit the post in `tpl.md`, not `index.md`. `npm run build` bundles the figures into `build/` and prerenders them into `index.md` (`scripts/ssr.mjs`).
- `npm run watch` rebuilds `build/` and `index.md` on every save of `tpl.md` or `src/`. Run it next to `hugo serve -D`.
- `npm run dev` previews every figure.
- `scripts/opening-names.cjs` regenerates `src/data/opening-names-2m.json`.
