import { combineReducers, createStore } from 'redux';

import { tasksReducer } from './reducers/tasksReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export const store = createStore(rootReducer);
