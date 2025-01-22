import { useState } from "react";
import { scaleLinear, scaleSequential, extent, bin, max } from "d3";
import { interpolateViridis } from "d3-scale-chromatic";
import { Axis } from "./Axis";
import { ProcessedMove } from "./types";
import { formatTime } from "./utils";
import { theme } from '../../theme';

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
  
  const width = 1080;
  const height = 566;
  const margin = { top: 20, right: 20, bottom: 60, left: 60 };

  // Filter and prepare data
  const flatData = data.flat().filter(
    d => d.time_spent !== null && 
         d.evalChange !== null &&
         d.evalChange > -1000 &&
         d.evalChange < 1000 &&
         d.time_spent < 30 * 60_000 && // Only moves under 30 minutes
         (playerFilter === "both" || d.player === playerFilter)
  );

  // Create 15 equal time bins from 0 to 30 minutes
  const maxTime = 30 * 60_000; // 30 minutes
  const numTimeBins = 15;
  const timeStep = maxTime / numTimeBins;
  const timeBinsArray = Array.from(
    { length: numTimeBins + 1 }, 
    (_, i) => i * timeStep
  );

  // Create 20 equal eval bins from -200 to 200
  const numEvalBins = 20;
  const evalStep = 400 / numEvalBins; // (-200 to 200 = 400 range)
  const evalBinsArray = Array.from(
    { length: numEvalBins + 1 }, 
    (_, i) => -200 + i * evalStep
  );

  // Create 2D histogram data
  const bins = new Map();
  flatData.forEach(d => {
    const timeIndex = Math.min(
      Math.floor(d.time_spent! / timeStep),
      numTimeBins - 1
    );
    const evalIndex = Math.min(
      Math.floor((d.evalChange! + 200) / evalStep),
      numEvalBins - 1
    );
    
    if (timeIndex >= 0 && evalIndex >= 0) {
      const key = `${timeIndex * timeStep},${-200 + evalIndex * evalStep}`;
      bins.set(key, (bins.get(key) || 0) + 1);
    }
  });

  // Create scales
  const xScale = scaleLinear()
    .domain([0, maxTime])
    .range([margin.left, width - margin.right]);

  const yScale = scaleLinear()
    .domain([-200, 200])
    .range([height - margin.bottom, margin.top]);

  // Use a sqrt scale for colors to emphasize lower values
  const maxCount = max(Array.from(bins.values())) || 1;
  const colorScale = scaleSequential(t => interpolateViridis(Math.pow(1 - t, 2)))
    .domain([0, Math.sqrt(maxCount)]);

  // Custom time formatter
  const formatTimeAxis = (ms: number) => {
    if (ms < 60_000) {
      return `${Math.round(ms/1000)}s`;
    }
    return `${Math.round(ms/60000)}m`;
  };

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

      <svg width={width} height={height} style={{ backgroundColor: theme.colors.chartBg }}>
        {/* Grid lines */}
        {timeBinsArray.map(t => (
          <line
            key={`time-${t}`}
            x1={xScale(t)}
            x2={xScale(t)}
            y1={margin.top}
            y2={height - margin.bottom}
            stroke={theme.colors.gridLine}
            strokeWidth={1}
            opacity={0.3}
          />
        ))}
        {evalBinsArray.map(e => (
          <line
            key={`eval-${e}`}
            x1={margin.left}
            x2={width - margin.right}
            y1={yScale(e)}
            y2={yScale(e)}
            stroke={theme.colors.gridLine}
            strokeWidth={1}
            opacity={0.3}
          />
        ))}

        {/* Render cells */}
        {timeBinsArray.slice(0, -1).map((tx0, i) => {
          const tx1 = timeBinsArray[i + 1];
          return evalBinsArray.slice(0, -1).map((ey0, j) => {
            const ey1 = evalBinsArray[j + 1];
            const count = bins.get(`${tx0},${ey0}`) || 0;
            
            return (
              <rect
                key={`${tx0}-${ey0}`}
                x={xScale(tx0)}
                y={yScale(ey1)}
                width={xScale(tx1) - xScale(tx0)}
                height={yScale(ey0) - yScale(ey1)}
                fill={colorScale(Math.sqrt(count))}
                stroke={theme.colors.gridLine}
                strokeWidth={1}
                strokeOpacity={0.15}
              >
                <title>
                  {`Time: ${formatTimeAxis(tx0)}-${formatTimeAxis(tx1)}
Eval: ${ey0.toFixed(1)}-${ey1.toFixed(1)}
Count: ${count}`}
                </title>
              </rect>
            );
          });
        })}

        {/* Add outer border */}
        <rect
          x={margin.left}
          y={margin.top}
          width={width - margin.left - margin.right}
          height={height - margin.top - margin.bottom}
          fill="none"
          stroke={theme.colors.gridLine}
          strokeWidth={1}
          opacity={0.5}
        />

        <Axis 
          type="bottom" 
          scale={xScale} 
          transform={`translate(0,${height - margin.bottom})`}
          tickFormat={formatTimeAxis}
        />
        <Axis 
          type="left" 
          scale={yScale} 
          transform={`translate(${margin.left},0)`}
        />

        {/* Labels */}
        <text
          x={margin.left + (width - margin.left - margin.right) / 2}
          y={height - 5}
          textAnchor="middle"
          fill={theme.colors.text}
        >
          Time Spent (ms)
        </text>

        <text
          transform={`translate(15, ${margin.top + (height - margin.top - margin.bottom) / 2}) rotate(-90)`}
          textAnchor="middle"
          fill={theme.colors.text}
        >
          Change in Evaluation (centipawns)
        </text>
      </svg>
    </div>
  );
} 