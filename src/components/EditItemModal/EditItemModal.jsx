import React from 'react';

import { ModeEditOutline } from '@mui/icons-material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, Button, IconButton, Modal, Paper, TextField } from '@mui/material';

import { useForm } from '../../hooks/useForm';
import { useModal } from '../../hooks/useModal';

import { style } from './styles';

export const EditItemModal = ({ id, itemTitle, itemDescription }) => {
  const classes = style();

  const { open, handleOpen, handleClose } = useModal();
  const { formFields, isDisabled, handleEditItem } = useForm(itemTitle, itemDescription);
  const { title, description } = formFields;

  const editItem = (e) => {
    handleEditItem(e, id);
    handleClose();
  };
  return (
    <Box sx={classes.container}>
      <IconButton onClick={handleOpen}>
        <ModeEditOutline />
      </IconButton>

      <Modal open={open} onClose={handleClose} sx={classes.modal}>
        <Paper elevation={5} sx={classes.paper}>
          <IconButton onClick={handleClose} sx={classes.closeButton}>
            <HighlightOffIcon />
          </IconButton>

          <form onSubmit={editItem} style={classes.form}>
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
              onBlur={description.onBlur}
            />

            <Box sx={classes.buttonContainer}>
              <Button
                variant={'contained'}
                color={'primary'}
                disabled={isDisabled}
                onClick={editItem}
              >
                Edit
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
