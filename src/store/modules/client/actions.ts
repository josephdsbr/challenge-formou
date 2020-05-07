import { ClientTypes, UserModel } from './types';
import { action } from 'typesafe-actions';

export const clientFetchUsersRequest = () => action(ClientTypes.USERS_FETCH_REQUEST);

export const clientFetchUsersSuccess = (data: UserModel) => action(ClientTypes.USERS_FETCH_SUCCESS, { data });

export const clientFetchUsersFailure = (error: Error) => action(ClientTypes.USERS_FETCH_FAILURE, { error });
