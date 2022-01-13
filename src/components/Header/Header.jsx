import React from 'react';

import { AppBar, Typography } from '@mui/material';

import { getStyles } from './getStyles';

export const Header = () => {
  const styles = getStyles();
  return (
    <AppBar sx={styles.appbar}>
      <Typography variant={'h4'} sx={styles.heading}>
        Todo list
      </Typography>
    </AppBar>
  );
};
