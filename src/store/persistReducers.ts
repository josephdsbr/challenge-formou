import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { Reducer } from 'redux';

export default (reducers: Reducer) => persistReducer(
  {
    key: 'desafio-formou',
    storage,
    whitelist: ['auth', 'tasks'],
  },
  reducers,
);
