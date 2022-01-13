import React from 'react';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, Button, IconButton, Modal, Paper, TextField } from '@mui/material';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { useModal } from '../../hooks/useModal';
import { addTask, editTask } from '../../store/actions';

import { EditIcon } from './EditItemIcon';
import { getStyles } from './getStyles';

export const ItemModal = ({ buttonName, edit }) => {
  const dispatch = useDispatch();

  const styles = getStyles();

  const { open, handleOpen, handleClose } = useModal();

  const { formFields, isDisabled } = useForm();
  const { title, description } = formFields;

  const handleAddItem = () => {
    dispatch(
      addTask({ id: nanoid(), title: title.value, description: description.value }),
    );
    handleClose();
  };

  const handleEditItem = (id) => {
    dispatch(editTask(id, title.value, description.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    edit ? handleEditItem(e) : handleAddItem(e);
  };

  return (
    <Box sx={styles.container}>
      {edit ? (
        <IconButton onClick={handleOpen} sx={styles.editButton}>
          <EditIcon />
        </IconButton>
      ) : (
        <Button variant={'contained'} sx={styles.button} onClick={handleOpen}>
          {buttonName}
        </Button>
      )}
      <Modal open={open} onClose={handleClose} sx={styles.modal}>
        <Paper elevation={5} sx={styles.paper}>
          <IconButton onClick={handleClose} sx={styles.closeButton}>
            <HighlightOffIcon sx={styles.icon} />
          </IconButton>
          <form onSubmit={handleSubmit} style={styles.form}>
            <TextField
              margin={'normal'}
              fullWidth
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
              margin={'normal'}
              fullWidth
              label={'Description'}
              multiline
              minRows={4}
              maxRows={7}
              variant={'outlined'}
              name={'description'}
              value={description.value}
              onChange={description.onChange}
            />

            <Box sx={styles.buttonContainer}>
              <Button
                type={'submit'}
                variant={'contained'}
                color={'primary'}
                disabled={isDisabled}
                sx={styles.confirmButton}
                onClick={handleSubmit}
              >
                {buttonName}
              </Button>
              <Button
                color={'secondary'}
                variant={'contained'}
                onClick={handleClose}
                sx={styles.cancelButton}
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
