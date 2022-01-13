import React from 'react';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { deleteTask } from '../../store/actions';
import { ItemModal } from '../ItemModal';

import { getStyles } from './getStyles';

export const Task = ({ id, title, description }) => {
  const dispatch = useDispatch();
  const styles = getStyles();

  const handleItemDelete = () => {
    dispatch(deleteTask(id));
  };

  return (
    <Card elevation={3} sx={styles.container}>
      <CardHeader
        action={
          <>
            <IconButton onClick={handleItemDelete}>
              <HighlightOffIcon sx={styles.closeButton} />
            </IconButton>

            <ItemModal
              id={id}
              itemTitle={title}
              itemDescription={description}
              edit={true}
              buttonName={'Edit'}
            />
          </>
        }
        titleTypographyProps={styles.cardHeader}
        title={title}
      />
      <CardContent>
        <Typography variant={'body2'} sx={styles.cardContent}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
