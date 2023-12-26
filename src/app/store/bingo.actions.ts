import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { BingoState } from './bingo.state';

export const bingoActionGroup = createActionGroup({
  source: 'Bingo actions',
  events: {
    'Get new current value': emptyProps(),
    'Reset state': emptyProps(),
    'Restore state': props<{ state: BingoState }>(),
  },
});
