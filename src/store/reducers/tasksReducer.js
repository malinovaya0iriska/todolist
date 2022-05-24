import { produce } from 'immer';

import { TASK_STATUS } from '../../constants/baseConstants';
import {
  ADD_TASK,
  SET_TASKS,
  CHANGE_TASK_STATUS,
  DELETE_TASK,
  EDIT_TASK,
} from '../actions/constants';

const initialState = [];

export const tasksReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case SET_TASKS:
        return payload;
      case ADD_TASK: {
        draft.push({ ...payload, status: TASK_STATUS.TODO });
        break;
      }
      case DELETE_TASK: {
        const index = draft.findIndex((task) => task.id === payload.id);
        if (index !== -1) {
          draft.splice(index, 1);
        }
        break;
      }
      case EDIT_TASK: {
        const index = draft.findIndex((task) => task.id === payload.id);
        if (index !== -1) {
          draft[index].title = payload.title;
          draft[index].description = payload.description;
        }
        break;
      }
      case CHANGE_TASK_STATUS: {
        const index = draft.findIndex((task) => task.id === payload.id);
        if (index !== -1) {
          draft[index].status = payload.status;
        }
        break;
      }
      default:
        return state;
    }
  });
