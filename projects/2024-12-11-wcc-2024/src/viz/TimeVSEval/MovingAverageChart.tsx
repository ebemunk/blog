import { scaleLinear, line, extent } from "d3";
import { Axis } from "./Axis";
import { ProcessedMove } from "./types";
import { formatTime } from "./utils";
import { playerColorScale } from './index';

interface MovingAverageChartProps {
  data: ProcessedMove[][];
  windowSize?: number;
}

function mean(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function calculateMovingAverage(data: ProcessedMove[], windowSize: number) {
  return data
    .sort((a, b) => (a.time_spent || 0) - (b.time_spent || 0))
    .map((d, i, arr) => {
      const start = Math.max(0, i - windowSize / 2);
      const end = Math.min(arr.length, i + windowSize / 2);
      const window = arr.slice(start, end);
      const validEvals = window
        .filter(w => w.evalChange !== null)
        .map(w => w.evalChange!);
      
      return {
        time: d.time_spent,
        evalChange: mean(validEvals),
        player: d.player
      };
    });
}

export function MovingAverageChart({ 
  data, 
  windowSize = 20 
}: MovingAverageChartProps) {
  const width = 800;
  const height = 600;
  const margin = { top: 20, right: 20, bottom: 40, left: 60 };

  const flatData = data.flat().filter(
    d => d.time_spent !== null && d.evalChange !== null
  );

  // Split data by player
  const gukeshData = flatData.filter(d => d.player === "Gukesh");
  const dingData = flatData.filter(d => d.player === "Ding");

  // Calculate moving averages
  const gukeshMA = calculateMovingAverage(gukeshData, windowSize);
  const dingMA = calculateMovingAverage(dingData, windowSize);

  // Scales
  const xScale = scaleLinear(
    extent(flatData, d => d.time_spent) as [number, number],
    [margin.left, width - margin.right]
  );

  const yScale = scaleLinear(
    extent([...gukeshMA, ...dingMA], d => d.evalChange) as [number, number],
    [height - margin.bottom, margin.top]
  );

  // Create line generator
  const lineGen = line<typeof gukeshMA[0]>()
    .x(d => xScale(d.time!))
    .y(d => yScale(d.evalChange));

  return (
    <svg width={width} height={height}>
      <Axis 
        type="bottom" 
        scale={xScale} 
        transform={`translate(0,${height - margin.bottom})`}
        tickFormat={formatTime}
      />
      <Axis 
        type="left" 
        scale={yScale} 
        transform={`translate(${margin.left},0)`}
      />

      {/* Zero line */}
      <line
        x1={margin.left}
        x2={width - margin.right}
        y1={yScale(0)}
        y2={yScale(0)}
        stroke="black"
        strokeDasharray="2,2"
        opacity={0.5}
      />

      {/* Moving average lines */}
      <path
        d={lineGen(gukeshMA) || undefined}
        stroke={playerColorScale("Gukesh")}
        fill="none"
        strokeWidth={2}
      />
      <path
        d={lineGen(dingMA) || undefined}
        stroke={playerColorScale("Ding")}
        fill="none"
        strokeWidth={2}
      />

      {/* Labels */}
      <text
        x={width / 2}
        y={height - 5}
        textAnchor="middle"
      >
        Time Spent
      </text>
      <text
        transform={`translate(15, ${height/2}) rotate(-90)`}
        textAnchor="middle"
      >
        Average Evaluation Change (cp)
      </text>
    </svg>
  );
} 