import { nanoid } from 'nanoid';

import { TODOLIST_FILTERS } from '../../constants/baseConstants';
import { CHANGE_TODO_FILTER } from '../actions/constants';

const initialState = [{ id: nanoid(), title: 'Todolist', filter: TODOLIST_FILTERS.ALL }];

export const todoListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_TODO_FILTER:
      return state.map((todo) =>
        todo.id === payload.id ? { ...todo, filter: payload.filter } : todo,
      );
    default:
      return state;
  }
};
