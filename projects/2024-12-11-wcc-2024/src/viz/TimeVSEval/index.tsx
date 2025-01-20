import { scaleLinear, scaleOrdinal, scaleSymlog, extent, line } from "d3";
import { regressionLinear } from "d3-regression";
import results from "../../../data/results.json";
import { Axis } from "./Axis";
import { TimeBucketChart } from "./TimeBucketChart";
import { MovingAverageChart } from "./MovingAverageChart";
import { HeatmapChart } from "./HeatmapChart";
import { formatTime } from "./utils";

interface Evaluation {
  cp?: number;
  mate?: number;
}

interface ChessMove {
  ply: number;
  eval?: Evaluation;
  clock: number;
  san: string;
}

interface ChessGame {
  treeParts: ChessMove[];
}

interface ProcessedMove {
  time_spent: number | null;
  evalChange: number | null;
  ply: number;
  side: 'w' | 'b';
  san: string;
  gameNumber: number;
  moveNumber: number;  // Chess move number (1. e4, 1... e5, 2. Nf3, etc)
  player: 'Gukesh' | 'Ding';
}

interface TimeControl {
  mainTime: number;  // Initial time in milliseconds
  firstTimeControl: {
    moves: number;   // Number of moves for first time control
    time: number;    // Time added after first time control in milliseconds
  };
  increment: {
    startMove: number;  // Move number when increment starts
    time: number;       // Increment per move in milliseconds
  };
}

// WCC 2024 time control
const WCC_2024_TIME_CONTROL: TimeControl = {
  mainTime: 120 * 60 * 1000,  // 120 minutes in ms
  firstTimeControl: {
    moves: 40,
    time: 30 * 60 * 1000,     // 30 minutes in ms
  },
  increment: {
    startMove: 41,
    time: 30 * 1000,          // 30 seconds in ms
  }
};

// Helper function to calculate actual time spent considering time controls
function calculateTimeSpent(
  lastClock: number,
  currentClock: number,
  moveNumber: number,
  timeControl: TimeControl
): number {
  // Convert centiseconds to milliseconds
  const lastMs = lastClock * 10;
  const currentMs = currentClock * 10;
  
  // Basic time difference
  let timeSpent = lastMs - currentMs;

  // If time was added (clock increased)
  if (currentMs > lastMs) {
    if (moveNumber === timeControl.firstTimeControl.moves) {
      // At move 40, they get 30 minutes added
      timeSpent = lastMs + timeControl.firstTimeControl.time - currentMs;
    } else if (moveNumber >= timeControl.increment.startMove) {
      // After move 40, they get 30 seconds per move
      timeSpent = lastMs + timeControl.increment.time - currentMs;
    }
  }
  
  return Math.max(0, timeSpent);
}

// Helper function to convert eval to centipawn score
function evalToCp(eval_?: Evaluation): number {
  if (!eval_) return 0;
  if (eval_.mate !== undefined) {
    // Convert mate score to centipawns
    // Positive mate is winning for white, negative for black
    // Use a large value (10000) minus number of moves to mate
    return Math.sign(eval_.mate) * (10000 - Math.abs(eval_.mate) * 100);
  }
  return eval_.cp || 0;
}

// Process raw data into the format we need
function processGames(
  rawData: ChessGame[], 
  timeControl: TimeControl = WCC_2024_TIME_CONTROL,
  players: [string, string] = ["Gukesh", "Ding"]
): ProcessedMove[][] {
  return rawData.map((game, gameIndex) => {
    const processedMoves: ProcessedMove[] = [];
    const moves = game.treeParts;
    if (!moves || moves.length === 0) return [];

    // Get player colors for this game from results
    const gameResult = results[gameIndex + 1];
    const whitePlayer = gameResult.white.includes(players[0]) ? players[0] : players[1];
    const blackPlayer = whitePlayer === players[0] ? players[1] : players[0];

    // Process white's moves
    for (let i = 0; i < moves.length; i += 2) {
      const currentMove = moves[i];
      const previousMove = i > 0 ? moves[i - 2] : null;  // Get previous move by same player
      const previousOpponentMove = i > 0 ? moves[i - 1] : null;
      const moveNumber = Math.ceil(currentMove.ply / 2);
      
      if (!currentMove?.clock) continue;

      const time_spent = previousMove 
        ? calculateTimeSpent(previousMove.clock, currentMove.clock, moveNumber, timeControl)
        : null;
      
      const currentEval = evalToCp(currentMove.eval);
      const previousEval = previousOpponentMove ? evalToCp(previousOpponentMove.eval) : 0;
      
      processedMoves.push({
        time_spent,
        evalChange: currentEval - previousEval,
        ply: currentMove.ply,
        side: 'w',
        san: currentMove.san,
        gameNumber: gameIndex + 1,
        moveNumber,
        player: whitePlayer
      });
    }

    // Process black's moves
    for (let i = 1; i < moves.length; i += 2) {
      const currentMove = moves[i];
      const previousMove = i > 1 ? moves[i - 2] : null;  // Get previous move by same player
      const previousOpponentMove = moves[i - 1];
      const moveNumber = Math.floor(currentMove.ply / 2);
      
      if (!currentMove?.clock) continue;

      const time_spent = previousMove 
        ? calculateTimeSpent(previousMove.clock, currentMove.clock, moveNumber, timeControl)
        : null;
      
      const currentEval = evalToCp(currentMove.eval);
      const previousEval = evalToCp(previousOpponentMove.eval);
      
      processedMoves.push({
        time_spent,
        evalChange: previousEval - currentEval,  // Flip for black's moves
        ply: currentMove.ply,
        side: 'b',
        san: currentMove.san,
        gameNumber: gameIndex + 1,
        moveNumber,
        player: blackPlayer
      });
    }

    return processedMoves.sort((a, b) => a.ply - b.ply);
  });
}

function ScatterPlot({ data }: { data: ProcessedMove[][] }) {
  const width = 800;
  const height = 600;
  const margin = { top: 20, right: 20, bottom: 40, left: 60 };

  // Flatten and prepare data
  const flatData = data.flat();
  const validData = flatData.filter(
    (d) => d.time_spent !== null && d.evalChange !== null && d.evalChange > -1000
  );

  // Scales
  const xScale = scaleLinear(
    extent(validData, (d) => d.time_spent) as [number, number],
    [margin.left, width - margin.right]
  );

  const yScale = scaleSymlog()
    .domain(extent(validData, (d) => d.evalChange) as [number, number])
    .range([height - margin.bottom, margin.top])
    .constant(10);

  // Calculate trend lines for each player
  const gukeshRegression = regressionLinear()
    .x(d => d.time_spent)
    .y(d => d.evalChange);
  
  const dingRegression = regressionLinear()
    .x(d => d.time_spent)
    .y(d => d.evalChange);
  
  const gukeshLine = gukeshRegression(validData.filter(d => d.player === "Gukesh"));
  const dingLine = dingRegression(validData.filter(d => d.player === "Ding"));

  const trendLine = line<{x: number, y: number}>()
    .x(d => xScale(d.x))
    .y(d => yScale(d.y));

  const gukeshTrendData = gukeshLine.map(([x, y]) => ({ x, y }));
  const dingTrendData = dingLine.map(([x, y]) => ({ x, y }));

  return (
    <svg width={width} height={height}>
      {/* Trend lines */}
      <path
        d={trendLine(gukeshTrendData) || undefined}
        stroke={playerColorScale("Gukesh")}
        strokeWidth={1.5}
        strokeDasharray="4,4"
        fill="none"
      />
      <path
        d={trendLine(dingTrendData) || undefined}
        stroke={playerColorScale("Ding")}
        strokeWidth={1.5}
        strokeDasharray="4,4"
        fill="none"
      />

      {/* Points */}
      {validData.map((d, i) => (
        <circle
          key={`${d.gameNumber}-${d.ply}`}
          cx={xScale(d.time_spent)}
          cy={yScale(d.evalChange)}
          r={4}
          fill={playerColorScale(d.player)}
          opacity={0.6}
        />
      ))}

      {/* Add labels */}
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
      <text
        transform={`translate(15, ${height/2}) rotate(-90)`}
        textAnchor="middle"
      >
        Evaluation Change (cp)
      </text>
    </svg>
  );
}

interface TimeVSEvalProps {
  data: ChessGame[];
  players: [string, string];  // [player1, player2]
  timeControl?: TimeControl;
}

// Create a shared color scale that all components can use
export const playerColorScale = scaleOrdinal<string, string>()
  .range(["#1f77b4", "#ff7f0e"]);  // Remove specific domain

// Create a Legend component
function Legend({ players }: { players: [string, string] }) {
  const legendSpacing = 100;
  const legendRadius = 4;

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      gap: '50px',
      margin: '20px 0'
    }}>
      {players.map((player, i) => (
        <div key={player} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width={legendRadius * 2} height={legendRadius * 2}>
            <circle
              cx={legendRadius}
              cy={legendRadius}
              r={legendRadius}
              fill={playerColorScale(player)}
              opacity={0.6}
            />
          </svg>
          <span>{player}</span>
        </div>
      ))}
    </div>
  );
}

export function TimeVSEval({ data, players, timeControl = WCC_2024_TIME_CONTROL }: TimeVSEvalProps) {
  const processedData = processGames(data, timeControl, players)//.map(d => d.filter(d => d.evalChange > -1000));
  
  // Set the domain for the color scale
  playerColorScale.domain(players);
  
  return (
    <div>
      
      <h2>Time Spent vs Evaluation Change</h2>
      <Legend players={players} />
      <ScatterPlot data={processedData} />
      
      <h2>Time Buckets Analysis</h2>
      <Legend players={players} />
      <TimeBucketChart 
        data={processedData} 
        // evalRange="auto"  // Use full data range
        evalRange={{ min: -160, max: 50 }}
      />
      
      <h2>Moving Average Trend</h2>
      <Legend players={players} />
      <MovingAverageChart data={processedData} />
      
      <h2>Move Distribution Heatmap</h2>
      <Legend players={players} />
      <HeatmapChart data={processedData} />
    </div>
  );
}
