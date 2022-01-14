import React from 'react';

import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

import { TASK_QUANTITY } from '../../constants/baseConstants';
import { getTasks } from '../../store/selectors';
import { StartInfo } from '../StartInfo';
import { Task } from '../Task';

export const TasksList = () => {
  const tasks = useSelector(getTasks);

  const tasksForRender = tasks.slice(-TASK_QUANTITY);
  return (
    <Box>
      {tasks.length === 0 ? (
        <StartInfo />
      ) : (
        tasksForRender.map((task) => <Task key={task.id} taskData={task} />)
      )}
    </Box>
  );
};
