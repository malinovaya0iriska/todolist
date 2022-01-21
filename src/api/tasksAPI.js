import { instance } from './apiConfig';

export const tasksAPI = {
  getTasks() {
    return instance.get(`tasks/`);
  },
  deleteTask(id) {
    return instance.delete(`tasks/${id}`);
  },
  addTask(title, description) {
    return instance.post(`tasks/`, { title, description });
  },
  getTask(id) {
    return instance.get(`tasks/${id}`);
  },
};
