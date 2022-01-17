import { nanoid } from 'nanoid';

import { TASK_STATUS } from '../../constants/baseConstants';
import {
  ADD_TASK,
  CHANGE_TASK_STATUS,
  DELETE_TASK,
  EDIT_TASK,
} from '../actions/constants';

const initialState = [
  {
    id: nanoid(),
    title: 'TASK',
    description: 'have to do',
    status: TASK_STATUS.PROGRESS,
  },
  {
    id: nanoid(),
    title: 'TASK2',
    description: 'have to do',
    status: TASK_STATUS.DONE,
  },
  { id: nanoid(), title: 'TASK3', description: 'have to do', status: TASK_STATUS.DONE },
  { id: nanoid(), title: 'TASK', description: 'have to do', status: TASK_STATUS.TODO },
  {
    id: nanoid(),
    title: 'TASK2',
    description: 'have to do',
    status: TASK_STATUS.PROGRESS,
  },
  {
    id: nanoid(),
    title: 'TASK3',
    description: 'have to do',
    status: TASK_STATUS.DONE,
  },
  {
    id: nanoid(),
    title: 'TASK',
    description: 'have to do',
    status: TASK_STATUS.PROGRESS,
  },
  { id: nanoid(), title: 'TASK2', description: 'have to do', status: TASK_STATUS.DONE },
  { id: nanoid(), title: 'TASK3', description: 'have to do', status: TASK_STATUS.TODO },
];

export const tasksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return [...state, { ...payload, id: nanoid(), status: TASK_STATUS.TODO }];
    case DELETE_TASK:
      return state.filter((task) => task.id !== payload.id);
    case EDIT_TASK:
    case CHANGE_TASK_STATUS:
      return state.map((task) =>
        task.id === payload.id ? { ...task, ...payload } : task,
      );
    default:
      return state;
  }
};
