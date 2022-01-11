import React from 'react';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, Button, IconButton, Modal, Paper, TextField } from '@mui/material';

import { useForm } from '../../hooks/useForm';
import { useModal } from '../../hooks/useModal';

import { useStyles } from './styles';

export const AddItemModal = () => {
  const classes = useStyles({
    test: 'example', // you can pass params here
  });
  const { open, handleOpen, handleClose } = useModal();

  const onAddHandler = (e) => {
    handleFormSubmit(e);
    handleClose();
  };

  const { formFields, isDisabled, handleFormSubmit } = useForm();
  const { title, description } = formFields;
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

          <form onSubmit={() => onAddHandler} style={{ display: 'grid', rowGap: 4 }}>
            <TextField
              label={'Title'}
              variant={'outlined'}
              name={'title'}
              value={title.value}
              onChange={title.onChange}
              helperText={title.error}
              error={!!title.error}
              onBlur={title.onBlur}
              onKeyPress={title.onKeyPress}
            />
            <TextField
              label={'Description'}
              multiline
              minRows={4}
              variant={'outlined'}
              name={'description'}
              value={description.value}
              onChange={description.onChange}
            />

            <Box className={classes.buttonContainer}>
              <Button
                variant={'contained'}
                color={'primary'}
                onClick={onAddHandler}
                disabled={isDisabled}
              >
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

export default AddItemModal;
