import { nanoid } from 'nanoid';

import { ADD_TASK, DELETE_TASK, EDIT_TASK } from '../actions/constants';

const initialState = [
  { id: nanoid(), title: 'TASK', description: 'have to do' },
  {
    id: nanoid(),
    title: 'TASK2',
    description: 'have to do',
  },
  { id: nanoid(), title: 'TASK3', description: 'have to do' },
  { id: nanoid(), title: 'TASK', description: 'have to do' },
  { id: nanoid(), title: 'TASK2', description: 'have to do' },
  {
    id: nanoid(),
    title: 'TASK3',
    description: 'have to do',
  },
  { id: nanoid(), title: 'TASK', description: 'have to do' },
  { id: nanoid(), title: 'TASK2', description: 'have to do' },
  { id: nanoid(), title: 'TASK3', description: 'have to do' },
];

export const tasksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return [...state, payload];
    case DELETE_TASK:
      return state.filter((task) => task.id !== payload.id);
    case EDIT_TASK:
      return state.map((task) =>
        task.id === payload.id ? { ...task, ...payload } : task,
      );
    default:
      return state;
  }
};
