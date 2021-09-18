import { TSaveFormValues } from '../../schemas/formData/formData_d';

import { metaActionGenerator } from '../../utils/metaActionGenerator';

import types from './types';

// -------- DO ACTIONS --------

const doSaveFormValues = (formValues: TSaveFormValues) => ({
  type: types.DO_SAVE_FORM_VALUES,
  payload: formValues,
});

// -------- SET ACTIONS --------

const setStepOneFormData = (values: TSaveFormValues) => ({
  type: types.SET_STEP_ONE_FORM_DATA,
  payload: values,
});

const setStepTwoFormData = (values: TSaveFormValues) => ({
  type: types.SET_STEP_TWO_FORM_DATA,
  payload: values,
});

const setStepThreeFormData = (values: TSaveFormValues) => ({
  type: types.SET_STEP_THREE_FORM_DATA,
  payload: values,
});

// -------- SET META ACTIONS --------

const setStepOneFormMeta = metaActionGenerator(types.SET_STEP_ONE_FORM_META);
const setStepTwoFormMeta = metaActionGenerator(types.SET_STEP_TWO_FORM_META);
const setStepThreeFormMeta = metaActionGenerator(types.SET_STEP_THREE_FORM_META);

export default {
  doSaveFormValues,

  setStepOneFormData,
  setStepTwoFormData,
  setStepThreeFormData,

  setStepOneFormMeta,
  setStepTwoFormMeta,
  setStepThreeFormMeta,
};
