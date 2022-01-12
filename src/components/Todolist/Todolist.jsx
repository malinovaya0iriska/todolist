import React from 'react';

import { Box } from '@mui/material';

import { AddItemModal } from '../AddItemModal';
import { StartInfo } from '../StartInfo';
import { TasksList } from '../TasksList';

import { style } from './styles';

export const Todolist = () => {
  const classes = style();
  return (
    <Box sx={classes.container}>
      <StartInfo />
      <TasksList />
      <AddItemModal />
    </Box>
  );
};
