export type OpeningNode = {
  san: string;
  count: number;
  children: OpeningNode[];
};

export function normalize(raw: unknown): OpeningNode {
  const n = raw as {
    san?: string;
    San?: string;
    count?: number;
    Count?: number;
    children?: unknown[];
    Children?: unknown[];
  };
  return {
    san: n.san ?? n.San ?? "start",
    count: n.count ?? n.Count ?? 0,
    children: (n.children ?? n.Children ?? []).map(normalize),
  };
}

/** Keep nodes whose depth (from start = 0) is <= maxPly. */
export function truncatePly(node: OpeningNode, maxPly: number, depth = 0): OpeningNode {
  if (depth >= maxPly) {
    return { ...node, children: [] };
  }
  return {
    ...node,
    children: node.children.map((c) => truncatePly(c, maxPly, depth + 1)),
  };
}

/** Drop children below a count floor. Does not restore already-pruned mass. */
export function pruneByCount(node: OpeningNode, threshold: number): OpeningNode {
  return {
    ...node,
    children: node.children
      .filter((c) => c.count >= threshold)
      .map((c) => pruneByCount(c, threshold)),
  };
}

export function prepareTree(
  source: OpeningNode,
  knobs: { maxPly: number; pruneFraction: number }
): OpeningNode {
  const cut = truncatePly(source, knobs.maxPly);
  const floor = knobs.pruneFraction > 0 ? source.count * knobs.pruneFraction : 0;
  return floor > 0 ? pruneByCount(cut, floor) : cut;
}

export function treeStats(node: OpeningNode, depth = 0): {
  nodes: number;
  leaves: number;
  maxDepth: number;
} {
  if (!node.children.length) {
    return { nodes: 1, leaves: 1, maxDepth: depth };
  }
  return node.children.reduce(
    (acc, child) => {
      const s = treeStats(child, depth + 1);
      return {
        nodes: acc.nodes + s.nodes,
        leaves: acc.leaves + s.leaves,
        maxDepth: Math.max(acc.maxDepth, s.maxDepth),
      };
    },
    { nodes: 1, leaves: 0, maxDepth: depth }
  );
}
