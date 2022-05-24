import { Button, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';

import { TODOLIST_FILTERS } from '../../constants/baseConstants';
import { filterTasks } from '../../store/actions/todolists';

import { getStyles } from './getStyles';

export const SortBar = ({ id, activeFilter }) => {
  const styles = getStyles();
  const dispatch = useDispatch();

  return (
    <Stack direction={'row'} spacing={2} sx={styles.container}>
      {Object.entries(TODOLIST_FILTERS).map(([key, value]) => {
        const handleFilterClick = () => dispatch(filterTasks(id, value));

        const filterButtonFinalClass =
          activeFilter === value
            ? { ...styles.filterButton, ...styles.active }
            : styles.filterButton;

        return (
          <Button
            key={key}
            variant={'contained'}
            sx={filterButtonFinalClass}
            onClick={handleFilterClick}
          >
            {value}
          </Button>
        );
      })}
    </Stack>
  );
};
