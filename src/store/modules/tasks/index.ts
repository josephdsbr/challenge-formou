import { Reducer } from 'redux';
import { TaskModel, ClientTypes, TasksResponseModel, TasksItemModel } from './types';
const INITIAL_STATE: TaskModel = {
  users: [],
  items: [],
}

const reducer: Reducer<TaskModel> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientTypes.USERS_FETCH_REQUEST:
      return { ...state, loading: true };
    case ClientTypes.USERS_FETCH_SUCCESS:
      return { ...state, users: action.payload.data, loading: true};
    case ClientTypes.USERS_FETCH_FAILURE:
      return {...state, error: action.payload.error, loading: false}
    case ClientTypes.TASKS_FETCH_SUCCESS:
      const { users } = state;
      const { data } = action.payload; 
      const tasks: TasksItemModel[] = [];
      data?.map((task: TasksResponseModel) => {
        const index = users?.findIndex(user => user.id === task.userId);
        if (index) {
          const user = users![index];
          tasks.push({ id: task.id, user, title: task.title, completed: task.completed })
        }
      })
      return {...state, items: tasks}
    default:
      return state;
  }
}

export default reducer;