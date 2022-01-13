import React from 'react';

import { Paper, Typography } from '@mui/material';

import { getStyles } from './getStyles';

export const StartInfo = () => {
  const styles = getStyles();
  return (
    <Paper elevation={3} sx={styles.paper}>
      <Typography variant={'h6'} sx={styles.content}>
        There are nothing here... Please create one
      </Typography>
    </Paper>
  );
};
