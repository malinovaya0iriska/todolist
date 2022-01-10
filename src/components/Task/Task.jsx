import React from 'react';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';

export const Task = ({ title }) => {
  return (
    <Grid item xs={7}>
      <Card elevation={3} sx={{ padding: 1 }}>
        <CardHeader
          action={
            <IconButton>
              <HighlightOffIcon />
            </IconButton>
          }
          title={title}
        />
        <CardContent>
          <Typography variant="body2" component="h3">
            Task description
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
