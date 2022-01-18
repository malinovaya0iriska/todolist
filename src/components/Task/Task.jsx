import { Card, CardContent, CardHeader, Typography } from '@mui/material';

import { TaskActionsBar } from '../TaskActionsBar';

import { getStyles } from './getStyles';

export const Task = ({ taskData }) => {
  const styles = getStyles();
  const { title, description } = taskData;

  return (
    <Card elevation={3} sx={styles.container}>
      <CardHeader
        action={<TaskActionsBar taskData={taskData} />}
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
