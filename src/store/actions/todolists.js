import { CHANGE_TODO_FILTER } from './constants';

export const filterTasks = (id, filter) => ({
  type: CHANGE_TODO_FILTER,
  payload: { id, filter },
});
