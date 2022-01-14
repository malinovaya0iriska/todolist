import { Box } from '@mui/material';

import { ItemModal } from '../ItemModal';
import { SortBar } from '../SortBar';
import { TasksList } from '../TasksList';

import { style } from './styles';

export const Todolist = () => {
  const classes = style();
  return (
    <Box sx={classes.container}>
      <SortBar />
      <TasksList />
      <ItemModal buttonName={'Create'} edit={false} />
    </Box>
  );
};
