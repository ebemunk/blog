export interface ProcessedMove {
  time_spent: number | null;
  evalChange: number | null;
  ply: number;
  side: 'w' | 'b';
  san: string;
  gameNumber: number;
  moveNumber: number;
  player: string;
} 