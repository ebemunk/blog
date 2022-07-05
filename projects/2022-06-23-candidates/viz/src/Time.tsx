import { max, scaleBand, scaleLinear, schemeTableau10, sum } from "d3";
import styled from "styled-components";
import { Axis, ResponsiveSvg, usePlotContext } from "vizlib";
import { clockToSeconds } from "../../collect/test";
import { standings } from "./data";

export default function Time() {
  return (
    <>
      <ResponsiveSvg
        aspectRatio={1.6}
        maxWidth={1200}
        margin={{
          top: 0,
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

export const times = standings.map(([name, result]) => {
  const clocks = result.games.map((gameResult) => {
    let lastClk = NaN;
    const time = gameResult.game.moves
      .filter((move, i) => {
        return gameResult.isWhite ? i % 2 === 0 : i % 2 === 1;
      })
      .map((move) => {
        lastClk = move?.commentDiag?.clk ?? lastClk;
        return clockToSeconds(lastClk);
      });
    return time;
  });
  return [name, clocks] as const;
});

console.log("times", times);

console.log(
  "totmoves",
  times.map(([name, clocks]) => [name, sum(clocks, (d) => d.length)])
);

const NoDomain = styled(Axis)`
  .domain {
    opacity: 0;
  }
`;

function Viz() {
  const ctx = usePlotContext();

  const playerScale = scaleBand(
    times.map(([name]) => name),
    [0, ctx.chartHeight]
  ).padding(0.4);

  return (
    <>
      <NoDomain scale={playerScale} orientation="left" tickSizeInner={0} />
      {times.map(([name, clocks], i) => {
        const yScale = scaleLinear(
          [0, max(clocks.flat())],
          [playerScale.bandwidth(), 0]
        );
        const xScale = scaleBand(
          clocks.flat().map((d, i) => i),
          [0, ctx.chartWidth]
        );
        const tickValues = [0];
        let last = 0;
        for (const game of clocks) {
          last += game.length;
          tickValues.push(last);
        }
        tickValues.pop();

        return (
          <g key={name} transform={`translate(0,${playerScale(name)})`}>
            <Axis
              scale={xScale}
              orientation="bottom"
              transform={`translate(0,${playerScale.bandwidth()})`}
              tickFormat={(d, i) => `R${i + 1}`}
              tickValues={tickValues}
            />
            <Axis scale={yScale} orientation="left" tickValues={[]} />
            {clocks.flat().map((time, j) => (
              <rect
                key={j}
                x={xScale(j)}
                y={yScale(time)}
                width={xScale.bandwidth()}
                height={yScale(0) - yScale(time)}
                fill={schemeTableau10[0]}
              />
            ))}
            <Axis
              scale={xScale}
              orientation="bottom"
              transform={`translate(0,${playerScale.bandwidth()})`}
              tickFormat={() => ""}
              tickValues={tickValues}
              tickSizeInner={-playerScale.bandwidth()}
            />
          </g>
        );
      })}
    </>
  );
}
