import { Box } from '@mui/material';

import { ItemModal } from '../ItemModal';
import { TasksList } from '../TasksList';

import { style } from './styles';

export const Todolist = () => {
  const classes = style();

  return (
    <Box sx={classes.container}>
      <TasksList />
      <ItemModal buttonName={'Create'} edit={false} />
    </Box>
  );
};
