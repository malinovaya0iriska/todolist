import React from 'react';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { deleteTask } from '../../store/actions';
import { EditItemModal } from '../EditItemModal';

import { style } from './styles';

export const Task = ({ id, title, description }) => {
  const dispatch = useDispatch();
  const classes = style();

  const handleItemDelete = () => {
    dispatch(deleteTask(id));
  };

  return (
    <Card elevation={3} sx={classes.container}>
      <CardHeader
        action={
          <>
            <IconButton onClick={handleItemDelete}>
              <HighlightOffIcon sx={classes.closeButton} />
            </IconButton>

            <EditItemModal id={id} itemTitle={title} itemDescription={description} />
          </>
        }
        title={title}
      />
      <CardContent>
        <Typography variant={'body2'}>{description}</Typography>
      </CardContent>
    </Card>
  );
};
