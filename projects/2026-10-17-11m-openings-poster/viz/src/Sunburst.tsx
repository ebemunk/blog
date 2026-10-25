import {
  arc,
  hierarchy,
  hsl,
  partition,
  scaleLinear,
  scaleOrdinal,
  scaleSqrt,
  schemeCategory10,
  schemeTableau10,
} from "d3";
import type { HierarchyRectangularNode } from "d3";
import { createContext, useContext, useId, useMemo } from "react";
import { CALLOUT_MARGIN, PosterLabels } from "./PosterLabels";
import openingNames from "./data/opening-names-2m.json";
import type { Knobs } from "./stages";
import type { OpeningNode } from "./tree";

/**
 * Draw only the empty <svg> with its real viewBox. ssr.tsx prerenders lazy figures this way,
 * so the page reserves their exact height before embed.tsx draws them.
 */
export const SkeletonContext = createContext(false);

/** Square window in viewBox units (origin at the center of the sunburst). */
export type Frame = { x: number; y: number; size: number };

type Props = {
  data: OpeningNode;
  knobs: Knobs;
  /** Crop the drawing to this window instead of showing the whole thing. */
  crop?: Frame;
  /** Outline this window on top of the drawing. */
  highlight?: Frame;
  className?: string;
  /** "sample-2015" is the d3 sequences-sunburst example tree. Default: chess. */
  dataset?: "sample-2015";
};

/**
 * Poster families: [inner/odd ring, even ring]. Hexes were sampled from the
 * Etsy listing photo (sRGB), not from the poster source, which was lost.
 * Median of ring 1 and ring 2 across several angles per family. The Prodigi
 * 2000x3000 render carries a paper ICC profile, so its raw values read too
 * saturated.
 */
const posterFamilies: Record<string, [string, string]> = {
  e4: ["#ab95b8", "#735882"], // violet
  d4: ["#7eadd9", "#3376b1"], // sky blue
  Nf3: ["#d6a5b8", "#aa5375"], // pink
  c4: ["#88b7b1", "#518279"], // mint
};

/** Minor first moves: the preview cycles extra cool hues near 12 o'clock. */
const posterExtras: [string, string][] = [
  ["#70bebb", "#246e67"], // teal
  ["#b3bbfb", "#2e2ed8"], // indigo
  ["#ccb7f0", "#7942d4"], // bright violet
];

function posterColor(
  san: string,
  depth: number,
  fade: number,
  extras: Map<string, number>,
  flat: boolean
) {
  let pair = posterFamilies[san];
  if (!pair) {
    if (!extras.has(san)) extras.set(san, extras.size);
    pair = posterExtras[extras.get(san)! % posterExtras.length];
  }
  if (flat) return hsl(pair[1]);
  const base = depth % 2 === 1 ? pair[0] : pair[1];
  return hsl(base).darker(Math.floor((depth - 1) / 2) * fade);
}

/** d3 v3 category20 (dropped from d3 v7). */
const category20 = [
  "#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728",
  "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2",
  "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5",
];

function posterTint(san: string, extras: Map<string, number>) {
  const pair = posterFamilies[san] ?? posterExtras[(extras.get(san) ?? 0) % posterExtras.length];
  return pair[0];
}

const names = openingNames as Record<string, string>;

/** "B12 - Caro-Kann Defense: Advance Variation" -> "Caro-Kann Defense: Advance Variation" */
function openingName(d: HierarchyRectangularNode<OpeningNode>) {
  const path = d
    .ancestors()
    .reverse()
    .slice(1)
    .map((a) => a.data.san)
    .join(" ");
  const raw = names[path];
  return raw ? raw.replace(/^[A-E]\d\d - /, "") : undefined;
}

/** Same shortening as chessviz.tools OpeningNameText: drop "Opening", keep the part after ": ". */
function shortName(name: string) {
  let short = name.replace("Opening", "").trim();
  const idx = short.indexOf(": ");
  if (idx >= 0) short = short.slice(idx + 2);
  return short.toUpperCase();
}

/** Centerline arc for a textPath, reversed on the bottom half so text reads upright. */
function textArc(r: number, a0: number, a1: number) {
  const mid = (a0 + a1) / 2;
  const flip = mid > Math.PI / 2 && mid < (3 * Math.PI) / 2;
  const [from, to] = flip ? [a1, a0] : [a0, a1];
  const large = a1 - a0 > Math.PI ? 1 : 0;
  const p = (a: number) => `${r * Math.sin(a)},${-r * Math.cos(a)}`;
  return `M${p(from)}A${r},${r} 0 ${large} ${flip ? 0 : 1} ${p(to)}`;
}

/** Uppercase sans-serif advance per character, in em, including letter-spacing. */
const NAME_CHAR_EM = 0.68;
const NAME_LETTER_SPACING = "0.06em";

function strokeStyle(knobs: Knobs) {
  switch (knobs.stroke) {
    case "white":
      return { stroke: "#fff", width: knobs.strokeWidth ?? 0.5, paintOrder: "normal" };
    case "black-hairline":
      return { stroke: "#000", width: knobs.strokeWidth ?? 0.1, paintOrder: "stroke" };
    default:
      return { stroke: "none", width: 0, paintOrder: "stroke" };
  }
}

function firstParent(d: HierarchyRectangularNode<OpeningNode>) {
  let n = d;
  while (n.depth > 1 && n.parent) n = n.parent;
  return n;
}

export function Sunburst({ data, knobs, crop, highlight, className, dataset }: Props) {
  const { width, hole } = knobs;
  const skeleton = useContext(SkeletonContext);

  const root = useMemo(() => {
    const h = hierarchy(data, (d) => d.children);
    if (knobs.sum === "leaves") {
      h.sum((d) => (d.children.length ? 0 : d.count));
    } else {
      h.eachAfter((d) => {
        (d as { value: number }).value = d.data.count;
      });
    }
    if (knobs.sort && knobs.sortHeight === false) {
      h.sort((a, b) => (b.value ?? 0) - (a.value ?? 0));
    } else if (knobs.sort) {
      h.sort((a, b) => b.height - a.height || (b.value ?? 0) - (a.value ?? 0));
    } else {
      h.sort(() => 0);
    }
    return partition<OpeningNode>().size([2 * Math.PI, width / 2 - hole])(h);
  }, [data, knobs.sum, knobs.sort, knobs.sortHeight, width, hole]);

  const rScale = useMemo(() => {
    const domain: [number, number] = [0, width / 2];
    const range: [number, number] = [0, width / 2];
    if (knobs.radius === "square") {
      // The inverse of sqrt: y^2 / R, so each ring is thicker than the one inside it.
      const R = width / 2;
      return (y: number) => (y * y) / R;
    }
    const s = knobs.radius === "sqrt" ? scaleSqrt(domain, range) : scaleLinear(domain, range);
    return (y: number) => s(y);
  }, [knobs.radius, width]);

  const posterExtraIndex = new Map<string, number>();

  const color = useMemo(() => {
    const scale = scaleOrdinal<string, string>(
      knobs.palette === "tableau10"
        ? schemeTableau10
        : knobs.palette === "category20-move"
          ? category20
          : schemeCategory10
    );
    // Oct 2015: category20 domain is unique names in partition order, root included
    // (it is filtered by dx but not drawn). Later names reuse the first color.
    if (dataset === "sample-2015") {
      const min =
        knobs.thresholdUnit === "fraction"
          ? knobs.nodeThreshold * 2 * Math.PI
          : knobs.nodeThreshold;
      const names: string[] = [];
      for (const d of root.descendants()) {
        if (d.x1 - d.x0 <= min) continue;
        if (!names.includes(d.data.san)) names.push(d.data.san);
      }
      scale.domain(names);
    }
    return scale;
  }, [knobs.palette, knobs.thresholdUnit, knobs.nodeThreshold, dataset, root]);

  const arcGen = useMemo(
    () =>
      arc<HierarchyRectangularNode<OpeningNode>>()
        .startAngle((d) => d.x0)
        .endAngle((d) => d.x1)
        .padAngle((d) =>
          knobs.padAngle ? Math.min((d.x1 - d.x0) / 2, knobs.padAngle) : 0
        )
        .padRadius(width / 4)
        .innerRadius((d) => rScale(d.y0))
        .outerRadius((d) => rScale(Math.max(d.y0, d.y1 - knobs.ringGap))),
    [knobs.padAngle, knobs.ringGap, rScale, width]
  );

  function colorOf(d: HierarchyRectangularNode<OpeningNode>) {
    const flat = knobs.shading === "flat";
    // The d3 sequences example colored every node by its own name.
    const san = knobs.palette === "category20-move" ? d.data.san : firstParent(d).data.san;
    if (knobs.palette === "poster") {
      return posterColor(san, d.depth, knobs.depthFade, posterExtraIndex, flat);
    }
    let col = hsl(color(san)).brighter(knobs.brighten ?? 0.2);
    if (flat) return col.darker(d.depth * knobs.depthFade);
    col = d.depth % 2 === 0 ? col.darker(0.5) : col.brighter(0.5);
    return col.darker(d.depth * knobs.depthFade);
  }

  const visible = root.descendants().filter((d) => {
    if (!d.depth) return false;
    const span = d.x1 - d.x0;
    const t =
      knobs.thresholdUnit === "fraction" ? knobs.nodeThreshold * 2 * Math.PI : knobs.nodeThreshold;
    return span > t;
  });

  const labelKind = knobs.labels ?? "san";
  const idPrefix = useId();

  // Name an arc where its opening begins: it has an ECO name and no ancestor
  // already carries that name. Then keep only names that fit the arc.
  const poster = knobs.posterLabels === true;
  const nameLabels =
    poster || labelKind === "san"
      ? []
      : visible.flatMap((d) => {
          const name = openingName(d);
          if (!name) return [];
          const inherited = d
            .ancestors()
            .slice(1)
            .some((a) => openingName(a) === name);
          if (inherited) return [];
          const text = shortName(name);
          const r0 = rScale(d.y0);
          const r1 = rScale(Math.max(d.y0, d.y1 - knobs.ringGap));
          const rMid = (r0 + r1) / 2;
          const length = rMid * (d.x1 - d.x0);
          const fit = (0.85 * length) / (text.length * NAME_CHAR_EM);
          const fontSize = Math.min(16, 0.55 * (r1 - r0), fit);
          // ~10px at the blog's rendered size (900 units in ~790px); smaller is unreadable.
          if (fontSize < width / 75) return [];
          return [{ d, text, fontSize, path: textArc(rMid, d.x0, d.x1) }];
        });
  const named = new Set(nameLabels.map((n) => n.d));

  const sample = dataset === "sample-2015";
  const labels = !poster && knobs.showSan && labelKind !== "names"
    ? visible.filter((d) => {
        if (named.has(d)) return false;
        const span = d.x1 - d.x0;
        // Oct 2015: (dx * 90 / π) >= 10, depth already excluded from `visible`.
        if (sample) return (span * 90) / Math.PI >= 10;
        const t =
          knobs.thresholdUnit === "fraction"
            ? knobs.sanThreshold * 2 * Math.PI
            : knobs.sanThreshold;
        return span > t;
      })
    : [];

  const holeR = rScale(root.y1);
  const line = strokeStyle(knobs);
  const margin = poster && labelKind !== "san" ? CALLOUT_MARGIN : 0;
  const half = width / 2 + margin;
  const viewBox = crop
    ? `${crop.x} ${crop.y} ${crop.size} ${crop.size}`
    : `${-half} ${-half} ${2 * half} ${2 * half}`;

  if (skeleton) {
    return <svg viewBox={viewBox} role="img" className={className ?? "openings-sunburst"} />;
  }

  return (
    <svg
      viewBox={viewBox}
      role="img"
      className={className ?? "openings-sunburst"}
    >
      <g>
        {visible.map((d) => {
          const col = colorOf(d);
          const key = d
            .ancestors()
            .map((a) => a.data.san)
            .join(" ");
          return (
            <path
              key={key}
              d={arcGen(d) ?? undefined}
              fill={col.toString()}
              stroke={line.stroke}
              strokeWidth={line.width}
              paintOrder={line.paintOrder}
            />
          );
        })}
        {nameLabels.map(({ d, text, fontSize, path }, i) => {
          const id = `${idPrefix}-name-${i}`;
          return (
            <g key={id}>
              <path id={id} d={path} fill="none" />
              <text
                fontSize={fontSize}
                fontFamily="sans-serif"
                letterSpacing={NAME_LETTER_SPACING}
                fill={colorOf(d).darker(0.7).toString()}
                opacity={0.7}
                dominantBaseline="central"
                textAnchor="middle"
              >
                <textPath href={`#${id}`} startOffset="50%">
                  {text}
                </textPath>
              </text>
            </g>
          );
        })}
        {labels.map((d) => {
          const key = d
            .ancestors()
            .map((a) => a.data.san)
            .join(" ");
          const fontSize = knobs.sanSize ?? (knobs.width < 600 ? 10 : 12);
          const fill = knobs.sanColor ?? "white";
          // Oct 2015 placed the name at arc.centroid, horizontal, no dy.
          if (sample) {
            const r0 = rScale(d.y0);
            const r1 = rScale(Math.max(d.y0, d.y1 - knobs.ringGap));
            const r = (r0 + r1) / 2;
            const a = (d.x0 + d.x1) / 2 - Math.PI / 2;
            return (
              <text
                key={key}
                textAnchor="middle"
                fontSize={fontSize}
                fontFamily="sans-serif"
                fill={fill}
                transform={`translate(${Math.cos(a) * r},${Math.sin(a) * r})`}
              >
                {d.data.san}
              </text>
            );
          }
          const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
          const y = rScale((d.y0 + d.y1) / 2);
          const rotation = x - 90;
          return (
            <text
              key={key}
              textAnchor="middle"
              fontSize={fontSize}
              fontFamily="sans-serif"
              fill={fill}
              transform={`rotate(${rotation}) translate(${y},0) rotate(${-rotation})`}
              dy="0.35em"
            >
              {d.data.san}
            </text>
          );
        })}
      </g>
      {poster && (
        <PosterLabels
          nodes={visible}
          width={width}
          labels={labelKind}
          r={rScale}
          ringGap={knobs.ringGap}
          colorOf={colorOf}
          tintOf={(d) =>
            knobs.palette === "poster"
              ? posterTint(firstParent(d).data.san, posterExtraIndex)
              : colorOf(firstParent(d)).brighter(0.5).toString()
          }
          nameOf={openingName}
          idPrefix={idPrefix}
        />
      )}
      {knobs.center === "board-disk" && holeR > 0 && <Board size={holeR * 1.6} />}
      {highlight && (
        <rect
          x={highlight.x}
          y={highlight.y}
          width={highlight.size}
          height={highlight.size}
          fill="none"
          stroke="#fff"
          strokeWidth={1.5}
          strokeDasharray="4 3"
          pointerEvents="none"
        />
      )}
    </svg>
  );
}

/** Empty board in the hole, chessboard.js colors. No pieces: the figures are static. */
function Board({ size }: { size: number }) {
  const sq = size / 8;
  return (
    <g transform={`translate(${-size / 2},${-size / 2})`} pointerEvents="none">
      {Array.from({ length: 64 }, (_, i) => {
        const row = Math.floor(i / 8);
        const col = i % 8;
        return (
          <rect
            key={i}
            x={col * sq}
            y={row * sq}
            width={sq}
            height={sq}
            fill={(row + col) % 2 ? "#b58863" : "#f0d9b5"}
          />
        );
      })}
    </g>
  );
}
