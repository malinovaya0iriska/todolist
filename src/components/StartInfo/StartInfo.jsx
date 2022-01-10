import React from 'react';

import { Grid, Paper, Typography } from '@mui/material';

export const StartInfo = () => {
  return (
    <Grid item xs={7}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant={'h6'} component={'h2'} align={'center'}>
          There are nothing here... Please create one
        </Typography>
      </Paper>
    </Grid>
  );
};
