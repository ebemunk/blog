import { useEffect, useRef } from "react";
import { select } from "d3-selection";
import { axisBottom, axisLeft } from "d3-axis";

// Generic type for D3 scales
interface Scale<Range = number> {
  (value: number): Range;
  domain(): number[];
  domain(domain: number[]): this;
  range(): Range[];
  range(range: Range[]): this;
  ticks(count?: number): number[];
  tickFormat(count?: number, specifier?: string): ((d: number) => string);
}

interface AxisProps {
  type: "left" | "bottom";
  scale: Scale;
  transform?: string;
}

export function Axis({ type, scale, transform = "" }: AxisProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const axis = type === "left" ? axisLeft(scale as any) : axisBottom(scale as any);
    select(ref.current)
      .call(axis)
      .attr("transform", transform);
  }, [scale, type, transform]);

  return <g ref={ref} />;
} 