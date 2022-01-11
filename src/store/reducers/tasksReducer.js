import { v1 } from 'uuid';

import { ADD_TASK, DELETE_TASK } from '../actions/constants';

const initialState = [
  { id: v1(), title: 'TASK', description: 'have to do' },
  { id: v1(), title: 'TASK2', description: 'have to do' },
  { id: v1(), title: 'TASK3', description: 'have to do' },
];

export const tasksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return [...state, payload];
    case DELETE_TASK:
      return state.filter((task) => task.id !== payload.id);
    default:
      return state;
  }
};
