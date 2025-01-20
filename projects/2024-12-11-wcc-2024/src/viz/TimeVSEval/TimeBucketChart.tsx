import { scaleBand, scaleLinear, extent } from "d3";
import { Axis } from "./Axis";
import { ProcessedMove } from "./types";
import { formatTime } from "./utils";
import { playerColorScale } from './index';

interface TimeBucket {
  min: number;
  max: number;
  label: string;
}

// Default buckets based on chess time controls
const DEFAULT_BUCKETS: TimeBucket[] = [
  { min: 0, max: 30_000, label: "< 30s" },
  { min: 30_000, max: 60_000, label: "30s-1m" },
  { min: 60_000, max: 180_000, label: "1m-3m" },
  { min: 180_000, max: 300_000, label: "3m-5m" },
  { min: 300_000, max: 600_000, label: "5m-10m" },
  { min: 600_000, max: Infinity, label: "> 10m" },
];

interface BucketStats {
  bucket: TimeBucket;
  player: string;
  count: number;
  avgEvalChange: number;
  stdDev: number;
}

interface TimeBucketChartProps {
  data: ProcessedMove[][];
  buckets?: TimeBucket[];
}

// Helper functions
function mean(arr: number[]): number {
  if (arr.length === 0) return 0;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function std(arr: number[]): number {
  if (arr.length <= 1) return 0;
  const m = mean(arr);
  return Math.sqrt(arr.reduce((a, b) => a + Math.pow(b - m, 2), 0) / (arr.length - 1));
}

export function TimeBucketChart({ data, buckets = DEFAULT_BUCKETS }: TimeBucketChartProps) {
  const width = 800;
  const height = 600;
  const margin = { top: 20, right: 20, bottom: 40, left: 60 };

  const flatData = data.flat().filter(d => 
    d.time_spent !== null && d.evalChange !== null
  );

  // Get unique players
  const players = Array.from(new Set(flatData.map(d => d.player)));

  // Calculate statistics for each bucket and player
  const bucketStats: BucketStats[] = buckets.flatMap(bucket => {
    // Calculate combined stats
    const movesInBucket = flatData.filter(d => 
      d.time_spent >= bucket.min && d.time_spent < bucket.max
    );

    // Calculate per-player stats
    return players.map(player => {
      const playerMoves = movesInBucket.filter(d => d.player === player);
      const evalChanges = playerMoves.map(d => d.evalChange!);
      
      return {
        bucket,
        player,
        count: playerMoves.length,
        avgEvalChange: mean(evalChanges),
        stdDev: std(evalChanges)
      };
    });
  });

  // Create scales
  const xScale = scaleBand()
    .domain(buckets.map(b => b.label))
    .range([margin.left, width - margin.right])
    .padding(0.1);

  const xGroupScale = scaleBand()
    .domain(players)
    .range([0, xScale.bandwidth()])
    .padding(0.05);

  // Fix the yScale domain to consider both positive and negative error bars
  const yExtent = extent(bucketStats.flatMap(stat => [
    stat.avgEvalChange + stat.stdDev,
    stat.avgEvalChange - stat.stdDev
  ])) as [number, number];

  const yScale = scaleLinear()
    .domain(yExtent)
    .range([height - margin.bottom, margin.top])
    .nice();

  return (
    <svg width={width} height={height}>
      {/* Zero line */}
      <line
        x1={margin.left}
        x2={width - margin.right}
        y1={yScale(0)}
        y2={yScale(0)}
        stroke="black"
        strokeDasharray="2,2"
      />

      {/* Draw grouped bars */}
      {bucketStats.map(stat => (
        <g key={`${stat.bucket.label}-${stat.player}`}>
          <rect
            x={xScale(stat.bucket.label)! + xGroupScale(stat.player)!}
            y={yScale(Math.max(0, stat.avgEvalChange))}
            width={xGroupScale.bandwidth()}
            height={Math.abs(yScale(stat.avgEvalChange) - yScale(0))}
            fill={playerColorScale(stat.player)}
            opacity={0.8}
          />
          {/* Error bars (only show if there's data) */}
          {stat.count > 1 && (
            <>
              {/* Vertical line */}
              <line
                x1={xScale(stat.bucket.label)! + xGroupScale(stat.player)! + xGroupScale.bandwidth() / 2}
                x2={xScale(stat.bucket.label)! + xGroupScale(stat.player)! + xGroupScale.bandwidth() / 2}
                y1={yScale(stat.avgEvalChange - stat.stdDev)}
                y2={yScale(stat.avgEvalChange + stat.stdDev)}
                stroke="black"
                strokeWidth={1}
                opacity={0.5}
              />
              {/* Top cap */}
              <line
                x1={xScale(stat.bucket.label)! + xGroupScale(stat.player)!}
                x2={xScale(stat.bucket.label)! + xGroupScale(stat.player)! + xGroupScale.bandwidth()}
                y1={yScale(stat.avgEvalChange + stat.stdDev)}
                y2={yScale(stat.avgEvalChange + stat.stdDev)}
                stroke="black"
                strokeWidth={1}
                opacity={0.5}
              />
              {/* Bottom cap */}
              <line
                x1={xScale(stat.bucket.label)! + xGroupScale(stat.player)!}
                x2={xScale(stat.bucket.label)! + xGroupScale(stat.player)! + xGroupScale.bandwidth()}
                y1={yScale(stat.avgEvalChange - stat.stdDev)}
                y2={yScale(stat.avgEvalChange - stat.stdDev)}
                stroke="black"
                strokeWidth={1}
                opacity={0.5}
              />
            </>
          )}
        </g>
      ))}

      <Axis 
        type="bottom" 
        scale={xScale} 
        transform={`translate(0,${height - margin.bottom})`}
      />
      <Axis 
        type="left" 
        scale={yScale} 
        transform={`translate(${margin.left},0)`}
      />

      <text
        x={width / 2}
        y={height - 5}
        textAnchor="middle"
      >
        Time Spent
      </text>
    </svg>
  );
} 