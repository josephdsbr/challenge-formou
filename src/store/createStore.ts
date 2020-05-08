import {
  createStore, applyMiddleware, Reducer,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

export default (reducers: Reducer, middlewares: any) => {
  const enhancer = applyMiddleware(...middlewares);
  return createStore(reducers, composeWithDevTools(enhancer));
};
