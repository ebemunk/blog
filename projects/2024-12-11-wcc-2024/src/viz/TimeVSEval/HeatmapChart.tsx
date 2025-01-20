import { useState } from "react";
import { scaleLinear, scaleSequential, extent, bin, max } from "d3";
import { interpolateYlOrRd } from "d3-scale-chromatic";
import { Axis } from "./Axis";
import { ProcessedMove } from "./types";
import { formatTime } from "./utils";

interface HeatmapChartProps {
  data: ProcessedMove[][];
  timeBins?: number;
  evalBins?: number;
}

type PlayerFilter = "both" | "Gukesh" | "Ding";

export function HeatmapChart({ 
  data, 
  timeBins = 20,
  evalBins = 20 
}: HeatmapChartProps) {
  const [playerFilter, setPlayerFilter] = useState<PlayerFilter>("both");
  
  const width = 800;
  const height = 600;
  const margin = { top: 20, right: 20, bottom: 40, left: 60 };

  // Filter and prepare data
  const flatData = data.flat().filter(
    d => d.time_spent !== null && 
         d.evalChange !== null && 
         (playerFilter === "both" || d.player === playerFilter)
  );

  // Create scales
  const xScale = scaleLinear(
    extent(flatData, d => d.time_spent) as [number, number],
    [margin.left, width - margin.right]
  );

  const yScale = scaleLinear(
    extent(flatData, d => d.evalChange) as [number, number],
    [height - margin.bottom, margin.top]
  );

  // Create bins
  const xBinner = bin<ProcessedMove, number>()
    .domain(xScale.domain())
    .thresholds(timeBins)
    .value(d => d.time_spent!);

  const yBinner = bin<ProcessedMove, number>()
    .domain(yScale.domain())
    .thresholds(evalBins)
    .value(d => d.evalChange!);

  // Create 2D histogram
  const bins = new Array(timeBins).fill(0).map(() => 
    new Array(evalBins).fill(0)
  );

  flatData.forEach(d => {
    const xBin = Math.floor((d.time_spent! - xScale.domain()[0]) / 
      (xScale.domain()[1] - xScale.domain()[0]) * timeBins);
    const yBin = Math.floor((d.evalChange! - yScale.domain()[0]) / 
      (yScale.domain()[1] - yScale.domain()[0]) * evalBins);
    
    if (xBin >= 0 && xBin < timeBins && yBin >= 0 && yBin < evalBins) {
      bins[xBin][yBin]++;
    }
  });

  // Color scale
  const colorScale = scaleSequential(interpolateYlOrRd)
    .domain([0, max(bins.flat()) || 1]);

  // Calculate cell dimensions
  const cellWidth = (width - margin.left - margin.right) / timeBins;
  const cellHeight = (height - margin.top - margin.bottom) / evalBins;

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <select 
          value={playerFilter}
          onChange={(e) => setPlayerFilter(e.target.value as PlayerFilter)}
          style={{ marginRight: "10px" }}
        >
          <option value="both">Both Players</option>
          <option value="Gukesh">Gukesh</option>
          <option value="Ding">Ding</option>
        </select>
      </div>

      <svg width={width} height={height}>
        {/* Draw heatmap cells */}
        {bins.map((row, i) => 
          row.map((value, j) => (
            <rect
              key={`${i}-${j}`}
              x={margin.left + i * cellWidth}
              y={margin.top + j * cellHeight}
              width={cellWidth}
              height={cellHeight}
              fill={colorScale(value)}
              opacity={0.8}
            />
          ))
        )}

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
          Evaluation Change (cp)
        </text>
      </svg>
    </div>
  );
} 