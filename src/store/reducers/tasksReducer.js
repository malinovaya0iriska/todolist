import { produce } from 'immer';
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

export const tasksReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case ADD_TASK: {
        draft.push({ ...payload, id: nanoid(), status: TASK_STATUS.TODO });
        break;
      }
      case DELETE_TASK: {
        const index = draft.findIndex((task) => task.id === payload.id);
        if (~index !== 1) {
          draft.splice(index, 1);
        }
        break;
      }
      case EDIT_TASK: {
        const index = draft.findIndex((task) => task.id === payload.id);
        if (~index !== 1) {
          draft[index].title = payload.title;
          draft[index].description = payload.description;
        }
        break;
      }
      case CHANGE_TASK_STATUS: {
        const index = draft.findIndex((task) => task.id === payload.id);
        if (~index !== 1) {
          draft[index].status = payload.status;
        }
        break;
      }
      default:
        return state;
    }
  });
