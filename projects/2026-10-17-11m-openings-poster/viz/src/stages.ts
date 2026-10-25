export type Center = "none" | "board-disk" | "void";
export type RadiusKind = "sqrt" | "linear" | "square";
/** category20-move: every move its own color (the d3 sequences-sunburst example), not its first move's. */
export type Palette = "category10" | "tableau10" | "poster" | "category20-move";
/** flat: one color per family; alternate: rings alternate lighter/darker (odd ply = White, even = Black). */
export type Shading = "flat" | "alternate";
export type SumKind = "leaves" | "every-node";
export type Labels = "san" | "names" | "both";
export type Stroke = "none" | "white" | "black-hairline";

export type StageId =
  | "library-2015"
  | "blog-2016"
  | "ply"
  | "prune"
  | "radius-linear"
  | "separation"
  | "palette"
  | "shading"
  | "chessviz-tools";

export type Knobs = {
  width: number;
  hole: number;
  radius: RadiusKind;
  palette: Palette;
  sum: SumKind;
  sort: boolean;
  /** Sort deepest subtree first, then by size (2021 rewrite). false = size only (d3 v3 default). Default true. */
  sortHeight?: boolean;
  padAngle: number;
  ringGap: number;
  stroke: Stroke;
  /** Defaults: white 0.5, black-hairline 0.1. */
  strokeWidth?: number;
  depthFade: number;
  /** Default "alternate". */
  shading?: Shading;
  /** hsl brighter() applied to the base color before shading. Default 0.2 (2021 rewrite); the 2015 library used 0. */
  brighten?: number;
  nodeThreshold: number;
  thresholdUnit: "radian" | "fraction";
  showSan: boolean;
  /** Which labels to draw; default "san". "both" = names where an opening begins, SAN elsewhere. */
  labels?: Labels;
  /** Poster-style labels: radial moves, names along arcs, callouts outside the ring. */
  posterLabels?: boolean;
  sanThreshold: number;
  /** SAN label fill and size. Defaults: white; 10 below 600 wide, else 12. */
  sanColor?: string;
  sanSize?: number;
  center: Center;
  /** light: transparent (blog page), dark: #000. */
  background: "light" | "dark";
  maxPly: number;
  pruneFraction: number;
};

export type StageControl = "ply" | "prune" | "hole";

/** One option of a stage's segmented toggle; knobs are merged over the stage's own. */
export type StageMode = {
  id: string;
  label: string;
  note: string;
  knobs: Partial<Knobs>;
  /** Which tree to draw. Default is the 2m chess openings tree. */
  data?: "sample-2015";
};

/** One drawing in a row of small multiples; knobs merged over the stage's own. */
export type Panel = {
  id: string;
  label: string;
  note: string;
  knobs: Partial<Knobs>;
  /** Square window in viewBox units, origin at the center. */
  crop?: { x: number; y: number; size: number };
};

/** Zoomed view of the same drawing, centered on a point in the sunburst. */
export type Inset = {
  /** d3 arc convention: 0 at 12 o'clock, clockwise, radians. */
  angle: number;
  /** Center distance from the middle, as a fraction of width / 2. */
  radius: number;
  /** Side of the square window, in viewBox units (width is the full drawing). */
  size: number;
};

export const separationModes: StageMode[] = [
  {
    id: "white",
    label: "white lines · 2016",
    note: "chess-dataviz v3 as published: 0.5px white stroke, no padAngle, rings touch.",
    knobs: { stroke: "white", strokeWidth: 0.5, padAngle: 0, ringGap: 0 },
  },
  {
    id: "gaps",
    label: "gaps · 2021",
    note: "Feb 2021 rewrite: padAngle 0.005 and a 1px ring gap, no stroke.",
    knobs: { stroke: "none", strokeWidth: undefined, padAngle: 0.005, ringGap: 1 },
  },
  {
    id: "hairline",
    label: "dark hairline · poster",
    note: "Later versions and the poster: 0.1px black stroke painted under the fill, no padAngle.",
    knobs: { stroke: "black-hairline", strokeWidth: 0.1, padAngle: 0, ringGap: 1 },
  },
];

const blogSeparation: Partial<Knobs> = {
  stroke: "none",
  strokeWidth: undefined,
  padAngle: 0.005,
  ringGap: 1,
  depthFade: 0.15,
  background: "light",
};

export const labelModes: StageMode[] = [
  {
    id: "san",
    label: "moves",
    note: "Moves only, set along the radius.",
    knobs: { labels: "san" },
  },
  {
    id: "names",
    label: "names + callouts",
    note: "Opening names along the arcs where a named line begins; smaller named lines are called out around the edge.",
    knobs: { labels: "names" },
  },
  {
    id: "both",
    label: "both",
    note: "Names, callouts and moves together, as on the poster.",
    knobs: { labels: "both" },
  },
];

export const paletteModes: StageMode[] = [
  {
    id: "category10",
    label: "category10 · 2015",
    note: "d3 category10 by first move, as in chess-dataviz.",
    knobs: { ...blogSeparation, palette: "category10" },
  },
  {
    id: "tableau10",
    label: "tableau10 · later",
    note: "Tableau10 by first move, as in later versions.",
    knobs: { ...blogSeparation, palette: "tableau10" },
  },
  {
    id: "poster",
    label: "poster",
    note: "Cool families sampled from the poster, with its dark hairlines.",
    knobs: {
      palette: "poster",
      stroke: "black-hairline",
      strokeWidth: 0.1,
      padAngle: 0,
      ringGap: 1,
      depthFade: 0.3,
    },
  },
];

/**
 * chess-dataviz Openings.js at three commits. Every mode sets every knob that
 * differs between them, so switching back and forth is lossless.
 */
export const libraryModes: StageMode[] = [
  {
    id: "2015-10",
    label: "Oct 2015",
    note:
      "Oct 17, 2015. first commit: copy-pasted d3 \"sequences sunburst\" example. It still drew the example's sample data, so that's what you see here. A color per move (d3.category20), no shading, biggest arcs first, 1px white lines. Ugly as sin.",
    data: "sample-2015",
    knobs: {
      width: 550,
      palette: "category20-move",
      shading: "flat",
      brighten: 0,
      depthFade: 0,
      stroke: "white",
      strokeWidth: 1,
      sort: true,
      sortHeight: false,
      nodeThreshold: 0.005,
      thresholdUnit: "radian",
      sanThreshold: 0.349,
      sanColor: "#000",
      sanSize: 10,
      center: "none",
    },
  },
  {
    id: "2015-11",
    label: "Nov 2015",
    note:
      "Nov 1, 2015. First chess version: color by first move (d3.category10), rings alternate lighter and darker and fade outward, 0.5px white lines, move labels on more arcs.",
    knobs: {
      width: 550,
      palette: "category10",
      shading: "alternate",
      brighten: 0,
      depthFade: 0.2,
      stroke: "white",
      strokeWidth: 0.5,
      sort: true,
      sortHeight: false,
      nodeThreshold: 0.01,
      thresholdUnit: "radian",
      sanThreshold: 0.1,
      sanColor: "#fff",
      sanSize: 10,
      center: "none",
    },
  },
  {
    id: "2015-12",
    label: "Dec 2015 · 1.0",
    note:
      "Dec 21, 2015. Version 1.0, used by the 2016 post: no sorting, so moves keep the tree's order; cut-offs as fractions of the circle, so many more slivers survive. Chessboard over the hole.",
    knobs: {
      width: 700,
      palette: "category10",
      shading: "alternate",
      brighten: 0,
      depthFade: 0.2,
      stroke: "white",
      strokeWidth: 0.5,
      sort: false,
      sortHeight: false,
      nodeThreshold: 1e-4,
      thresholdUnit: "fraction",
      sanThreshold: 0.04,
      sanColor: "#fff",
      sanSize: 12,
      center: "board-disk",
    },
  },
];

/** Shading, all in the poster palette with its hairline. */
export const shadingPanels: Panel[] = [
  {
    id: "flat",
    label: "flat",
    note: "One color per first move. Rings only show at the hairlines.",
    knobs: { shading: "flat", depthFade: 0 },
  },
  {
    id: "alternate",
    label: "alternating",
    note: "Odd rings (White's moves) lighter, even rings (Black's) darker.",
    knobs: { shading: "alternate", depthFade: 0 },
  },
  {
    id: "poster",
    label: "alternating, darker outward",
    note: "Same, and each full move a step darker: the poster.",
    knobs: { shading: "alternate", depthFade: 0.3 },
  },
];

export type Stage = {
  id: StageId;
  label: string;
  year: string;
  caption: string;
  blurb: string;
  knobs: Knobs;
  controls?: StageControl[];
  /** Segmented toggle; the first mode is selected unless defaultMode is set. */
  modes?: StageMode[];
  /** Must match the stage's own knobs; used only to highlight the right button. */
  defaultMode?: string;
  inset?: Inset;
  /** Small multiples instead of one drawing. */
  panels?: Panel[];
};

const blog2016: Knobs = {
  width: 700,
  hole: 20,
  radius: "sqrt",
  palette: "category10",
  sum: "leaves",
  sort: true,
  padAngle: 0.005,
  ringGap: 1,
  stroke: "none",
  depthFade: 0.15,
  nodeThreshold: 0,
  thresholdUnit: "radian",
  showSan: true,
  sanThreshold: 0.1,
  center: "board-disk",
  background: "light",
  maxPly: 10,
  pruneFraction: 0,
};

export const stages: Stage[] = [
  {
    id: "library-2015",
    label: "0 · library",
    year: "2015",
    caption: "2015 — chess-dataviz, three commits",
    blurb: "The library's openings chart at three points in its history, each drawn with that commit's settings. The first one still had the example's sample data; the other two draw the same chess dataset.",
    knobs: {
      width: 550,
      hole: 0,
      radius: "sqrt",
      palette: "category20-move",
      sum: "leaves",
      sort: true,
      sortHeight: false,
      padAngle: 0,
      ringGap: 0,
      stroke: "white",
      strokeWidth: 1,
      depthFade: 0,
      shading: "flat",
      brighten: 0,
      nodeThreshold: 0.005,
      thresholdUnit: "radian",
      showSan: true,
      sanThreshold: 0.349,
      sanColor: "#000",
      sanSize: 10,
      center: "none",
      background: "light",
      maxPly: 10,
      pruneFraction: 0,
    },
    modes: libraryModes,
  },
  {
    id: "blog-2016",
    label: "1 · blog",
    year: "2016",
    caption: "2016 post as published / 2021 rewrite",
    blurb: "The same quarter of the circle, top right, from the same 2m tree.",
    knobs: { ...blog2016 },
    panels: [
      {
        id: "published",
        label: "2016, as published",
        note: "chess-dataviz 1.0.0: 0.5px white lines, moves in tree order, a chessboard over the hole.",
        knobs: { ...libraryModes[2].knobs, hole: 0, padAngle: 0, ringGap: 0 },
        crop: { x: -30, y: -350, size: 380 },
      },
      {
        id: "rewrite",
        label: "2021 rewrite",
        note: "Small gaps instead of lines, deepest lines first, a softer fade, slightly better colors.",
        knobs: {},
        crop: { x: -30, y: -350, size: 380 },
      },
    ],
  },
  {
    id: "ply",
    label: "2 · ply",
    year: "knob",
    caption: "Ply depth",
    blurb: "Same drawing as 2016. 4 half-moves is a pie. 10 is a city.",
    knobs: { ...blog2016, maxPly: 4 },
    controls: ["ply"],
  },
  {
    id: "prune",
    label: "3 · prune",
    year: "knob",
    caption: "Prune threshold",
    blurb: "Further prune on the already-cut 2m tree. 0.5% is the later default.",
    knobs: { ...blog2016, pruneFraction: 0.005 },
    controls: ["prune"],
  },
  {
    id: "radius-linear",
    label: "4 · linear r",
    year: "knob",
    caption: "Radius scale",
    blurb: "Same tree, same angles. Only the mapping from ring to radius changes.",
    knobs: { ...blog2016, showSan: false, center: "none" },
    panels: [
      {
        id: "linear",
        label: "linear",
        note: "Every ring equally thick, so the outer rings take most of the ink.",
        knobs: { radius: "linear" },
      },
      {
        id: "sqrt",
        label: "square root",
        note: "Every ring the same area; rings thin out toward the edge.",
        knobs: { radius: "sqrt" },
      },
      {
        id: "square",
        label: "square",
        note: "The mirror of square root: every ring thicker than the one inside it. If we wanted to highlight the leaves, this could be a better option.",
        knobs: { radius: "square" },
      },
    ],
  },
  {
    id: "separation",
    label: "4b · separation",
    year: "knob",
    caption: "Gaps and lines between slices",
    blurb: "Same 2m tree and 2016 knobs. Only the separation changes. The inset is the outer edge, magnified.",
    knobs: { ...blog2016, ...separationModes[0].knobs },
    modes: separationModes,
    inset: { angle: 1.4, radius: 0.72, size: 80 },
  },
  {
    id: "palette",
    label: "4c · palette",
    year: "knob",
    caption: "Color",
    blurb: "Same 2m tree. Color carries the first move; rings alternate light and dark so the steps stay visible.",
    knobs: { ...blog2016 },
    modes: paletteModes,
  },
  {
    id: "shading",
    label: "4d · shading",
    year: "knob",
    caption: "Shading the rings",
    blurb: "Poster palette on the 2m tree. Odd rings are White's moves, even rings are Black's.",
    knobs: {
      ...blog2016,
      palette: "poster",
      stroke: "black-hairline",
      strokeWidth: 0.1,
      padAngle: 0,
      ringGap: 1,
      depthFade: 0.3,
      showSan: false,
      center: "none",
    },
    panels: shadingPanels,
  },
  {
    id: "chessviz-tools",
    label: "5 · labels",
    year: "poster",
    caption: "Labels, poster style",
    blurb: "Labels in the style of the poster, drawn on the 2m tree. The poster's callouts were placed by hand; these are placed by a simple rule.",
    knobs: {
      width: 900,
      hole: 20,
      radius: "sqrt",
      palette: "poster",
      sum: "leaves",
      sort: true,
      padAngle: 0,
      ringGap: 1,
      stroke: "black-hairline",
      strokeWidth: 0.4,
      depthFade: 0.3,
      nodeThreshold: 0.002,
      thresholdUnit: "radian",
      showSan: true,
      posterLabels: true,
      labels: "both",
      sanThreshold: 0,
      center: "none",
      background: "light",
      maxPly: 10,
      pruneFraction: 0,
    },
    modes: labelModes,
    defaultMode: "both",
  },
];
