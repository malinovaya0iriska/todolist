import { useEffect } from 'react';

import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { TASK_QUANTITY } from '../../constants/baseConstants';
import { fetchTasks } from '../../store/middlewares/';
import { getTasks } from '../../store/selectors';
import { StartInfo } from '../StartInfo';
import { Task } from '../Task';

export const TasksList = () => {
  const tasks = useSelector(getTasks);
  const dispatch = useDispatch();

  const tasksForRender = tasks.slice(-TASK_QUANTITY);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Box>
      {tasksForRender.length === 0 ? (
        <StartInfo text={'There are nothing here... Please create one'} />
      ) : (
        tasksForRender.map((task) => <Task key={task.id} taskData={task} />)
      )}
    </Box>
  );
};
