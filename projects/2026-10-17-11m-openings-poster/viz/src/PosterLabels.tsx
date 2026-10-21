import type { HierarchyRectangularNode, HSLColor } from "d3";
import type { Labels } from "./stages";
import type { OpeningNode } from "./tree";

type Node = HierarchyRectangularNode<OpeningNode>;

type Props = {
  nodes: Node[];
  width: number;
  labels: Labels;
  /** Ring radius in viewBox units for a partition y. */
  r: (y: number) => number;
  ringGap: number;
  colorOf: (d: Node) => HSLColor;
  /** Light color of the node's first-move family, for callout text. */
  tintOf: (d: Node) => string;
  /** Opening name where a named line begins, otherwise undefined. */
  nameOf: (d: Node) => string | undefined;
  idPrefix: string;
};

/** Uppercase sans advance per character, in em (letter-spacing included). */
const UPPER_EM = 0.68;
/** Mixed-case SAN advance per character, in em. */
const SAN_EM = 0.6;

const SAN_SIZE = 11;
const CALLOUT_SIZE = 13;
const CALLOUT_GAP = 14;
/** How many callouts, and the smallest share of all games one may stand for. */
const CALLOUT_MAX = 20;
const CALLOUT_MIN_SHARE = 0.002;

/** Extra room the callouts need outside the drawing, per side. */
export const CALLOUT_MARGIN = CALLOUT_GAP + CALLOUT_SIZE * 1.6;

const deg = (a: number) => (a * 180) / Math.PI;

/** Centerline arc for a textPath, reversed on the bottom half so text reads upright. */
function textArc(r: number, a0: number, a1: number) {
  const mid = (a0 + a1) / 2;
  const flip = mid > Math.PI / 2 && mid < (3 * Math.PI) / 2;
  const [from, to] = flip ? [a1, a0] : [a0, a1];
  const large = a1 - a0 > Math.PI ? 1 : 0;
  const p = (a: number) => `${r * Math.sin(a)},${-r * Math.cos(a)}`;
  return `M${p(from)}A${r},${r} 0 ${large} ${flip ? 0 : 1} ${p(to)}`;
}

/** Radial text at angle a, radius r: reads outward on the right half, inward on the left. */
function radialTransform(a: number, r: number) {
  const flip = a > Math.PI;
  return `rotate(${deg(a) - 90}) translate(${r},0)${flip ? " rotate(180)" : ""}`;
}

/** Tangential text at angle a, radius r: reads clockwise on top, flipped on the bottom half. */
function tangentTransform(a: number, r: number) {
  const flip = a > Math.PI / 2 && a < (3 * Math.PI) / 2;
  const x = r * Math.sin(a);
  const y = -r * Math.cos(a);
  return `translate(${x},${y}) rotate(${deg(a) - (flip ? 180 : 0)})`;
}

/**
 * Spread label angles apart so no two overlap. Each label wants to sit at its
 * node's mid-angle; neighbors that collide are pushed apart symmetrically.
 * Fixed iteration count and sorted input: the same result on server and client.
 */
function relax(items: { want: number; half: number }[]) {
  const a = items.map((i) => i.want);
  for (let iter = 0; iter < 300; iter++) {
    let moved = false;
    for (let i = 0; i + 1 < a.length; i++) {
      const need = items[i].half + items[i + 1].half;
      const gap = a[i + 1] - a[i];
      if (gap < need) {
        const push = (need - gap) / 2;
        a[i] -= push;
        a[i + 1] += push;
        moved = true;
      }
    }
    // The circle wraps: the last label also neighbors the first.
    const n = a.length;
    if (n > 1) {
      const need = items[n - 1].half + items[0].half;
      const gap = a[0] + 2 * Math.PI - a[n - 1];
      if (gap < need) {
        const push = (need - gap) / 2;
        a[n - 1] -= push;
        a[0] += push;
        moved = true;
      }
    }
    // Pull gently back toward the wanted angle so clusters stay centered.
    for (let i = 0; i < a.length; i++) a[i] += (items[i].want - a[i]) * 0.02;
    if (!moved) break;
  }
  return a;
}

/** Labels in the style of the poster: radial moves, names along big arcs, callouts outside. */
export function PosterLabels({
  nodes,
  width,
  labels,
  r,
  ringGap,
  colorOf,
  tintOf,
  nameOf,
  idPrefix,
}: Props) {
  const ring = (d: Node) => {
    const r0 = r(d.y0);
    const r1 = r(Math.max(d.y0, d.y1 - ringGap));
    return { r0, r1, rMid: (r0 + r1) / 2 };
  };

  // Names inside arcs big enough to hold them, minus room for the move at the start.
  const showNames = labels !== "san";
  const showSan = labels !== "names";
  const sanRoom = showSan ? SAN_SIZE * 1.8 : 0;
  const starts = nodes.filter((d) => nameOf(d) && !d.ancestors().slice(1).some((a) => nameOf(a) === nameOf(d)));

  const inArc = showNames
    ? starts.flatMap((d) => {
        const text = shortName(nameOf(d)!);
        const { r0, r1, rMid } = ring(d);
        const length = rMid * (d.x1 - d.x0) - 2 * sanRoom;
        const fit = (0.9 * length) / (text.length * UPPER_EM);
        const fontSize = Math.min(18, 0.5 * (r1 - r0), fit);
        if (fontSize < width / 75) return [];
        return [{ d, text, fontSize, path: textArc(rMid, d.x0, d.x1) }];
      })
    : [];
  const named = new Set(inArc.map((n) => n.d));
  const inArcText = new Set(inArc.map((n) => n.text));

  // Moves: radial, wherever the arc is wide enough for the glyph height and
  // the ring thick enough for the word. Named arcs carry the move at their start.
  const sans = showSan
    ? nodes.flatMap((d) => {
        const { r0, r1, rMid } = ring(d);
        const along = rMid * (d.x1 - d.x0);
        const across = r1 - r0;
        if (along < SAN_SIZE * 1.15) return [];
        if (across < d.data.san.length * SAN_EM * SAN_SIZE + 6) return [];
        const a = named.has(d) ? d.x0 + (SAN_SIZE * 0.9) / rMid : (d.x0 + d.x1) / 2;
        return [{ d, a, rMid }];
      })
    : [];

  // Callouts: named lines too small for an in-arc name, biggest first.
  const total = nodes.length ? (nodes[0].ancestors().pop()!.value ?? 0) : 0;
  const seen = new Set(inArcText);
  const R = width / 2 + CALLOUT_GAP;
  const picked = showNames
    ? [...starts]
        .filter((d) => !named.has(d) && (d.value ?? 0) >= total * CALLOUT_MIN_SHARE)
        .sort((a, b) => (b.value ?? 0) - (a.value ?? 0) || a.x0 - b.x0)
        .flatMap((d) => {
          const text = shortName(nameOf(d)!);
          if (seen.has(text)) return [];
          seen.add(text);
          return [{ d, text }];
        })
        .slice(0, CALLOUT_MAX)
        .map(({ d, text }) => ({
          d,
          text,
          want: (d.x0 + d.x1) / 2,
          half: (text.length * UPPER_EM * CALLOUT_SIZE) / 2 / R + 0.012,
        }))
        .sort((a, b) => a.want - b.want)
    : [];
  const placed = relax(picked);

  return (
    <g pointerEvents="none">
      {inArc.map(({ d, text, fontSize, path }, i) => {
        const id = `${idPrefix}-pname-${i}`;
        return (
          <g key={id}>
            <path id={id} d={path} fill="none" />
            <text
              fontSize={fontSize}
              fontFamily="'Avenir Next Condensed', 'Arial Narrow', sans-serif"
              fontWeight={500}
              letterSpacing="0.06em"
              fill={colorOf(d).darker(0.55).toString()}
              opacity={0.85}
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
      {sans.map(({ d, a, rMid }) => (
        <text
          key={`san-${keyOf(d)}`}
          transform={radialTransform(a, rMid)}
          fontSize={SAN_SIZE}
          fontFamily="'Gill Sans', 'Avenir Next', sans-serif"
          fill="#f6f3ee"
          opacity={0.85}
          textAnchor="middle"
          dominantBaseline="central"
        >
          {d.data.san}
        </text>
      ))}
      {picked.map(({ d, text }, i) => {
        const a = placed[i];
        const { rMid } = ring(d);
        const mid = (d.x0 + d.x1) / 2;
        const dot = [rMid * Math.sin(mid), -rMid * Math.cos(mid)];
        const end = [(R - 3) * Math.sin(a), -(R - 3) * Math.cos(a)];
        return (
          <g key={`callout-${keyOf(d)}`}>
            <line
              x1={dot[0]}
              y1={dot[1]}
              x2={end[0]}
              y2={end[1]}
              stroke="#888"
              strokeOpacity={0.6}
              strokeWidth={0.6}
            />
            <circle cx={dot[0]} cy={dot[1]} r={1.6} fill={tintOf(d)} />
            <text
              transform={tangentTransform(a, R + CALLOUT_SIZE * 0.6)}
              fontSize={CALLOUT_SIZE}
              fontFamily="'Avenir Next Condensed', 'Arial Narrow', sans-serif"
              letterSpacing="0.04em"
              fill={tintOf(d)}
              opacity={0.9}
              textAnchor="middle"
              dominantBaseline="central"
            >
              {text}
            </text>
          </g>
        );
      })}
    </g>
  );
}

function keyOf(d: Node) {
  return d
    .ancestors()
    .map((a) => a.data.san)
    .join(" ");
}

/** Same shortening as chessviz.tools OpeningNameText: drop "Opening", keep the part after ": ". */
function shortName(name: string) {
  let short = name.replace("Opening", "").trim();
  const idx = short.indexOf(": ");
  if (idx >= 0) short = short.slice(idx + 2);
  return short.toUpperCase();
}
