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
import { useDispatch } from 'react-redux';

import { deleteTask } from '../../store/actions/tasks';

export const Task = ({ id, title, description }) => {
  const dispatch = useDispatch();

  const handleItemDelete = () => {
    dispatch(deleteTask(id));
  };

  return (
    <Grid item xs={7}>
      <Card elevation={3} sx={{ padding: 1 }}>
        <CardHeader
          action={
            <IconButton onClick={handleItemDelete}>
              <HighlightOffIcon />
            </IconButton>
          }
          title={title}
        />
        <CardContent>
          <Typography variant="body2" component="h3">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
