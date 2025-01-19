import raw from "../../../collect/wcc2024.json";

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
  side: 'white' | 'black';
  san: string;
  gameNumber: number;
  moveNumber: number;  // Chess move number (1. e4, 1... e5, 2. Nf3, etc)
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
function processGames(rawData: ChessGame[]): ProcessedMove[][] {
  return rawData.map((game, gameIndex) => {
    const processedMoves: ProcessedMove[] = [];
    const moves = game.treeParts;
    if (!moves || moves.length === 0) return [];

    // Add first move with null values for time and eval change
    processedMoves.push({
      time_spent: null,
      evalChange: null,
      ply: 1,
      side: 'white',
      san: moves[0].san,
      gameNumber: gameIndex + 1,
      moveNumber: 1
    });

    // Track last clock time for each player
    let lastWhiteClock = moves[0].clock;
    let lastBlackClock = moves[1].clock;

    // Process white's moves (starting from move 2)
    for (let i = 2; i < moves.length; i += 2) {
      const currentMove = moves[i];
      const previousOpponentMove = moves[i - 1];
      
      // Skip if missing required data
      if (!currentMove?.clock || !previousOpponentMove?.eval) continue;

      const time_spent = lastWhiteClock - currentMove.clock;
      const currentEval = evalToCp(currentMove.eval);
      const previousEval = evalToCp(previousOpponentMove.eval);
      
      processedMoves.push({
        time_spent,
        evalChange: currentEval - previousEval, // White's perspective
        ply: currentMove.ply,
        side: 'white',
        san: currentMove.san,
        gameNumber: gameIndex + 1,
        moveNumber: Math.ceil(currentMove.ply / 2)
      });

      lastWhiteClock = currentMove.clock;
    }

    // Process black's moves (starting from move 1)
    for (let i = 1; i < moves.length; i += 2) {
      const currentMove = moves[i];
      const previousOpponentMove = moves[i - 1];
      
      // Skip if missing required data
      if (!currentMove?.clock || !previousOpponentMove?.eval) continue;

      const time_spent = lastBlackClock - currentMove.clock;
      const currentEval = evalToCp(currentMove.eval);
      const previousEval = evalToCp(previousOpponentMove.eval);
      
      processedMoves.push({
        time_spent,
        evalChange: previousEval - currentEval, // White's perspective: a positive change means White is doing better
        ply: currentMove.ply,
        side: 'black',
        san: currentMove.san,
        gameNumber: gameIndex + 1,
        moveNumber: Math.floor(currentMove.ply / 2)
      });

      lastBlackClock = currentMove.clock;
    }

    // Sort moves by ply to ensure correct order
    return processedMoves.sort((a, b) => a.ply - b.ply);
  });
}

export function TimeVSEval() {
  const data = processGames(raw as ChessGame[]);
  console.log("Processed data:", data);
  console.log(raw[0].treeParts);

  return <div>TimeVSEval</div>;
}
