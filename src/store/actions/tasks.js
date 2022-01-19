import { ADD_TASK, DELETE_TASK, EDIT_TASK, SET_TASKS } from './constants';

export const setTasks = (data) => ({ type: SET_TASKS, payload: data });
export const addTask = (newTask) => ({ type: ADD_TASK, payload: newTask });
export const deleteTask = (id) => ({ type: DELETE_TASK, payload: { id } });
export const editTask = (id, title, description) => ({
  type: EDIT_TASK,
  payload: { id, title, description },
});
