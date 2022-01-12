import React from 'react';

import { AppBar, Typography } from '@mui/material';

import { style } from './styles';

export const Header = () => {
  const classes = style();
  return (
    <AppBar sx={classes.appbar}>
      <Typography variant={'h4'} sx={classes.heading}>
        Todolist
      </Typography>
    </AppBar>
  );
};
