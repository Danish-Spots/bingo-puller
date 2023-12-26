export interface BingoState {
  availableValues: number[];
  pulledValues: number[];
  currentValue: number;
}
export const InitialState: BingoState = {
  availableValues: [],
  pulledValues: [],
  currentValue: 0,
};

export interface AppState {
  bingoReducer: BingoState;
}
