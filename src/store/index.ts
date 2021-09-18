import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

import sagas from './saga';
import types from './types';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(sagas);

// window.addEventListener(AppEvents.LOGOUT, () => {
//   // @ts-ignore
//   store.dispatch(actions.logout()) as TGenericAction<unknown>;
// });

export { store, types };
