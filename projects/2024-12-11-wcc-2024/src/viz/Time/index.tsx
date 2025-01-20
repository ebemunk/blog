import { parse, ParseTree } from "@mliebelt/pgn-parser";
import raw from "../../../collect/wcc2024.json";
import { extent, max, quantile, scaleBand, scaleLinear, median } from "d3";

console.log(raw);

function mean(arr: number[]) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function stdDev(arr: number[], meanVal?: number) {
  const m = meanVal ?? mean(arr);
  return Math.sqrt(
    arr.reduce((a, b) => a + Math.pow(b - m, 2), 0) / arr.length
  );
}

function mad(arr: number[], medianVal?: number) {
  const med = medianVal ?? median(arr) ?? 0;
  const deviations = arr.map((x) => Math.abs(x - med));
  return median(deviations) ?? 0;
}

interface OutlierDetectionResult {
  value: number;
  index: number;
  isOutlier: boolean;
  method: string;
  score: number;
}

function findOutliersMultiMethod(arr: number[]): OutlierDetectionResult[] {
  // Only consider moves that spend time (positive d_time)
  const validTimes = arr.filter((t) => t > 0);
  const sorted = [...validTimes].sort((a, b) => a - b);

  // IQR Method
  const q1 = quantile(sorted, 0.25) ?? 0;
  const q3 = quantile(sorted, 0.75) ?? 0;
  const iqr = q3 - q1;

  // Z-Score Method
  const meanVal = mean(validTimes);
  const sd = stdDev(validTimes, meanVal);

  // Modified Z-Score Method
  const medianVal = median(validTimes) ?? 0;
  const madVal = mad(validTimes, medianVal);

  return arr.map((value, index) => {
    // Ignore time gains
    if (value <= 0) {
      return {
        value,
        index,
        isOutlier: false,
        method: "none",
        score: 0,
      };
    }

    // Calculate scores for each method
    const iqrScore = Math.abs((value - medianVal) / iqr);
    const zScore = Math.abs((value - meanVal) / sd);
    const modifiedZScore =
      madVal === 0 ? 0 : Math.abs((0.6745 * (value - medianVal)) / madVal);

    // Determine which method flags it as an outlier
    const isIQROutlier = value < q1 - 1.5 * iqr || value > q3 + 1.5 * iqr;
    const isZScoreOutlier = zScore > 2;
    const isModifiedZOutlier = modifiedZScore > 3.5;

    // Consensus approach - require at least 2 methods to agree
    const methodsAgree =
      [isIQROutlier, isZScoreOutlier, isModifiedZOutlier].filter((x) => x)
        .length >= 2;

    return {
      value,
      index,
      isOutlier: methodsAgree,
      method: methodsAgree ? "consensus" : "none",
      score: Math.max(iqrScore, zScore, modifiedZScore),
    };
  });
}

function stuff(game: (typeof raw)[number]) {
  let whiteLast = null;
  let blackLast = null;
  const whiteThinkingTimes: number[] = [];
  const blackThinkingTimes: number[] = [];

  // First pass - collect all thinking times
  for (const move of game.treeParts) {
    if (!move.eval) {
      console.log("no eval", move);
      move.eval = { cp: 0 };
    }

    const isWhite = (move.ply - 1) % 2 === 0;

    if (isWhite && whiteLast) {
      move.d_eval = move.eval.cp - whiteLast.eval.cp;
      move.d_time = whiteLast.clock - move.clock;
      whiteThinkingTimes.push(move.d_time);
    } else if (isWhite && !whiteLast) {
      move.d_time = 720000 - move.clock;
      whiteThinkingTimes.push(move.d_time);
    }

    if (!isWhite && blackLast) {
      move.d_eval = -1 * move.eval.cp - -1 * blackLast.eval.cp;
      move.d_time = blackLast.clock - move.clock;
      blackThinkingTimes.push(move.d_time);
    } else if (!isWhite && !blackLast) {
      move.d_time = 720000 - move.clock;
      blackThinkingTimes.push(move.d_time);
    }

    if (move.d_time > 60 * 60 * 1000) {
      console.log("long move", move);
    }

    if (isWhite) {
      whiteLast = move;
    } else {
      blackLast = move;
    }
  }

  // Calculate outliers for each player separately using consensus method
  const whiteOutliers = findOutliersMultiMethod(whiteThinkingTimes);
  const blackOutliers = findOutliersMultiMethod(blackThinkingTimes);

  // Identify big thinks using consensus method
  game.bigThinks = game.treeParts.filter((move, i) => {
    const isWhite = (move.ply - 1) % 2 === 0;
    const playerOutliers = isWhite ? whiteOutliers : blackOutliers;
    const moveIndex = Math.floor(i / 2);
    return playerOutliers[moveIndex]?.isOutlier ?? false;
  });

  // Store scores for visualization if needed
  game.treeParts.forEach((move, i) => {
    const isWhite = (move.ply - 1) % 2 === 0;
    const playerOutliers = isWhite ? whiteOutliers : blackOutliers;
    const moveIndex = Math.floor(i / 2);
    move.outlierScore = playerOutliers[moveIndex]?.score ?? 0;
  });
}

raw.forEach(stuff);

export function Time() {
  return (
    <div>
      {raw.map((game, i) => {
        const pgn = parse(game.pgn, { startRule: "game" }) as ParseTree;
        const white = pgn.tags?.White === "Gukesh D" ? "green" : "blue";
        const black = pgn.tags?.Black === "Ding, Liren" ? "blue" : "green";
        return (
          <div key={i}>
            <h2>
              Game {i + 1}: {pgn.tags?.Result}
            </h2>
            <Chart game={game} whiteColor={white} blackColor={black} />
          </div>
        );
      })}
    </div>
  );
}

export function Chart({
  game,
  whiteColor,
  blackColor,
}: {
  game: (typeof raw)[number];
  whiteColor: string;
  blackColor: string;
}) {
  const width = 800;
  const height = 600;
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };

  const xScale = scaleBand(
    raw
      .slice()
      .sort((a, b) => b.treeParts.length - a.treeParts.length)[0]
      .treeParts.map((d) => d.ply),
    [margin.left, width - margin.right]
  );
  const yScale = scaleLinear([0, 720000], [height - margin.bottom, margin.top]);

  const maxAbsEval = Math.max(
    300,
    max(game.treeParts, (d) => Math.abs(d.eval.cp))
  );
  const evalYScale = scaleLinear(
    [-maxAbsEval, maxAbsEval],
    [height - margin.bottom, margin.top]
  );

  return (
    <svg width={width} height={height}>
      {game.treeParts.map((d, i) => {
        const isWhiteMove = d.ply % 2 === 1;
        const baseColor = isWhiteMove ? whiteColor : blackColor;
        const isBigThink = game.bigThinks.includes(d);

        return (
          <rect
            key={d.ply}
            fill={baseColor}
            x={xScale(d.ply)}
            y={yScale(d.clock)}
            width={xScale.bandwidth()}
            height={yScale(0) - yScale(d.clock)}
            opacity={isBigThink ? 1 : 0.2}
          />
        );
      })}
      {game.treeParts.map((d, i) => (
        <circle
          key={d.ply}
          cx={xScale(d.ply) + xScale.bandwidth() / 2}
          cy={evalYScale(d.eval.cp)}
          r={5}
          fill={d.ply % 2 === 0 ? "black" : "gray"}
        />
      ))}
    </svg>
  );
}

export function ChartSplit({
  game,
  whiteColor,
  blackColor,
}: {
  game: (typeof raw)[number];
  whiteColor: string;
  blackColor: string;
}) {
  const width = 800;
  const height = 600;
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };

  const xScale = scaleBand(
    raw
      .slice()
      .sort((a, b) => b.treeParts.length - a.treeParts.length)[0]
      .treeParts.map((d) => d.ply),
    [margin.left, width - margin.right]
  );
  const yScale = scaleLinear(
    [-720000, 720000],
    [height - margin.bottom, margin.top]
  );

  const maxAbsEval = Math.max(
    300,
    max(game.treeParts, (d) => Math.abs(d.eval.cp))
  );
  const evalYScale = scaleLinear(
    [-maxAbsEval, maxAbsEval],
    [height - margin.bottom, margin.top]
  );

  return (
    <svg width={width} height={height}>
      {game.treeParts.map((d, i) => {
        const isWhiteMove = d.ply % 2 === 1;
        const baseColor = isWhiteMove ? whiteColor : blackColor;
        const isBigThink = game.bigThinks.includes(d);
        const clk = isWhiteMove ? d.clock : -1 * d.clock;

        return (
          <rect
            key={d.ply}
            fill={baseColor}
            x={xScale(d.ply)}
            y={isWhiteMove ? yScale(clk) : yScale(0)}
            width={xScale.bandwidth()}
            height={
              isWhiteMove ? yScale(0) - yScale(clk) : yScale(clk) - yScale(0)
            }
            opacity={isBigThink ? 1 : 0.2}
          />
        );
      })}
      {/* {game.treeParts.map((d, i) => (
        <circle
          key={d.ply}
          cx={xScale(d.ply) + xScale.bandwidth() / 2}
          cy={evalYScale(d.eval.cp)}
          r={5}
          fill={d.ply % 2 === 0 ? "black" : "gray"}
        />
      ))} */}
    </svg>
  );
}
