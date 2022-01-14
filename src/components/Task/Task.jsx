import React from 'react';

import { Card, CardContent, CardHeader, Typography } from '@mui/material';

import { TaskActionsBar } from '../TaskActionsBar/TaskActionsBar';

import { getStyles } from './getStyles';

export const Task = ({ taskData }) => {
  const styles = getStyles();
  const { id, title, description } = taskData;

  return (
    <Card elevation={3} sx={styles.container}>
      <CardHeader
        action={<TaskActionsBar id={id} title={title} description={description} />}
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
