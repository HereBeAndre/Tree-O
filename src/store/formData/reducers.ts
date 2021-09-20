import storage from 'redux-persist/lib/storage';
import {
  State,
  TStepOneFormValues,
  TStepThreeFormValues,
  TStepTwoFormValues,
} from '../../schemas/formData/formData_d';
import { TDataMeta } from '../../schemas/generics_d';
import { TGenericAction } from '../../schemas/actions_d';

import { defaultDataMeta } from '../../utils/metaActionGenerator';

import types from './types';

const dataInitialState: State = {
  firstStepFormData: { name: '' },
  secondStepFormData: { country: '' },
  thirdStepFormData: { tree: '' },
  firstStepFormMeta: { ...defaultDataMeta },
  secondStepFormMeta: { ...defaultDataMeta },
  thirdStepFormMeta: { ...defaultDataMeta },
};

const reducers = (state = dataInitialState, action: TGenericAction<unknown>): State => {
  switch (action.type) {
    case types.SET_STEP_ONE_FORM_DATA:
      return { ...state, firstStepFormData: action.payload as TStepOneFormValues };
    case types.SET_STEP_TWO_FORM_DATA:
      return { ...state, secondStepFormData: action.payload as TStepTwoFormValues };
    case types.SET_STEP_THREE_FORM_DATA:
      return { ...state, thirdStepFormData: action.payload as TStepThreeFormValues };
    case types.SET_STEP_ONE_FORM_META:
      return { ...state, firstStepFormMeta: action.payload as TDataMeta };
    case types.SET_STEP_TWO_FORM_META:
      return { ...state, secondStepFormMeta: action.payload as TDataMeta };
    case types.SET_STEP_THREE_FORM_META:
      return { ...state, thirdStepFormMeta: action.payload as TDataMeta };
    case types.SET_CLEAR_FORM_DATA:
      storage.removeItem('persist:root');
      return dataInitialState;
    default:
      return state;
  }
};

export default reducers;
