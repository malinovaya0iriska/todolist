import { combineReducers, createStore } from 'redux';

import { tasksReducer } from './reducers/tasksReducer';
import { todoListReducer } from './reducers/todoListReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  todoLists: todoListReducer,
});

export const store = createStore(rootReducer);
