import { serializeError } from '../../utils/errors';
import types from './types';
import { TErrorType } from '../../schemas/errors_d';
import { TGenericAction, TSimpleAction } from '../../schemas/actions_d';
import { TFormStep } from '../../schemas/ui/ui_d';

const setFormStep = (formStep: TFormStep): TGenericAction<TFormStep> => ({
  type: types.SET_FORM_STEP,
  payload: formStep,
});

const setError = (error: Error): TGenericAction<TErrorType> => ({
  type: types.SET_ERROR,
  payload: serializeError(error),
});

const clearError = (): TSimpleAction => ({
  type: types.CLEAR_ERROR,
});

export default {
  setFormStep,
  setError,
  clearError,
};
