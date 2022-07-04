import {
  arc,
  hierarchy,
  hsl,
  partition,
  scaleOrdinal,
  scaleSqrt,
  schemeCategory10,
} from "d3";
import { ResponsiveSvg, usePlotContext } from "vizlib";
import { pgnstats } from "./data";
import Chessboard from "./components/Chessboard";

console.log(pgnstats);

const hRoot = hierarchy(pgnstats.Openings, (d) => d.Children)
  .sum((d) => (!d.Children.length ? d.Count : 0))
  .sort((a, b) => b.height - a.height || b.value - a.value);

export default function Openings({ width = 900 }: { width?: number }) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <ResponsiveSvg
        aspectRatio={1}
        maxWidth={width}
        viewBox={`${-width / 2},${-width / 2} ${width},${width}`}
      >
        <Viz />
      </ResponsiveSvg>
      <div
        style={{
          position: "absolute",
          left: `${width / 2}px`,
          top: `${width / 2}px`,
          transform: "translate(-50%,-50%)",
        }}
      >
        <Chessboard
          fen="r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4"
          width={250}
        />
      </div>
    </div>
  );
}

export function Viz() {
  const ctx = usePlotContext();

  const innerRadius = 20;

  const root = partition().size([
    2 * Math.PI,
    ctx.chartWidth / 2 - innerRadius,
  ])(hRoot);

  const rScale = scaleSqrt()
    .domain([0, ctx.chartWidth / 2])
    .range([0, ctx.chartWidth / 2]);

  const nodes = root.descendants().filter((d) => d.depth);

  const arcG = arc()
    .startAngle((d) => d.x0)
    .endAngle((d) => d.x1)
    .padAngle((d) => Math.min((d.x1 - d.x0) / 2, 0.005))
    .padRadius(ctx.chartWidth / 4)
    .innerRadius((d) => rScale(d.y0))
    .outerRadius((d) => rScale(d.y1 - 1));

  const color = scaleOrdinal(schemeCategory10);

  const getFirstParent = (d) => {
    let n = d;
    while (n.depth > 1) n = n.parent;
    return n;
  };

  return (
    <g>
      {nodes.map((d) => {
        const firstParent = getFirstParent(d);
        const fill = color(firstParent.data.San);

        let col = hsl(fill).brighter(0.2);

        if (d.depth % 2 === 0) {
          col = col.darker(0.5);
        } else {
          col = col.brighter(0.5);
        }

        col = col.darker(d.depth * 0.15);

        return (
          <path
            d={arcG(d)}
            key={d
              .ancestors()
              .map((anc) => anc.data.San)
              .join(" ")}
            fill={col.toString()}
            stroke="white"
            strokeWidth={
              d.depth === 6 &&
              d.data.San === "Nf6" &&
              d.ancestors()[1].data.San === "Bb5"
                ? 2
                : 0
            }
          />
        );
      })}
      {root
        .descendants()
        .filter((d) => d.depth && d.x1 - d.x0 > 0.1)
        .map((d) => {
          const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
          const y = rScale((d.y0 + d.y1) / 2);
          const rotation = x - 90;
          const transform = `rotate(${rotation}) translate(${y},0) rotate(${-rotation})`;
          // const moves = d
          //   .ancestors()
          //   .reverse()
          //   .filter((anc) => anc.data.San !== "start")
          //   .map((anc, i) => {
          //     if (i % 2 === 0) {
          //       return `${i / 2 + 1}. ${anc.data.San}`;
          //     } else {
          //       return anc.data.San;
          //     }
          //   })
          //   .join(" ");
          // const found = eco.find((e) => e.moves === moves);
          // if (found) {
          //   console.log(moves, found);
          // }
          return (
            <text
              key={d
                .ancestors()
                .map((anc) => anc.data.San)
                .join(" ")}
              textAnchor="middle"
              fontSize={12}
              fontFamily="sans-serif"
              fill="white"
              transform={transform}
              dy={"0.35em"}
            >
              {d.data.San}
            </text>
          );
        })}
    </g>
  );
}
