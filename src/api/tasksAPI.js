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
  editTask(id, title, description) {
    return instance.put(`tasks/${id}`, { title, description });
  },
  changeTaskStatus(id, status) {
    return instance.put(`tasks/${id}`, { status });
  },
};
