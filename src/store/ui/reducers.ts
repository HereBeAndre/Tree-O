import { TGenericAction } from '../../schemas/actions_d';
import { TFormStep, TState } from '../../schemas/ui/ui_d';
import { TErrorType } from '../../schemas/errors_d';

import { generateDefaultError } from '../../utils/errors';
import { EFormStep } from '../../utils/constants';

import types from './types';

const initialDataState: TState = {
  formStep: EFormStep.STEP_1,
  error: generateDefaultError({ message: '' }),
};

const reducers = (state = initialDataState, action: TGenericAction<unknown>): TState => {
  switch (action.type) {
    case types.SET_FORM_STEP: {
      return {
        ...state,
        formStep: action.payload as TFormStep,
      };
    }
    case types.SET_ERROR: {
      return {
        ...state,
        error: action.payload as TErrorType,
      };
    }
    case types.CLEAR_ERROR: {
      return {
        ...state,
        error: initialDataState.error,
      };
    }
    default:
      return state;
  }
};

export default reducers;
