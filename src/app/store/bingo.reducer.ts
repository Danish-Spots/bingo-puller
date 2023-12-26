import { createReducer, on } from '@ngrx/store';
import { InitialState } from './bingo.state';
import { bingoActionGroup } from './bingo.actions';
import { state } from '@angular/animations';
import { GenerateValues, getRandomInt, utterNumber } from '../functions';

export const bingoReducer = createReducer(
  InitialState,
  on(bingoActionGroup.resetState, (state) => {
    const newState = {
      availableValues: GenerateValues(90),
      pulledValues: [],
      currentValue: 0,
    };
    localStorage.setItem('bingo-state', JSON.stringify(newState));
    return newState;
  }),
  on(bingoActionGroup.getNewCurrentValue, (state) => {
    // generate random index
    const randomIndex = getRandomInt(state.availableValues.length);
    const newState = { ...state };
    // push CurrentValue to pulledValues
    if (newState.currentValue !== 0)
      newState.pulledValues = [...newState.pulledValues, newState.currentValue];
    // splice out number and set to current Value
    const newCurrentValue = newState.availableValues[randomIndex];
    newState.availableValues = newState.availableValues.filter(
      (_, index) => index !== randomIndex
    );
    newState.currentValue = newCurrentValue;
    utterNumber(newState.currentValue);

    localStorage.setItem('bingo-state', JSON.stringify(newState));
    return newState;
  })
);
