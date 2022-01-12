import React from 'react';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, Button, IconButton, Modal, Paper, TextField } from '@mui/material';

import { useForm } from '../../hooks/useForm';
import { useModal } from '../../hooks/useModal';

import { style } from './styles';

export const AddItemModal = () => {
  const classes = style();

  const { open, handleOpen, handleClose } = useModal();

  const { formFields, isDisabled, handleAddItem } = useForm();
  const { title, description } = formFields;

  const addItem = (e) => {
    handleAddItem(e);
    handleClose();
  };

  return (
    <Box sx={classes.container}>
      <Button variant={'contained'} sx={classes.button} onClick={handleOpen}>
        Create
      </Button>
      <Modal open={open} onClose={handleClose} sx={classes.modal}>
        <Paper elevation={5} sx={classes.paper}>
          <IconButton onClick={handleClose} sx={classes.closeButton}>
            <HighlightOffIcon />
          </IconButton>

          <form onSubmit={addItem} style={classes.form}>
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

            <Box sx={classes.buttonContainer}>
              <Button
                variant={'contained'}
                color={'primary'}
                disabled={isDisabled}
                onClick={addItem}
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
    </Box>
  );
};
