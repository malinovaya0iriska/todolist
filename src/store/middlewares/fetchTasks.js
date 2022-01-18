import { tasksAPI } from '../../api/tasksAPI';
import { setTasks } from '../actions';

export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await tasksAPI.getTasks();

    dispatch(setTasks(response.data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
