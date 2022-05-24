import { Paper, Typography } from '@mui/material';

import { getStyles } from './getStyles';

export const StartInfo = ({ text, bgColor }) => {
  const styles = getStyles();

  return (
    <Paper elevation={3} sx={{ ...styles.paper, ...bgColor }}>
      <Typography variant={'h6'} sx={styles.content}>
        {text}
      </Typography>
    </Paper>
  );
};
