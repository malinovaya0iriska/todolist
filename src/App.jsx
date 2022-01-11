import React from 'react';

import { AppBar, Grid, Typography } from '@mui/material';
import { v1 } from 'uuid';

import { AddItemModal } from './components/AddItemModal/AddItemModal';
import { StartInfo } from './components/StartInfo/StartInfo';
import { Task } from './components/Task/Task';

const tasks = [
  { id: v1(), title: 'TASK', description: 'have to do' },
  { id: v1(), title: 'TASK2', description: 'have to do' },
  { id: v1(), title: 'TASK3', description: 'have to do' },
];

export const App = () => {
  return (
    <Grid container spacing={4} justifyContent={'center'} alignItems={'center'}>
      <Grid item xs={12}>
        <AppBar position={'static'}>
          <Typography
            variant={'h4'}
            component={'h1'}
            align={'center'}
            sx={{ padding: 2 }}
          >
            Todolist
          </Typography>
        </AppBar>
      </Grid>
      <StartInfo />
      {tasks.map(({ id, title, description }) => (
        <Task key={id} title={title} description={description} />
      ))}
      <Grid item xs={7} textAlign={'right'}>
        <AddItemModal />
      </Grid>
    </Grid>
  );
};
