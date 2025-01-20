import { extent, quantile, scaleBand, scaleLinear } from "d3";
import { Axis } from "./Axis";
import { playerColorScale } from './index';
import type { ProcessedMove } from "./types";

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
  { min: 600_000, max: 1_800_000, label: "10m-30m" },
  { min: 1_800_000, max: 3_600_000, label: "30m-1h" },
  { min: 3_600_000, max: Infinity, label: "> 1h" },
];

interface BoxPlotStats {
  min: number;
  q1: number;
  median: number;
  q3: number;
  max: number;
  mean: number;
  count: number;
}

interface TimeBucketChartProps {
  data: ProcessedMove[][];
  buckets?: TimeBucket[];
  evalRange?: {
    min: number;
    max: number;
  } | 'auto';  // 'auto' means use full data range
}

// Helper functions
function mean(arr: number[]): number {
  if (arr.length === 0) return 0;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function calculateBoxPlotStats(arr: number[]): BoxPlotStats {
  if (arr.length === 0) {
    return { min: 0, q1: 0, median: 0, q3: 0, max: 0, mean: 0, count: 0 };
  }
  const sorted = [...arr].sort((a, b) => a - b);
  return {
    min: sorted[0],
    q1: quantile(sorted, 0.25) || 0,
    median: quantile(sorted, 0.5) || 0,
    q3: quantile(sorted, 0.75) || 0,
    max: sorted[sorted.length - 1],
    mean: mean(sorted),
    count: arr.length
  };
}

export function TimeBucketChart({ 
  data, 
  buckets = DEFAULT_BUCKETS,
  evalRange = { min: -200, max: 200 }  // Default to ±200cp
}: TimeBucketChartProps) {
  const width = 1080;  // Increased width
  const height = 566;  // 1080/1.91 ≈ 566
  const margin = { top: 20, right: 20, bottom: 60, left: 60 };

  const flatData = data.flat().filter(d => 
    d.time_spent !== null && d.evalChange !== null
  );

  // Get unique players
  const players = Array.from(new Set(flatData.map(d => d.player)));

  // Calculate box plot statistics for each bucket and player
  const bucketStats = buckets.flatMap(bucket => {
    const movesInBucket = flatData.filter(d => 
      d.time_spent >= bucket.min && d.time_spent < bucket.max
    );

    return players.map(player => {
      const playerMoves = movesInBucket.filter(d => d.player === player);
      const evalChanges = playerMoves.map(d => d.evalChange!);
      
      return {
        bucket,
        player,
        stats: calculateBoxPlotStats(evalChanges)
      };
    });
  });

  // Create scales
  const xScale = scaleBand()
    .domain(buckets.map(b => b.label))
    .range([margin.left, width - margin.right])
    .padding(0.2);

  const xGroupScale = scaleBand()
    .domain(players)
    .range([0, xScale.bandwidth()])
    .padding(0.05);

  // Adjust y-scale based on evalRange
  const yExtent = extent(bucketStats.flatMap(({ stats }) => [
    stats.q1 - 1.5 * (stats.q3 - stats.q1),  // Lower whisker
    stats.q3 + 1.5 * (stats.q3 - stats.q1)   // Upper whisker
  ])) as [number, number];

  const yScale = scaleLinear()
    .domain(
      evalRange === 'auto' 
        ? yExtent
        : [evalRange.min, evalRange.max]
    )
    .range([height - margin.bottom, margin.top])
    .nice();

  // Organize points by bucket and player
  const pointsByBucket = buckets.map(bucket => {
    const movesInBucket = flatData.filter(d => 
      d.time_spent >= bucket.min && d.time_spent < bucket.max
    );

    return players.map(player => ({
      bucket,
      player,
      points: movesInBucket.filter(d => d.player === player)
    }));
  }).flat();

  // Helper to check if a value is within chart bounds
  const isInBounds = (value: number) => value >= yScale.domain()[0] && value <= yScale.domain()[1];

  return (
    <svg width={width} height={height}>
      {/* Background stripes */}
      {buckets.map((bucket) => (
        <rect
          key={`bg-${bucket.label}`}
          x={xScale(bucket.label)!}
          y={margin.top}
          width={xScale.bandwidth()}
          height={height - margin.top - margin.bottom}
          fill="#f8f8f8"
        />
      ))}

      {/* Grid lines */}
      {yScale.ticks(10).map(tick => (
        <line
          key={tick}
          x1={margin.left}
          x2={width - margin.right}
          y1={yScale(tick)}
          y2={yScale(tick)}
          stroke="#ddd"
          strokeDasharray="2,2"
        />
      ))}

      {/* Zero line */}
      <line
        x1={margin.left}
        x2={width - margin.right}
        y1={yScale(0)}
        y2={yScale(0)}
        stroke="#999"
        strokeWidth={1}
      />

      {/* Box plots */}
      {bucketStats.map(({ bucket, player, stats }) => {
        const x = xScale(bucket.label)! + xGroupScale(player)!;
        const width = xGroupScale.bandwidth();
        
        // Only render if there's data
        if (stats.count === 0) {
          return (
            <g key={`${bucket.label}-${player}`}>
              {/* Just show the sample size of 0 */}
              <text
                x={x + width/2}
                y={height - margin.bottom + 26}
                textAnchor="middle"
                fontSize="10"
              >
                n=0
              </text>
            </g>
          );
        }
        
        return (
          <g key={`${bucket.label}-${player}`}>
            {/* Box */}
            <rect
              x={x}
              y={yScale(stats.q3)}
              width={width}
              height={yScale(stats.q1) - yScale(stats.q3)}
              fill={playerColorScale(player)}
              opacity={0.4}
              stroke={playerColorScale(player)}
            />
            
            {/* Median line */}
            <line
              x1={x}
              x2={x + width}
              y1={yScale(stats.median)}
              y2={yScale(stats.median)}
              stroke={playerColorScale(player)}
              strokeWidth={2}
            />

            {/* Whiskers */}
            <line
              x1={x + width/2}
              x2={x + width/2}
              y1={yScale(isInBounds(stats.min) ? stats.min : yScale.domain()[0])}
              y2={yScale(isInBounds(stats.max) ? stats.max : yScale.domain()[1])}
              stroke={playerColorScale(player)}
              strokeWidth={1}
              opacity={0.5}
            />

            {/* Whisker caps */}
            {isInBounds(stats.min) && (
              <line
                x1={x + width/2 - 4}
                x2={x + width/2 + 4}
                y1={yScale(stats.min)}
                y2={yScale(stats.min)}
                stroke={playerColorScale(player)}
                strokeWidth={1}
                opacity={0.5}
              />
            )}
            {isInBounds(stats.max) && (
              <line
                x1={x + width/2 - 4}
                x2={x + width/2 + 4}
                y1={yScale(stats.max)}
                y2={yScale(stats.max)}
                stroke={playerColorScale(player)}
                strokeWidth={1}
                opacity={0.5}
              />
            )}

            {/* Continuation indicators for out-of-bounds whiskers */}
            {!isInBounds(stats.min) && (
              <path
                d={`M ${x + width/2 - 4} ${height - margin.bottom - 6} 
                    L ${x + width/2} ${height - margin.bottom} 
                    L ${x + width/2 + 4} ${height - margin.bottom - 6}`}
                fill="none"
                stroke={playerColorScale(player)}
                strokeWidth={1}
                opacity={0.5}
              />
            )}
            {!isInBounds(stats.max) && (
              <path
                d={`M ${x + width/2 - 4} ${margin.top + 6} 
                    L ${x + width/2} ${margin.top} 
                    L ${x + width/2 + 4} ${margin.top + 6}`}
                fill="none"
                stroke={playerColorScale(player)}
                strokeWidth={1}
                opacity={0.5}
              />
            )}

            {/* Sample size */}
            <text
              x={x + width/2}
              y={height - margin.bottom + 26}
              textAnchor="middle"
              fontSize="10"
            >
              n={stats.count}
            </text>
          </g>
        );
      })}

      {/* Individual points */}
      {pointsByBucket.map(({ bucket, player, points }) => 
        points.map((point, i) => {
          // Only draw points that are within bounds
          if (!isInBounds(point.evalChange!)) return null;
          
          return (
            <circle
              key={`${bucket.label}-${player}-${i}`}
              cx={xScale(bucket.label)! + xGroupScale(player)! + xGroupScale.bandwidth() / 2}
              cy={yScale(point.evalChange!)}
              r={1.5}  // Smaller radius
              fill={playerColorScale(player)}
              opacity={0.25}  // More transparent
              transform={`translate(${(Math.random() - 0.5) * xGroupScale.bandwidth() * 0.8}, 0)`}
            />
          );
        })
      )}

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

      {/* X-axis label */}
      <text
        x={margin.left + (width - margin.left - margin.right) / 2}
        y={height - 5}
        textAnchor="middle"
      >
        Time Spent
      </text>

      {/* Y-axis label */}
      <text
        transform={`translate(15, ${margin.top + (height - margin.top - margin.bottom) / 2}) rotate(-90)`}
        textAnchor="middle"
      >
        Change in Evaluation (centipawns)
      </text>
    </svg>
  );
} 