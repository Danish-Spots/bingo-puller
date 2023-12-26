import { createSelector } from '@ngrx/store';
import { AppState } from './bingo.state';
import { state } from '@angular/animations';

const getState = (state: AppState) => state.bingoReducer;

export const selectAvailableValues = createSelector(
  getState,
  (state) => state.availableValues
);

export const selectAvailableValuesLength = createSelector(
  selectAvailableValues,
  (values) => values.length
);

export const selectPulledValues = createSelector(
  getState,
  (state) => state.pulledValues
);

export const selectCurrentValue = createSelector(
  getState,
  (state) => state.currentValue
);

export const selectShowResetButton = createSelector(
  getState,
  (state) => state.availableValues.length === 0
);
