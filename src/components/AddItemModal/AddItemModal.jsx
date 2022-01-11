import React, { useState } from 'react';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, Button, IconButton, Modal, Paper, TextField } from '@mui/material';

import { useInput } from '../../hooks/useInput';
import { useModal } from '../../hooks/useModal';

export const AddItemModal = () => {
  const { open, handleOpen, handleClose } = useModal();

  const { newTitle, error, onChange, onBlur, onKeyPress } = useInput(true);
  const { description, onDescriptionChange } = useInput(false);
  const [task, setTask] = useState({ title: '', description: '' });
  const onAddHandler = (e) => {
    e.preventDefault();
    setTask({ title: newTitle, description: description });
    console.log('SUBMIT');
    console.log(task);
  };
  const isDisabled = Boolean(error);
  return (
    <>
      <Button variant={'contained'} sx={{ padding: '10px 30px' }} onClick={handleOpen}>
        Create
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        <Paper
          elevation={5}
          sx={{
            padding: 5,
            display: 'grid',
            height: 350,
            gridTemplateRows: '.5fr 4fr',
          }}
        >
          <IconButton onClick={handleClose} sx={{ justifyContent: 'flex-end' }}>
            <HighlightOffIcon />
          </IconButton>

          <form onSubmit={onAddHandler} style={{ display: 'grid', rowGap: 4 }}>
            <TextField
              label={'Title'}
              variant={'outlined'}
              name={'title'}
              value={newTitle}
              onChange={onChange}
              helperText={error}
              error={!!error}
              onBlur={onBlur}
              onKeyPress={onKeyPress}
            />
            <TextField
              label={'Description'}
              multiline
              minRows={4}
              variant={'outlined'}
              name={'description'}
              value={description}
              onChange={onDescriptionChange}
            />

            <Box
              display={'grid'}
              justifyContent={'space-between'}
              gap={6}
              gridTemplateColumns={'1fr 1fr'}
              gridTemplateRows={'.6fr'}
              alignSelf={'flex-end'}
            >
              <Button variant={'contained'} color={'primary'} disabled={isDisabled}>
                Create
              </Button>
              <Button
                type={'submit'}
                color={'secondary'}
                variant={'contained'}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Box>
          </form>
        </Paper>
      </Modal>
    </>
  );
};
