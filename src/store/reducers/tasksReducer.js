import { ADD_TASK, DELETE_TASK, SET_TASKS } from '../actions/constants';

const initialState = [];

export const tasksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TASKS:
      return [...payload];
    case ADD_TASK:
      return [...state, { ...payload }];
    case DELETE_TASK:
      return state.filter((task) => task.id !== payload.id);
    default:
      return state;
  }
};
