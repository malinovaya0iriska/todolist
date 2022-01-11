import React from 'react';

import { AppBar, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import AddItemModal from './components/AddItemModal';
import { Task } from './components/Task/Task';

export const App = () => {
  const tasks = useSelector((state) => state.tasks);
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
      {/* <StartInfo />*/}
      {tasks.map(({ id, title, description }) => (
        <Task key={id} id={id} title={title} description={description} />
      ))}
      <Grid item xs={7} textAlign={'right'}>
        <AddItemModal />
      </Grid>
    </Grid>
  );
};
