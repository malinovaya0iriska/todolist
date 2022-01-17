import { ADD_TASK, DELETE_TASK, EDIT_TASK } from './constants';

export const addTask = (newTask) => ({ type: ADD_TASK, payload: newTask });
export const deleteTask = (id) => ({ type: DELETE_TASK, payload: { id } });
export const editTask = (id, title, description) => ({
  type: EDIT_TASK,
  payload: { id, title, description },
});
