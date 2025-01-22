export interface Evaluation {
  cp?: number;
  mate?: number;
}

export interface ChessMove {
  ply: number;
  eval?: Evaluation;
  clock: number;
  san: string;
}

export interface ChessGame {
  treeParts: ChessMove[];
}

export interface ProcessedMove<Players extends string> {
  time_spent: number | null;
  evalChange: number | null;
  ply: number;
  side: "w" | "b";
  san: string;
  gameNumber: number;
  moveNumber: number; // Chess move number (1. e4, 1... e5, 2. Nf3, etc)
  player: Players;
}

export interface TimeControl {
  mainTime: number; // Initial time in milliseconds
  firstTimeControl: {
    moves: number; // Number of moves for first time control
    time: number; // Time added after first time control in milliseconds
  };
  increment: {
    startMove: number; // Move number when increment starts
    time: number; // Increment per move in milliseconds
  };
}
