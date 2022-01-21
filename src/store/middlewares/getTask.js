import { tasksAPI } from '../../api/tasksAPI';

export const getTask = (id) => async () => {
  try {
    const response = await tasksAPI.getTask(id);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
