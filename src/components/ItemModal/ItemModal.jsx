import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, Button, IconButton, Modal, Paper, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';

import { useInput } from '../../hooks/useInput';
import { useModal } from '../../hooks/useModal';
import { addTask, editTask } from '../../store/actions';

import { EditIcon } from './EditItemIcon';
import { getStyles } from './getStyles';

export const ItemModal = ({ buttonName, edit, id, itemTitle, itemDescription }) => {
  const dispatch = useDispatch();
  const styles = getStyles();

  const { open, handleOpen, handleClose } = useModal();
  const { data, onChange, resetInput } = useInput({
    title: itemTitle,
    description: itemDescription,
  });
  const { title, description } = data;

  const handleAddItem = () => {
    dispatch(addTask({ ...data }));
    resetInput();
  };

  const handleEditItem = (id) => {
    dispatch(editTask(id, title, description));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    edit ? handleEditItem(id) : handleAddItem();
    handleClose();
  };

  const handleCancel = () => {
    resetInput();
    handleClose();
  };

  return (
    <Box sx={styles.container}>
      {edit ? (
        <IconButton onClick={handleOpen} sx={styles.editButton}>
          <EditIcon />
        </IconButton>
      ) : (
        <Button variant={'contained'} sx={styles.actionButton} onClick={handleOpen}>
          {buttonName}
        </Button>
      )}
      <Modal open={open} onClose={handleClose} sx={styles.modal}>
        <Paper elevation={5} sx={styles.paper}>
          <IconButton onClick={handleCancel} sx={styles.closeButton}>
            <HighlightOffIcon sx={styles.icon} />
          </IconButton>
          <form onSubmit={handleSubmit}>
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
              minRows={4}
              maxRows={7}
              variant={'outlined'}
              name={'description'}
              value={description}
              onChange={onChange}
              sx={styles.textField}
            />

            <Box sx={styles.buttonContainer}>
              <Button
                type={'submit'}
                variant={'contained'}
                color={'primary'}
                sx={styles.confirmButton}
              >
                {buttonName}
              </Button>
              <Button
                color={'secondary'}
                variant={'contained'}
                onClick={handleCancel}
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
