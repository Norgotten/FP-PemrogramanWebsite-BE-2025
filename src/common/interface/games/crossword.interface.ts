export interface ICrosswordCell {
  x: number;
  y: number;
  is_black: boolean;
  number?: number;
  value?: string;
  is_locked?: boolean;
}

export interface ICrosswordClue {
  number: number;
  question: string;
  answer: string;
  length: number;
  start_x: number;
  start_y: number;
}

export interface ICrosswordGameData {
  title: string;
  grid_rows: number;
  grid_cols: number;
  cells: ICrosswordCell[];
  clues: {
    across: ICrosswordClue[];
    down: ICrosswordClue[];
  };
}
