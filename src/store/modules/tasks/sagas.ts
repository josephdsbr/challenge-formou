import { action } from 'typesafe-actions';
import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { clientFetchUsersFailure, clientFetchUsersSuccess, 
  clientFetchTasksSuccess, clientFetchTasksFailure } from './actions';
// @ts-ignore
export function* fetchClient() {
  try {
    const response = yield call(api.get, 'users');
    yield put(clientFetchUsersSuccess(response.data));
  } catch (err) {
    yield put(clientFetchUsersFailure(err))
  }
}

export function* fetchTasks() {
  try {
    const response = yield call(api.get, 'todos');
    yield put(clientFetchTasksSuccess(response.data));
  } catch(err) {
    yield put(clientFetchTasksFailure(err));
  }
}
