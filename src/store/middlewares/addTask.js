import { tasksAPI } from '../../api/tasksAPI';
import { addTask } from '../actions';

export const addTaskTC = (title, description) => async (dispatch) => {
  try {
    const response = await tasksAPI.addTask(title, description);

    if (response.statusText === 'Created') {
      dispatch(addTask(response.data));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
