import { produce } from 'immer';
import { nanoid } from 'nanoid';

import { ADD_TASK, DELETE_TASK } from '../actions/constants';

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

export const tasksReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case ADD_TASK: {
        draft.push({ ...payload, id: nanoid() });
        break;
      }
      case DELETE_TASK: {
        const index = state.findIndex((task) => task.id === payload.id);
        draft.splice(index, 1);
        break;
      }
      default:
        return state;
    }
  });
