import { TaskModel } from './modules/tasks/types';
import { Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';


import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistReducers from './persistReducers';

// eslint-disable-next-line import/extensions,import/no-unresolved
import { Auth } from './modules/auth/types';

export interface ApplicationState {
  auth: Auth;
  tasks: TaskModel
}

// eslint-disable-next-line no-console
const sagaMonitor = process.env.NODE_ENV === 'development' ?
// @ts-ignore
console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middleware = [sagaMiddleware];
// eslint-disable-next-line max-len
const store: Store<ApplicationState> = createStore(persistReducers(rootReducer), middleware);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
