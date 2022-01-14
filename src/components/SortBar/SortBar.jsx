import { Button, Stack } from '@mui/material';

import { TASK_FILTERS } from '../../constants/baseConstants';

import { getStyles } from './getStyles';

export const SortBar = () => {
  const styles = getStyles();

  const handleFilterClick = () => {};

  return (
    <Stack direction={'row'} spacing={2} sx={styles.container}>
      <Button variant={'contained'} sx={styles.filterButton} onClick={handleFilterClick}>
        {TASK_FILTERS.ALL}
      </Button>
      <Button variant={'contained'} sx={styles.filterButton} onClick={handleFilterClick}>
        {TASK_FILTERS.TODO}
      </Button>
      <Button variant={'contained'} sx={styles.filterButton} onClick={handleFilterClick}>
        {TASK_FILTERS.PROGRESS}
      </Button>
      <Button variant={'contained'} sx={styles.filterButton} onClick={handleFilterClick}>
        {TASK_FILTERS.DONE}
      </Button>
    </Stack>
  );
};
