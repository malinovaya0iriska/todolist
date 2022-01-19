import { ADD_TASK, CHANGE_TASK_STATUS, DELETE_TASK, EDIT_TASK } from './constants';

export const addTask = (newTaskContent) => ({ type: ADD_TASK, payload: newTaskContent });
export const deleteTask = (id) => ({ type: DELETE_TASK, payload: { id } });
export const editTask = (id, title, description) => ({
  type: EDIT_TASK,
  payload: { id, title, description },
});
export const changeTaskStatus = (id, status) => ({
  type: CHANGE_TASK_STATUS,
  payload: { id, status },
});
