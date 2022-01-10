import { AppBar, Grid, Typography } from '@mui/material';

import { StartInfo } from './components/StartInfo/StartInfo';

export const App = () => {
  return (
    <Grid container rowSpacing={4} justifyContent={'center'} alignItems={'center'}>
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
    </Grid>
  );
};
