import { TState } from '../../schemas/ui/ui_d';

import types from './types';

const getState = (state: TState): TState => state[types.prefix];

const getFormStep = (state: TState) => getState(state).formStep;

const getError = (state) => getState(state).error;

export default {
  getState,
  getFormStep,
  getError,
};
