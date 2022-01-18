import { ADD_TASK, DELETE_TASK, SET_TASKS } from './constants';

export const setTasks = (data) => ({ type: SET_TASKS, payload: data });
export const addTask = (newTask) => ({ type: ADD_TASK, payload: newTask });
export const deleteTask = (id) => ({ type: DELETE_TASK, payload: { id } });
