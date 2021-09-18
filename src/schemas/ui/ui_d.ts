import { EFormStep } from '../../utils/constants';
import { TErrorType } from '../errors_d';

export type TFormStep = EFormStep.STEP_1 | EFormStep.STEP_2 | EFormStep.STEP_3;

export type TState = {
  formStep: TFormStep;
  error?: TErrorType;
};
