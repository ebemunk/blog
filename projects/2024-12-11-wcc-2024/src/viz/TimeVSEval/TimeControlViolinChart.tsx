import { extent, scaleBand, scaleLinear, bin, max, quantile } from "d3";
import { Axis } from "./Axis";
import { playerColorScale } from './index';
import type { ProcessedMove } from "./types";
import { DEFAULT_BUCKETS, type TimeBucket } from './TimeBucketChart';

interface TimeControlViolinChartProps {
  data: ProcessedMove[][];
  evalRange?: {
    min: number;
    max: number;
  } | 'auto';
}

// Simple Gaussian kernel function
function gaussian(x: number): number {
  return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
}

// Our own KDE implementation
function calculateDensity(data: number[], scale: any, bandwidth = 7) {
  if (data.length < 2) return [];
  
  const domain = scale.domain();
  const range = domain[1] - domain[0];
  const bw = bandwidth * range / 100;  // Adjust bandwidth relative to data range
  
  // Generate points along the domain for density estimation
  const points = Array.from({ length: 50 }, (_, i) => 
    domain[0] + (domain[1] - domain[0]) * (i / 49)
  );
  
  // Calculate density at each point
  return points.map(x => {
    const density = data.reduce((sum, d) => 
      sum + gaussian((x - d) / bw), 0
    ) / (data.length * bw);
    
    return { x, y: density };
  });
}

// Helper to calculate violin plot data for a group
function calculateViolinData(
  moves: ProcessedMove[],
  bucket: TimeBucket,
  yScale: any
) {
  const movesInBucket = moves.filter(d => 
    d.time_spent! >= bucket.min && 
    d.time_spent! < bucket.max &&
    d.evalChange !== null
  );

  const values = movesInBucket.map(d => d.evalChange!);
  const density = calculateDensity(values, yScale);
  const median = quantile(values, 0.5) || 0;
  
  return {
    density,
    median,
    count: values.length
  };
}

export function TimeControlViolinChart({ 
  data,
  evalRange = { min: -200, max: 200 }
}: TimeControlViolinChartProps) {
  const width = 1080;
  const height = 566;
  const margin = { top: 20, right: 20, bottom: 60, left: 60 };

  const flatData = data.flat().filter(d => 
    d.time_spent !== null && d.evalChange !== null
  );

  // Get unique players
  const players = Array.from(new Set(flatData.map(d => d.player)));

  // Split data by time control
  const preTimeControl = flatData.filter(d => d.moveNumber <= 40);
  const postTimeControl = flatData.filter(d => d.moveNumber > 40);

  // Create scales
  const xScale = scaleBand()
    .domain(DEFAULT_BUCKETS.map(b => b.label))
    .range([margin.left, width - margin.right])
    .padding(0.2);

  const xGroupScale = scaleBand()
    .domain(players)
    .range([0, xScale.bandwidth()])
    .padding(0.05);

  // Calculate y extent from all data
  const yExtent = extent(flatData.map(d => d.evalChange)) as [number, number];

  const yScale = scaleLinear()
    .domain(
      evalRange === 'auto' 
        ? yExtent
        : [evalRange.min, evalRange.max]
    )
    .range([height - margin.bottom, margin.top])
    .nice();

  // Calculate maximum density for scaling
  const allDensities = DEFAULT_BUCKETS.flatMap(bucket => 
    players.flatMap(player => {
      const playerMoves = flatData.filter(d => d.player === player);
      const preMoves = playerMoves.filter(d => d.moveNumber <= 40);
      const postMoves = playerMoves.filter(d => d.moveNumber > 40);
      
      const preData = calculateViolinData(preMoves, bucket, yScale);
      const postData = calculateViolinData(postMoves, bucket, yScale);
      
      return [...preData.density, ...postData.density].map(d => d.y);
    })
  );
  
  const maxDensity = max(allDensities) || 0;
  const densityScale = scaleLinear()
    .domain([0, maxDensity])
    .range([0, xGroupScale.bandwidth() / 2]);

  return (
    <svg width={width} height={height}>
      {/* Background stripes */}
      {DEFAULT_BUCKETS.map((bucket) => (
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

      {/* Violin plots */}
      {DEFAULT_BUCKETS.map(bucket => 
        players.map(player => {
          const x = xScale(bucket.label)! + xGroupScale(player)!;
          const width = xGroupScale.bandwidth();
          
          const playerMoves = flatData.filter(d => d.player === player);
          const preData = calculateViolinData(
            playerMoves.filter(d => d.moveNumber <= 40),
            bucket,
            yScale
          );
          const postData = calculateViolinData(
            playerMoves.filter(d => d.moveNumber > 40),
            bucket,
            yScale
          );

          // Create split paths for the violin plot
          const prePath = preData.density.map((d, i) => 
            i === 0
              ? `M ${x + width/2} ${yScale(d.x)} `
              : `L ${x + width/2 - densityScale(d.y)} ${yScale(d.x)}`
          ).join('') + 
          preData.density.reverse().map(d => 
            `L ${x + width/2} ${yScale(d.x)}`
          ).join('') + 'Z';

          const postPath = postData.density.map((d, i) => 
            i === 0
              ? `M ${x + width/2} ${yScale(d.x)} `
              : `L ${x + width/2 + densityScale(d.y)} ${yScale(d.x)}`
          ).join('') + 
          postData.density.reverse().map(d => 
            `L ${x + width/2} ${yScale(d.x)}`
          ).join('') + 'Z';

          return (
            <g key={`${bucket.label}-${player}`}>
              {/* Pre time-control violin (left side) */}
              <path
                d={prePath}
                fill={playerColorScale(player)}
                opacity={0.4}
                stroke={playerColorScale(player)}
                strokeWidth={1}
              />
              
              {/* Post time-control violin (right side) */}
              <path
                d={postPath}
                fill={playerColorScale(player)}
                opacity={0.4}
                stroke={playerColorScale(player)}
                strokeWidth={1}
              />

              {/* Center line */}
              <line
                x1={x + width/2}
                x2={x + width/2}
                y1={yScale(yScale.domain()[0])}
                y2={yScale(yScale.domain()[1])}
                stroke={playerColorScale(player)}
                strokeWidth={1}
                opacity={0.2}
              />

              {/* Median lines */}
              {preData.count > 0 && (
                <line
                  x1={x}
                  x2={x + width/2}
                  y1={yScale(preData.median)}
                  y2={yScale(preData.median)}
                  stroke={playerColorScale(player)}
                  strokeWidth={2}
                  opacity={0.5}
                />
              )}
              {postData.count > 0 && (
                <line
                  x1={x + width/2}
                  x2={x + width}
                  y1={yScale(postData.median)}
                  y2={yScale(postData.median)}
                  stroke={playerColorScale(player)}
                  strokeWidth={2}
                  opacity={0.8}
                />
              )}

              {/* Sample sizes */}
              <text
                x={x + width/2}
                y={height - margin.bottom + 26}
                textAnchor="middle"
                fontSize="10"
              >
                n={preData.count}/{postData.count}
              </text>
            </g>
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