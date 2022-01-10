import React from 'react';

import { AppBar, Grid, Typography } from '@mui/material';

import { AddItemModal } from './components/AddItemModal/AddItemModal';
import { StartInfo } from './components/StartInfo/StartInfo';
import { Task } from './components/Task/Task';

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
      <Task title={'test title'} />
      <Task title={'test title'} />
      <Grid item xs={7} textAlign={'right'}>
        <AddItemModal />
      </Grid>
    </Grid>
  );
};
