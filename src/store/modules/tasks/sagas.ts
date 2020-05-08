import { action } from 'typesafe-actions';
import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { clientFetchUsersFailure, clientFetchUsersRequest, clientFetchUsersSuccess } from './actions';
// @ts-ignore
export function* fetchClient(action) {
  try {
    const { id } = action;
    const response = yield call(api.get, 'users');
    console.log(response)
    yield put(clientFetchUsersSuccess(response.data));
  } catch (err) {
    yield put(clientFetchUsersFailure(err))
  }
}
