import { tasksAPI } from '../../api/tasksAPI';
import { deleteTask } from '../actions';

export const removeTask = (id) => async (dispatch) => {
  try {
    const response = await tasksAPI.deleteTask(id);

    if (response.statusText === 'OK') {
      dispatch(deleteTask(id));
    } else {
      // eslint-disable-next-line no-alert
      alert(response.statusText);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
