import { ClientTypes } from './client/types';
import { all, takeLatest } from 'redux-saga/effects';
import { AuthTypes } from './auth/types';
import { authSignIn } from './auth/sagas';
import { fetchClient } from './client/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.AUTH_SIGN_IN_REQUEST, authSignIn),
    takeLatest(ClientTypes.USERS_FETCH_REQUEST, fetchClient)  
  ]);
}
