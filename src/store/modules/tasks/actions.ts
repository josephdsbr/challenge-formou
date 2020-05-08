import { ClientTypes, UserModel, TasksResponseModel } from './types';
import { action } from 'typesafe-actions';

export const clientFetchUsersRequest = (id: number) => action(ClientTypes.USERS_FETCH_REQUEST);

export const clientFetchUsersSuccess = (data: UserModel[]) => action(ClientTypes.USERS_FETCH_SUCCESS, { data });

export const clientFetchUsersFailure = (error: Error) => action(ClientTypes.USERS_FETCH_FAILURE, { error });

export const clientFetchTasksRequest = () => action(ClientTypes.TASKS_FETCH_REQUEST);

export const clientFetchTasksSuccess = (data: TasksResponseModel[]) => action(ClientTypes.TASKS_FETCH_SUCCESS, { data });

export const clientFetchTasksFailure = (error: Error) => action(ClientTypes.TASKS_FETCH_FAILURE, { error });