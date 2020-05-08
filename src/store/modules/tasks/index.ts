import { action } from 'typesafe-actions';
import { Reducer } from 'redux';
import { UserModel, TaskModel, ClientTypes } from './types';
const INITIAL_STATE: TaskModel = {
  users: null,
}

const reducer: Reducer<TaskModel> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientTypes.USERS_FETCH_REQUEST:
      return { ...state, loading: true };
    case ClientTypes.USERS_FETCH_SUCCESS:
      console.log(action);
      return { ...state, users: action.payload.data, loading: true};
    case ClientTypes.USERS_FETCH_FAILURE:
      return {...state, error: action.payload.error, loading: false}
    default:
      return state;
  }
}

export default reducer;