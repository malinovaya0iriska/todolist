import { ADD_TASK, DELETE_TASK } from './constants';

export const addTask = (newTask) => ({ type: ADD_TASK, payload: newTask });
export const deleteTask = (id) => ({ type: DELETE_TASK, payload: { id } });
