import { action } from 'typesafe-actions';
import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { clientFetchUsersFailure, clientFetchUsersRequest, clientFetchUsersSuccess } from './actions';

export function* fetchClient() {
  try {
    const response = yield call(api.get, 'users');
    yield put(clientFetchUsersSuccess(response));
  } catch (err) {
    yield put(clientFetchUsersFailure(err))
  }
}
