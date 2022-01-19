import { Box, TextField } from '@mui/material';

import { useInput } from '../../hooks/useInput';
import { TaskSideBar } from '../TaskSideBar';

import { getStyles } from './getStyles';

export const EditTask = () => {
  const styles = getStyles();

  const { data, onChange } = useInput();
  const { title, description } = data;

  return (
    <Box sx={styles.container}>
      <TaskSideBar />
      <Box sx={styles.form}>
        <TextField
          margin={'normal'}
          fullWidth
          label={'Title'}
          variant={'outlined'}
          name={'title'}
          value={title}
          onChange={onChange}
          sx={styles.textField}
        />
        <TextField
          margin={'normal'}
          fullWidth
          label={'Description'}
          multiline
          minRows={17}
          variant={'outlined'}
          name={'description'}
          value={description}
          onChange={onChange}
          sx={styles.textField}
        />
      </Box>
    </Box>
  );
};
