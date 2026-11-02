# Ahrefs Site Audit — blog.ebemunk.com — 2026-11-01

Pulled from the app's JSON (`site-audit.raw.json`); later agents shouldn't need to reopen Ahrefs.
Site Explorer (landscape) was not pulled in this run.

| | |
| --- | --- |
| Project | Blog.ebemunk (7235769), weekly crawl, Mondays 10:00 UTC |
| Crawl | 2026-10-26 (id 102) vs 2026-10-19 (id 101) |
| Health score | **70.5%** (73.3% every week from 2026-08-10 to 2026-10-19) |
| Internal URLs crawled | 78 (was 60) |
| Issue types | 24 (was 18) |

## Why health is low

Health is the share of internal URLs with no **Error**-level issue. 78 URLs × 29.5% = **23 URLs with an error**,
and they come from three root causes:

| Root cause | Error URLs | Issues it raises |
| --- | --- | --- |
| 1. Cloudflare Email Obfuscation rewrites the `mailto:` in `themes/lexo/layouts/partials/consult.html` to `/cdn-cgi/l/email-protection#…`, which is a 404 for crawlers | 14 (13 pages + the 404 URL) | 404 page, 4XX page, Page has links to broken page |
| 2. Tag pages (`_default/list.html`) render `.Summary`, which for quickviz posts contains `<img src=viz.png>`; relative to `/tags/<tag>/` that 404s | 6 (3 tag pages + 3 image URLs) | Image broken, Page has broken image, Page has links to broken page, Missing alt text |
| 3. Oversized PNGs: `color-in-books/viz.png` 5.2 MB, `candidates-2022/viz.png` 2.2 MB, `cacophony/ss-polar.png` 1.2 MB | 3 | Image file size too large |

Before the 2026-10-26 crawl it was 16/60 error URLs (same causes). The drop came from the new making-of post and
the new `print` / `making-of` tag pages adding 18 URLs, 7 of which inherited causes 1 and 2.

Separately, two posts link to dead external pages (also "Page has links to broken page", but those pages are already
counted under cause 1): beholder (time.com, nydailynews, 411mania, iheart, cfox) and lost-text-mining (tylervigen.com).

## Fixes

1. **Turn off Cloudflare → Scrape Shield → Email Address Obfuscation** for blog.ebemunk.com (or wrap the link in
   `<!--email_off-->…<!--/email_off-->`; comments survive minify here). Clears 14 error URLs.
2. **Tag/list summaries**: in `themes/lexo/layouts/_default/list.html` use `.Params.shortSummary` (fallback
   `.Summary | plainify`) so no relative images leak onto tag pages. Clears 6.
3. **Recompress** the three PNGs (webp/jpg, under ~250 KB if legible). Clears 3.
4. **Tag links without trailing slash**: `partials/tags.html` emits `/tags/<tag>` → 301 to `/tags/<tag>/`. Use
   `"/tags/<tag>/"` or `relURL`/`.Permalink` of the term. Clears "3XX redirect", "Page has links to redirect" (144 links),
   "Redirected page has no incoming internal links".
5. Tag pages have no `<h1>`, meta description or OG title/description (header.html only fills them from
   `shortSummary`). Add a heading and a description for list pages, or `noindex` the tag pages.
6. Dead external links in beholder and lost-text-mining: swap to archive.org copies.
7. Minor: 3 titles too long, 12 meta descriptions short (`shortSummary` is 33–78 chars); notices for Article /
   Organization schema and IndexNow are optional.

Expected after 1–3: 0 error URLs except the two posts with dead external links (~97%); after 6, 100%.
