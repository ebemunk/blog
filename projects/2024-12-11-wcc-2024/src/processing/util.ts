import { ChessGame, Evaluation, ProcessedMove, TimeControl } from "./types";

// WCC 2024 time control
export const WCC_2024_TIME_CONTROL: TimeControl = {
  mainTime: 120 * 60 * 1000, // 120 minutes in ms
  firstTimeControl: {
    moves: 40,
    time: 30 * 60 * 1000, // 30 minutes in ms
  },
  increment: {
    startMove: 41,
    time: 30 * 1000, // 30 seconds in ms
  },
};

// Helper function to calculate actual time spent considering time controls
export function calculateTimeSpent(
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
export function evalToCp(eval_?: Evaluation): number {
  if (!eval_) return 0;
  if (eval_.mate !== undefined) {
    // Convert mate score to centipawns
    // Positive mate is winning for white, negative for black
    // Use a large value (10000) minus number of moves to mate
    return Math.sign(eval_.mate) * (10000 - Math.abs(eval_.mate) * 100);
  }
  return eval_.cp || 0;
}

import results from "../../data/results.json";
import { scaleOrdinal } from "d3";
import { theme } from "../theme";

// Process raw data into the format we need
export function processTimeVSEval(
  rawData: ChessGame[],
  timeControl: TimeControl = WCC_2024_TIME_CONTROL,
  players: [string, string] = ["Gukesh", "Ding"]
): ProcessedMove<(typeof players)[number]>[][] {
  return rawData.map((game, gameIndex) => {
    const processedMoves: ProcessedMove<(typeof players)[number]>[] = [];
    const moves = game.treeParts;
    if (!moves || moves.length === 0) return [];

    // Get player colors for this game from results
    const gameResult = results[gameIndex + 1];
    const whitePlayer = gameResult.white?.includes(players[0])
      ? players[0]
      : players[1];
    const blackPlayer = whitePlayer === players[0] ? players[1] : players[0];

    // Process white's moves
    for (let i = 0; i < moves.length; i += 2) {
      const currentMove = moves[i];
      const previousMove = i > 0 ? moves[i - 2] : null; // Get previous move by same player
      const previousOpponentMove = i > 0 ? moves[i - 1] : null;
      const moveNumber = Math.ceil(currentMove.ply / 2);

      if (!currentMove?.clock) continue;

      const time_spent = previousMove
        ? calculateTimeSpent(
            previousMove.clock,
            currentMove.clock,
            moveNumber,
            timeControl
          )
        : null;

      const currentEval = evalToCp(currentMove.eval);
      const previousEval = previousOpponentMove
        ? evalToCp(previousOpponentMove.eval)
        : 0;

      processedMoves.push({
        time_spent,
        evalChange: currentEval - previousEval,
        ply: currentMove.ply,
        side: "w",
        san: currentMove.san,
        gameNumber: gameIndex + 1,
        moveNumber,
        player: whitePlayer,
      });
    }

    // Process black's moves
    for (let i = 1; i < moves.length; i += 2) {
      const currentMove = moves[i];
      const previousMove = i > 1 ? moves[i - 2] : null; // Get previous move by same player
      const previousOpponentMove = moves[i - 1];
      const moveNumber = Math.floor(currentMove.ply / 2);

      if (!currentMove?.clock) continue;

      const time_spent = previousMove
        ? calculateTimeSpent(
            previousMove.clock,
            currentMove.clock,
            moveNumber,
            timeControl
          )
        : null;

      const currentEval = evalToCp(currentMove.eval);
      const previousEval = evalToCp(previousOpponentMove.eval);

      processedMoves.push({
        time_spent,
        evalChange: previousEval - currentEval, // Flip for black's moves
        ply: currentMove.ply,
        side: "b",
        san: currentMove.san,
        gameNumber: gameIndex + 1,
        moveNumber,
        player: blackPlayer,
      });
    }

    return processedMoves.sort((a, b) => a.ply - b.ply);
  });
}

// Create a shared color scale that all components can use
export const playerColorScale = scaleOrdinal<string, string>().range([
  theme.colors.players.player1,
  theme.colors.players.player2,
]);
