const prefix: 'FORM_DATA' = 'FORM_DATA';

// ------ DO TYPES ------
const DO_SAVE_FORM_VALUES = `${prefix}.DO_SAVE_FORM_VALUES`;

// ------ SET DATA TYPES ------
const SET_STEP_ONE_FORM_DATA = `${prefix}.SET_STEP_ONE_FORM_DATA`;
const SET_STEP_TWO_FORM_DATA = `${prefix}.SET_STEP_TWO_FORM_DATA`;
const SET_STEP_THREE_FORM_DATA = `${prefix}.SET_STEP_THREE_FORM_DATA`;

// ------ SET META TYPES ------
const SET_STEP_ONE_FORM_META = `${prefix}.SET_STEP_ONE_FORM_META`;
const SET_STEP_TWO_FORM_META = `${prefix}.SET_STEP_TWO_FORM_META`;
const SET_STEP_THREE_FORM_META = `${prefix}.SET_STEP_THREE_FORM_META`;

// ------ SET CLEAN-UP ------
const SET_CLEAR_FORM_DATA = `${prefix}.SET_CLEAR_FORM_DATA`;

export default {
  prefix,
  DO_SAVE_FORM_VALUES,

  SET_STEP_ONE_FORM_DATA,
  SET_STEP_TWO_FORM_DATA,
  SET_STEP_THREE_FORM_DATA,

  SET_STEP_ONE_FORM_META,
  SET_STEP_TWO_FORM_META,
  SET_STEP_THREE_FORM_META,

  SET_CLEAR_FORM_DATA,
};
