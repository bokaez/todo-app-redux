import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducer';
import { print1, print2, print3 } from './exampleAddons/middleware';

const composedEnhancer = composeWithDevTools(
  applyMiddleware(print1, print2, print3, thunkMiddleware)
);

const store = createStore(rootReducer, composedEnhancer);
export default store;
