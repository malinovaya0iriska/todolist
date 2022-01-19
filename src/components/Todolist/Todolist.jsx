import { Box } from '@mui/material';

import { EMPTY_STRING } from '../../constants/baseConstants';
import { ItemModal } from '../ItemModal';
import { TasksList } from '../TasksList';

import { style } from './styles';

export const Todolist = () => {
  const classes = style();

  return (
    <Box sx={classes.container}>
      <TasksList />
      <ItemModal
        buttonName={'Create'}
        edit={false}
        itemTitle={EMPTY_STRING}
        itemDescription={EMPTY_STRING}
      />
    </Box>
  );
};
