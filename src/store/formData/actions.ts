import { TGenericAction, TSimpleAction } from '../../schemas/actions_d';
import { TSaveFormValues } from '../../schemas/formData/formData_d';

import { metaActionGenerator } from '../../utils/metaActionGenerator';

import types from './types';

// -------- DO ACTIONS --------

const doSaveFormValues = (formValues: TSaveFormValues): TGenericAction<TSaveFormValues> => ({
  type: types.DO_SAVE_FORM_VALUES,
  payload: formValues,
});

// -------- SET ACTIONS --------

const setStepOneFormData = (values: TSaveFormValues): TGenericAction<TSaveFormValues> => ({
  type: types.SET_STEP_ONE_FORM_DATA,
  payload: values,
});

const setStepTwoFormData = (values: TSaveFormValues): TGenericAction<TSaveFormValues> => ({
  type: types.SET_STEP_TWO_FORM_DATA,
  payload: values,
});

const setStepThreeFormData = (values: TSaveFormValues): TGenericAction<TSaveFormValues> => ({
  type: types.SET_STEP_THREE_FORM_DATA,
  payload: values,
});

// -------- SET META ACTIONS --------

const setStepOneFormMeta = metaActionGenerator(types.SET_STEP_ONE_FORM_META);
const setStepTwoFormMeta = metaActionGenerator(types.SET_STEP_TWO_FORM_META);
const setStepThreeFormMeta = metaActionGenerator(types.SET_STEP_THREE_FORM_META);

const setClearFormData = (): TSimpleAction => ({
  type: types.SET_CLEAR_FORM_DATA,
});

export default {
  doSaveFormValues,

  setStepOneFormData,
  setStepTwoFormData,
  setStepThreeFormData,

  setStepOneFormMeta,
  setStepTwoFormMeta,
  setStepThreeFormMeta,

  setClearFormData,
};
