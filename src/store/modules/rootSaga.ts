import { ClientTypes } from './tasks/types';
import { all, takeLatest } from 'redux-saga/effects';
import { AuthTypes } from './auth/types';
import { authSignIn } from './auth/sagas';
import { fetchClient, fetchTasks } from './tasks/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(ClientTypes.USERS_FETCH_REQUEST, fetchClient),
    takeLatest(AuthTypes.AUTH_SIGN_IN_REQUEST, authSignIn),
    takeLatest(ClientTypes.USERS_FETCH_SUCCESS, fetchTasks)
  ]);
}
