import { tasksAPI } from '../../api/tasksAPI';
import { editTask } from '../actions';

export const updateTask = (id, title, description) => async (dispatch) => {
  //console.log(id, title, description);
  try {
    const response = await tasksAPI.editTask(id, title, description);

    if (response.statusText === 'OK') {
      dispatch(editTask(response.data));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
