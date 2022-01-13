import React from 'react';

import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

import { getTasks } from '../../store/selectors';
import { StartInfo } from '../StartInfo';
import { Task } from '../Task';

export const TasksList = () => {
  const tasks = useSelector(getTasks);

  const tasksForRender = tasks.slice(-5);
  return (
    <Box>
      {tasks.length === 0 ? (
        <StartInfo />
      ) : (
        tasksForRender.map(({ id, title, description }) => (
          <Task key={id} id={id} title={title} description={description} />
        ))
      )}
    </Box>
  );
};
