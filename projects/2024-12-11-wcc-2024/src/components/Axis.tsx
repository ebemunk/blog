import { useEffect, useRef } from "react";
import { select } from "d3-selection";
import { axisBottom, axisLeft } from "d3-axis";

interface AxisProps {
  type: "left" | "bottom";
  scale: any; // Temporarily widen the type to fix the error
  transform?: string;
  tickFormat?: (value: any, index: number) => string;
  tickCount?: number;
}

export function Axis({
  type,
  scale,
  transform = "",
  tickFormat,
  tickCount,
}: AxisProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const axis =
      type === "left" ? axisLeft(scale as any) : axisBottom(scale as any);
    if (tickFormat) axis.tickFormat(tickFormat);
    select(ref.current).call(axis).attr("transform", transform);
  }, [scale, type, transform, tickFormat]);

  return <g ref={ref} className={`axis axis-${type}`} transform={transform} />;
}
