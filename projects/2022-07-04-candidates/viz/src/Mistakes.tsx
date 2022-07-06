import { max, scaleBand, scaleLinear, scaleOrdinal } from "d3";
import { Axis, ResponsiveSvg, usePlotContext } from "vizlib";
import { standings } from "./data";
import data from "./data/mistakes.json";

const types = ["total", "inaccuracy", "mistake", "blunder"];
const color = scaleOrdinal(types, [
  "rgb(144,144,144)",
  "#f1c21b",
  "#ff832b",
  "#da1e28",
]);

export default function Mistakes() {
  return (
    <div style={{ position: "relative" }}>
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
      <div
        style={{
          position: "absolute",
          top: "40px",
          right: "30px",
          fontSize: "10px",
        }}
      >
        {types.map((type) => (
          <div
            key={type}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: color(type),
                width: "10px",
                height: "10px",
                marginRight: "3px",
              }}
            />
            <div>
              {type[0].toUpperCase()}
              {type.slice(1)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Viz() {
  const ctx = usePlotContext();

  const xAxis = scaleLinear(
    [
      0,
      // max(data.map((d) => max([d[1].inaccuracy, d[1].mistake, d[1].blunder]))),
      max(data.map((d) => d[1].inaccuracy + d[1].mistake + d[1].blunder)),
    ],
    [0, ctx.chartWidth]
  ).nice();
  const yAxis = scaleBand(
    standings.map((d) => d[0]),
    [0, ctx.chartHeight]
  ).padding(0.2);
  const y1Axis = scaleBand(types, [0, yAxis.bandwidth()]);

  return (
    <>
      <Axis scale={xAxis} orientation="top" />
      <Axis
        scale={xAxis}
        orientation="top"
        tickSizeInner={-ctx.chartHeight}
        tickFormat={(d) => ""}
        opacity={0.5}
      />
      <Axis scale={yAxis} orientation="left" />
      {data.map(([name, { inaccuracy, mistake, blunder }], i) => (
        <g key={i}>
          <rect
            x={0}
            width={xAxis(inaccuracy + mistake + blunder)}
            y={yAxis(name) + y1Axis("total")}
            height={y1Axis.bandwidth()}
            fill={color("total")}
          />
          <rect
            x={0}
            width={xAxis(inaccuracy)}
            y={yAxis(name) + y1Axis("inaccuracy")}
            height={y1Axis.bandwidth()}
            fill={color("inaccuracy")}
          />
          <rect
            x={0}
            width={xAxis(mistake)}
            y={yAxis(name) + y1Axis("mistake")}
            height={y1Axis.bandwidth()}
            fill={color("mistake")}
          />
          <rect
            x={0}
            width={xAxis(blunder)}
            y={yAxis(name) + y1Axis("blunder")}
            height={y1Axis.bandwidth()}
            fill={color("blunder")}
          />
        </g>
      ))}
    </>
  );
}
