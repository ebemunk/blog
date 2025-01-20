import { scaleLinear, scaleOrdinal, scaleSymlog, extent, line } from "d3";
import { regressionLinear } from "d3-regression";
import raw from "../../../collect/wcc2024.json";
import results from "../../../data/results.json";
import { Axis } from "./Axis";

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
  let timeSpent = lastClock - currentClock;
  
  // Check if we just crossed the first time control
  if (moveNumber === timeControl.firstTimeControl.moves) {
    timeSpent -= timeControl.firstTimeControl.time;
  }
  
  // Check if we're in increment phase
  if (moveNumber >= timeControl.increment.startMove) {
    timeSpent -= timeControl.increment.time;
  }
  
  return timeSpent;
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
  timeControl: TimeControl = WCC_2024_TIME_CONTROL
): ProcessedMove[][] {
  return rawData.map((game, gameIndex) => {
    const processedMoves: ProcessedMove[] = [];
    const moves = game.treeParts;
    if (!moves || moves.length === 0) return [];

    // Get player colors for this game from results
    // Skip first entry (index 0) in results
    const gameResult = results[gameIndex + 1];
    const whitePlayer = gameResult.white === "Gukesh D" ? "Gukesh" : "Ding";
    const blackPlayer = whitePlayer === "Gukesh" ? "Ding" : "Gukesh";

    // Add first move with null values for time and eval change
    processedMoves.push({
      time_spent: null,
      evalChange: null,
      ply: 1,
      side: 'w',
      san: moves[0].san,
      gameNumber: gameIndex + 1,
      moveNumber: 1,
      player: whitePlayer
    });

    // Initialize clock values from the first moves
    let lastWhiteClock = moves[0].clock;
    let lastBlackClock = moves[1].clock;

    // Process white's moves (starting from move 2)
    for (let i = 2; i < moves.length; i += 2) {
      const currentMove = moves[i];
      const previousOpponentMove = moves[i - 1];
      const moveNumber = Math.ceil(currentMove.ply / 2);
      
      if (!currentMove?.clock || !previousOpponentMove?.eval) continue;

      const time_spent = calculateTimeSpent(
        lastWhiteClock,
        currentMove.clock,
        moveNumber,
        timeControl
      );
      
      const currentEval = evalToCp(currentMove.eval);
      const previousEval = evalToCp(previousOpponentMove.eval);
      
      if (time_spent >= 0) { // Only add valid time spent values
        processedMoves.push({
          time_spent,
          evalChange: currentEval - previousEval, // White's perspective
          ply: currentMove.ply,
          side: 'w',
          san: currentMove.san,
          gameNumber: gameIndex + 1,
          moveNumber: moveNumber,
          player: whitePlayer
        });
      }

      lastWhiteClock = currentMove.clock;
    }

    // Process black's moves (starting from move 1)
    for (let i = 1; i < moves.length; i += 2) {
      const currentMove = moves[i];
      const previousOpponentMove = moves[i - 1];
      const moveNumber = Math.floor(currentMove.ply / 2);
      
      if (!currentMove?.clock || !previousOpponentMove?.eval) continue;

      const time_spent = calculateTimeSpent(
        lastBlackClock,
        currentMove.clock,
        moveNumber,
        timeControl
      );
      
      const currentEval = evalToCp(currentMove.eval);
      const previousEval = evalToCp(previousOpponentMove.eval);
      
      if (time_spent >= 0) { // Only add valid time spent values
        processedMoves.push({
          time_spent,
          evalChange: previousEval - currentEval, // White's perspective
          ply: currentMove.ply,
          side: 'b',
          san: currentMove.san,
          gameNumber: gameIndex + 1,
          moveNumber: moveNumber,
          player: blackPlayer
        });
      }

      lastBlackClock = currentMove.clock;
    }

    // Sort moves by ply to ensure correct order
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

  // Calculate trend line
  const regression = regressionLinear()
    .x(d => d.time_spent)
    .y(d => d.evalChange);
  
  const regressionLine = regression(validData);
  const trendData = regressionLine.map(([x, y]) => ({ x, y }));

  const trendLine = line<{x: number, y: number}>()
    .x(d => xScale(d.x))
    .y(d => yScale(d.y));

  // Color scale by game
//   const gameColorScale = scaleOrdinal<number, string>()
//     .domain(validData.map(d => d.gameNumber))
//     .range([
//       "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd",
//       "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf",
//       "#aec7e8", "#ffbb78", "#98df8a", "#ff9896", "#c5b0d5"
//     ]);

  // Player color scale
  const playerColorScale = scaleOrdinal<string, string>()
    .domain(["Gukesh", "Ding"])
    .range(["#1f77b4", "#ff7f0e"]);

  return (
    <svg width={width} height={height}>
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

      {/* Trend line */}
      <path
        d={trendLine(trendData) || undefined}
        stroke="black"
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
      <text
        x={width / 2}
        y={height - 5}
        textAnchor="middle"
      >
        Time Spent (ms)
      </text>
      <text
        transform={`translate(15, ${height/2}) rotate(-90)`}
        textAnchor="middle"
      >
        Evaluation Change (cp)
      </text>
    </svg>
  );
}

export function TimeVSEval() {
  const data = processGames(raw as ChessGame[]);
  console.log(data.map(d => d.filter(d => d.time_spent < 0)));
  
  return (
    <div>
      <h2>Time Spent vs Evaluation Change</h2>
      <ScatterPlot data={data} />
    </div>
  );
}
