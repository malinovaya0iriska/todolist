import { Button, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';

import { TODOLIST_FILTERS } from '../../constants/baseConstants';
import { filterTasks } from '../../store/actions/todolists';

import { getStyles } from './getStyles';

export const SortBar = ({ id, activeFilter }) => {
  const styles = getStyles();
  const dispatch = useDispatch();

  const handleFilterAllClick = () => dispatch(filterTasks(id, TODOLIST_FILTERS.ALL));
  const handleFilterTodoClick = () => dispatch(filterTasks(id, TODOLIST_FILTERS.TODO));
  const handleFilterProgressClick = () =>
    dispatch(filterTasks(id, TODOLIST_FILTERS.PROGRESS));
  const handleFilterDoneClick = () => dispatch(filterTasks(id, TODOLIST_FILTERS.DONE));

  const filterAllButtonFinalClass =
    activeFilter === TODOLIST_FILTERS.ALL
      ? { ...styles.filterButton, ...styles.active }
      : styles.filterButton;

  const filterTodoButtonFinalClass =
    activeFilter === TODOLIST_FILTERS.TODO
      ? { ...styles.filterButton, ...styles.active }
      : styles.filterButton;

  const filterProgressButtonFinalClass =
    activeFilter === TODOLIST_FILTERS.PROGRESS
      ? { ...styles.filterButton, ...styles.active }
      : styles.filterButton;

  const filterDoneButtonFinalClass =
    activeFilter === TODOLIST_FILTERS.DONE
      ? { ...styles.filterButton, ...styles.active }
      : styles.filterButton;
  return (
    <Stack direction={'row'} spacing={2} sx={styles.container}>
      <Button
        variant={'contained'}
        sx={filterAllButtonFinalClass}
        onClick={handleFilterAllClick}
      >
        {TODOLIST_FILTERS.ALL}
      </Button>
      <Button
        variant={'contained'}
        sx={filterTodoButtonFinalClass}
        onClick={handleFilterTodoClick}
      >
        {TODOLIST_FILTERS.TODO}
      </Button>
      <Button
        variant={'contained'}
        sx={filterProgressButtonFinalClass}
        onClick={handleFilterProgressClick}
      >
        {TODOLIST_FILTERS.PROGRESS}
      </Button>
      <Button
        variant={'contained'}
        sx={filterDoneButtonFinalClass}
        onClick={handleFilterDoneClick}
      >
        {TODOLIST_FILTERS.DONE}
      </Button>
    </Stack>
  );
};
