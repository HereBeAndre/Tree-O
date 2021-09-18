import { combineReducers } from 'redux';

// import routing, { types as routingTypes } from './routing';
// import ui, { types as uiTypes } from './ui';
import formData, { types as formDataTypes } from './formData';

export default combineReducers({
  //   [routingTypes.prefix]: routing,
  //   [uiTypes.prefix]: ui,
  [formDataTypes.prefix]: formData,
});
