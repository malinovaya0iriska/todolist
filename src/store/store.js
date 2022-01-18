import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { tasksReducer } from './reducers/tasksReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
