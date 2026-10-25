import raw from "./data/openings-2m.json";
import sampleRaw from "./data/sample-2015.json";
import { type OpeningNode, normalize } from "./tree";

export const sourceTree = normalize(raw);

/** Visit-sequences sample from the Oct 2015 copy of the d3 sunburst example. */
type SampleNode = {
  name: string;
  size?: number;
  children?: SampleNode[];
};

function fromSample(n: SampleNode): OpeningNode {
  const children = (n.children ?? []).map(fromSample);
  return {
    san: n.name,
    count: n.size ?? children.reduce((sum, c) => sum + c.count, 0),
    children,
  };
}

export const sample2015Tree = fromSample(sampleRaw as SampleNode);
