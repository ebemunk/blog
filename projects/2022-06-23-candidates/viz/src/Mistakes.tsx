import { max, scaleBand, scaleLinear } from "d3";
import { Axis, ResponsiveSvg, usePlotContext } from "vizlib";
import { standings } from "./data";
import data from "./data/mistakes.json";

export default function Mistakes() {
  return (
    <>
      <ResponsiveSvg
        aspectRatio={1.6}
        maxWidth={960}
        margin={{
          top: 30,
          left: 110,
          right: 30,
          bottom: 30,
        }}
      >
        <Viz />
      </ResponsiveSvg>
    </>
  );
}

const types = ["inaccuracy", "mistake", "blunder"];

function Viz() {
  const ctx = usePlotContext();

  const xAxis = scaleLinear(
    [
      0,
      max(data.map((d) => max([d[1].inaccuracy, d[1].mistake, d[1].blunder]))),
    ],
    [0, ctx.chartWidth]
  );
  const yAxis = scaleBand(
    standings.map((d) => d[0]),
    [0, ctx.chartHeight]
  ).padding(0.2);
  const y1Axis = scaleBand(types, [0, yAxis.bandwidth()]);

  return (
    <>
      <Axis scale={xAxis} orientation="top" />
      <Axis scale={yAxis} orientation="left" />
      {data.map(([name, { inaccuracy, mistake, blunder }], i) => (
        <g key={i}>
          <rect
            x={0}
            width={xAxis(inaccuracy)}
            y={yAxis(name) + y1Axis("inaccuracy")}
            height={y1Axis.bandwidth()}
            fill="yellow"
          />
          <rect
            x={0}
            width={xAxis(mistake)}
            y={yAxis(name) + y1Axis("mistake")}
            height={y1Axis.bandwidth()}
            fill="orange"
          />
          <rect
            x={0}
            width={xAxis(blunder)}
            y={yAxis(name) + y1Axis("blunder")}
            height={y1Axis.bandwidth()}
            fill="red"
          />
        </g>
      ))}
    </>
  );
}
