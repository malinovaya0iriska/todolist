import React from 'react';

import { Paper, Typography } from '@mui/material';

import { style } from './styles';

export const StartInfo = () => {
  const classes = style();
  return (
    <Paper elevation={3} sx={classes.paper}>
      <Typography variant={'h6'} sx={classes.content}>
        There are nothing here... Please create one
      </Typography>
    </Paper>
  );
};
