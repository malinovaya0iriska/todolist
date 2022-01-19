import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';
import { TaskActionsBar } from '../TaskActionsBar';

import { getStyles } from './getStyles';

export const Task = ({ taskData }) => {
  const navigate = useNavigate();
  const styles = getStyles();

  const { id, title, description } = taskData;

  const handleChangeMode = () => {
    navigate(`${ROUTES.TASK}${id}`);
  };

  return (
    <Card elevation={3} sx={styles.container} onDoubleClick={handleChangeMode}>
      <CardHeader
        action={<TaskActionsBar id={taskData.id} />}
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
