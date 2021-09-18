import { combineReducers } from 'redux';

import ui, { types as uiTypes } from './ui';
import formData, { types as formDataTypes } from './formData';

export default combineReducers({
  [uiTypes.prefix]: ui,
  [formDataTypes.prefix]: formData,
});
