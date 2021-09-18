import { State } from '../../schemas/formData/formData_d';

import types from './types';

const getState = (state: State): State => state[types.prefix];

// -------- GET META --------

const getFirstStepFormMetaStatus = (state) => getState(state).firstStepFormMeta.status;
const getSecondStepFormMetaStatus = (state) => getState(state).secondStepFormMeta.status;
const getThirdStepFormMetaStatus = (state) => getState(state).thirdStepFormMeta.status;

export default {
  getState,
  getFirstStepFormMetaStatus,
  getSecondStepFormMetaStatus,
  getThirdStepFormMetaStatus,
};
