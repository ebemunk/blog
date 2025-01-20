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
  bandwidth?: () => number;
}

interface AxisProps {
  type: "left" | "bottom";
  scale: Scale;
  transform?: string;
  tickFormat?: (value: number) => string;
  tickCount?: number;
}

export function Axis({ type, scale, transform = "", tickFormat, tickCount }: AxisProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const axis = type === "left" ? axisLeft(scale as any) : axisBottom(scale as any);
    if (tickFormat) {
      axis.tickFormat(tickFormat);
    }
    
    select(ref.current)
      .call(axis)
      .attr("transform", transform);
  }, [scale, type, transform, tickFormat]);

  // For band scales, we want to center the ticks under each band
  const bandAdjustment = scale.bandwidth ? scale.bandwidth() / 2 : 0;

  return (
    <g ref={ref} className={`axis axis-${type}`} transform={transform}>
      {/* ... path code ... */}
      {scale.ticks ? (
        // For linear scales
        scale.ticks(tickCount).map((d) => (
          <g key={d} transform={`translate(${scale(d)},0)`}>
            <line y2={type === "bottom" ? 6 : -6} stroke="currentColor" />
            <text
              y={type === "bottom" ? 9 : -9}
              dy={type === "bottom" ? "0.71em" : "0.32em"}
              textAnchor="middle"
            >
              {tickFormat ? tickFormat(d) : d}
            </text>
          </g>
        ))
      ) : (
        // For band scales
        scale.domain().map((d) => (
          <g key={d} transform={`translate(${scale(d)! + bandAdjustment},0)`}>
            <line y2={type === "bottom" ? 6 : -6} stroke="currentColor" />
            <text
              y={type === "bottom" ? 9 : -9}
              dy={type === "bottom" ? "0.71em" : "0.32em"}
              textAnchor="middle"
            >
              {tickFormat ? tickFormat(d) : d}
            </text>
          </g>
        ))
      )}
    </g>
  );
} 