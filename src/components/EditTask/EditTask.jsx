import { useEffect, useState } from 'react';

import { Box, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';

import { tasksAPI } from '../../api/tasksAPI';
import { useInput } from '../../hooks/useInput';
import { TaskSideBar } from '../TaskSideBar';

import { getStyles } from './getStyles';

export const EditTask = () => {
  const styles = getStyles();
  const { id } = useParams();

  const [currentTask, setCurrentTask] = useState(null);

  const { data, onChange } = useInput({
    title: currentTask?.title,
    description: currentTask?.description,
  });
  const { title, description } = data;

  useEffect(() => {
    (async () => {
      try {
        const response = await tasksAPI.getTask(id);
        setCurrentTask(response.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [id]);

  console.log('c', currentTask);
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
