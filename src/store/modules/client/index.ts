import { action } from 'typesafe-actions';
import { Reducer } from 'redux';
import { UserModel, ClientModel, ClientTypes } from './types';
const INITIAL_STATE: ClientModel = {
  users: [],
}

const reducer: Reducer<ClientModel> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientTypes.USERS_FETCH_REQUEST:
      return { ...state, loading: true };
    case ClientTypes.USERS_FETCH_SUCCESS:
      return { ...state, users: action.payload, loading: false};
    case ClientTypes.USERS_FETCH_FAILURE:
      return {...state, error: action.payload, loading: false}
    default:
      return state;
  }
}

export default reducer;