import { State } from '../../schemas/formData/formData_d';
import { TDataMeta } from '../../schemas/generics_d';
import { TGenericAction } from '../../schemas/actions_d';

import types from './types';
import { defaultDataMeta } from '../../utils/metaActionGenerator';

const dataInitialState: State = {
  formData: {},
  firstStepFormMeta: { ...defaultDataMeta },
  secondStepFormMeta: { ...defaultDataMeta },
  thirdStepFormMeta: { ...defaultDataMeta },
};

const reducers = (state = dataInitialState, action: TGenericAction<unknown>): State => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducers;
