import {
  curveMonotoneX,
  line,
  range,
  scaleOrdinal,
  scalePoint,
  schemeTableau10,
} from "d3";
import { useMemo } from "react";
import styled from "styled-components";
import { Axis, ResponsiveSvg, usePlotContext } from "vizlib";
import { standings } from "./data";

const roundLen = standings[0][1].games.length;
const rounds: { name: string; rank: number }[][] = [];
for (let i = 0; i < roundLen; i++) {
  const state = standings
    .map(([name, result]) => ({
      name,
      points: result.games[i].points,
      sb: result.games[i].sb,
    }))
    .slice()
    .sort((a, b) => {
      if (a.points === b.points) return b.sb - a.sb;
      return b.points - a.points;
    });
  rounds.push(
    state.map((s, i) => ({
      name: s.name,
      rank: i,
    }))
  );
}

// https://fide.com/news/1716#:~:text=These%20are%20the%20starting%20numbers%3A%C2%A0
const DRAWING_OF_LOTS = [
  "Jan-Krzysztof Duda",
  "Ding Liren",
  "Fabiano Caruana",
  "Teimour Radjabov",
  "Alireza Firouzja",
  "Hikaru Nakamura",
  "Ian Nepomniachtchi",
  "Richard Rapport",
];

const players = new Map<string, number[]>();
for (let [i, player] of DRAWING_OF_LOTS.entries()) {
  players.set(player, [i]);
}
for (let round of rounds) {
  for (let { name, rank } of round) {
    if (!players.has(name)) players.set(name, []);
    players.get(name)!.push(rank);
  }
}

console.log({ rounds, players });

export default function Bump() {
  return (
    <>
      <div>
        <ResponsiveSvg
          aspectRatio={2}
          maxWidth={960}
          margin={{
            left: 110,
            bottom: 30,
            right: 120,
            top: 30,
          }}
        >
          <Viz />
        </ResponsiveSvg>
      </div>
    </>
  );
}

const VizG = styled.g`
  .domain {
    display: none;
  }
`;

function Viz() {
  const ctx = usePlotContext();

  const yScale = useMemo(() => {
    return scalePoint(range(8), [0, ctx.chartHeight]);
  }, [ctx.chartHeight]);

  const xScale = useMemo(() => {
    return scalePoint(range(roundLen + 1), [0, ctx.chartWidth]);
  }, [ctx.chartWidth]);

  const colorScale = useMemo(() => {
    return scaleOrdinal(
      standings.map(([name]) => name),
      schemeTableau10
    );
  }, []);

  return (
    <VizG>
      <Axis
        orientation="left"
        scale={yScale}
        tickFormat={(d) => DRAWING_OF_LOTS[d]}
        tickPadding={10}
        tickSizeInner={0}
      />
      <Axis
        orientation="right"
        scale={yScale}
        transform={`translate(${ctx.chartWidth},0)`}
        tickPadding={10}
        tickFormat={(d) =>
          `#${d + 1} ${
            rounds[rounds.length - 1].find((r) => r.rank === d)!.name
          }`
        }
        tickSizeInner={0}
      />
      <Axis
        orientation="top"
        scale={xScale}
        // transform={`translate(0,${ctx.chartHeight})`}
        tickPadding={20}
        tickFormat={(d) => (d === 0 ? "Drawing of lots" : `Round ${d}`)}
        tickSizeInner={0}
      />
      <Axis
        orientation="bottom"
        scale={xScale}
        transform={`translate(0,${ctx.chartHeight})`}
        ticks={10}
        tickSizeInner={-ctx.chartHeight}
        tickFormat={(d) => ""}
        opacity={0.5}
      />
      {Array.from(players).map(([name, ranks]) => (
        <g key={name}>
          <title>{name}</title>
          <path
            d={
              line(
                (d) => xScale(d[0])!,
                (d) => yScale(d[1])!
              ).curve(curveMonotoneX)(ranks.map((s, i) => [i, s]))!
            }
            fill="none"
            stroke={colorScale(name)}
            strokeWidth={10}
            strokeLinecap="round"
          />
          {/* {ranks.map((s, i) => (
            <circle
              key={i}
              cx={xScale(i)}
              cy={yScale(s)}
              r={5}
              fill={colorScale(name)}
            />
          ))} */}
        </g>
      ))}
    </VizG>
  );
}
