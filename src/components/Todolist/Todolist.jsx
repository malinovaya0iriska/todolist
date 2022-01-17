import { Box } from '@mui/material';

import { ItemModal } from '../ItemModal';
import { SortBar } from '../SortBar';
import { TasksList } from '../TasksList';

import { style } from './styles';

export const Todolist = ({ id, filter }) => {
  const classes = style();

  return (
    <Box sx={classes.container}>
      <SortBar activeFilter={filter} id={id} />
      <TasksList filter={filter} />
      <ItemModal buttonName={'Create'} edit={false} />
    </Box>
  );
};
