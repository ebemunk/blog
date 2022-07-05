import {
  format,
  max,
  mean,
  scaleBand,
  scaleLinear,
  schemeTableau10,
  sum,
} from "d3";
import { Axis, ResponsiveSvg, usePlotContext } from "vizlib";
import { times } from "./Time";

export default function NumMoves() {
  return (
    <>
      <ResponsiveSvg
        aspectRatio={1.6}
        maxWidth={750}
        margin={{
          top: 10,
          left: 30,
          right: 10,
          bottom: 30,
        }}
      >
        <Viz />
      </ResponsiveSvg>
    </>
  );
}

const data = times.map(([name, clocks]) => [
  name,
  sum(clocks, (d) => d.length),
]);

console.log("offf", data);

function Viz() {
  const ctx = usePlotContext();

  const xScale = scaleBand(
    data.map((d) => d[0]),
    [0, ctx.chartWidth]
  ).padding(0.2);
  const yScale = scaleLinear(
    [0, max(data, (d) => d[1])],
    [ctx.chartHeight, 0]
  ).nice();

  const avg = mean(data.slice(1), (d) => d[1]);
  console.log(1 - data[0][1] / avg);

  return (
    <>
      <Axis
        scale={xScale}
        orientation="bottom"
        transform={`translate(0, ${ctx.chartHeight})`}
      />
      <Axis scale={yScale} orientation="left" />
      {data.map(([name, numMoves]) => (
        <rect
          key={name}
          x={xScale(name)}
          width={xScale.bandwidth()}
          y={yScale(numMoves)}
          height={yScale(0) - yScale(numMoves)}
          fill={schemeTableau10[1]}
        />
      ))}
      <g transform={`translate(0,${yScale(avg)})`} color="yellow">
        <line x2={ctx.chartWidth} stroke="currentColor" />
        <text
          fontSize={10}
          dy={-4}
          fill="currentColor"
          textAnchor="end"
          x={ctx.chartWidth}
        >
          Average number of moves of all other players.
        </text>
      </g>
      <g
        color="red"
        transform={`translate(${
          xScale(data[0][0]) + xScale.bandwidth() / 2
        },0)`}
      >
        <line y1={yScale(data[0][1])} y2={yScale(avg)} stroke="currentColor" />
        <text
          y={yScale(data[0][1]) - yScale(avg) / 2}
          fill="currentColor"
          dx={4}
          dy={-10}
          fontSize={12}
          alignmentBaseline="middle"
        >
          {format(".2p")(1 - data[0][1] / avg)}
        </text>
      </g>
    </>
  );
}
