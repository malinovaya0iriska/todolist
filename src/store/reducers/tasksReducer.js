import { produce } from 'immer';
import { nanoid } from 'nanoid';

import { ADD_TASK, DELETE_TASK, SET_TASKS, EDIT_TASK } from '../actions/constants';

const initialState = [];

export const tasksReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case SET_TASKS:
        return payload;
      case ADD_TASK: {
        draft.push({ ...payload, id: nanoid() });
        break;
      }
      case DELETE_TASK: {
        const index = state.findIndex((task) => task.id === payload.id);
        draft.splice(index, 1);
        break;
      }
      case EDIT_TASK: {
        const index = state.findIndex((task) => task.id === payload.id);
        draft[index].title = payload.title;
        draft[index].description = payload.description;
        break;
      }
      default:
        return state;
    }
  });
