import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, Button, IconButton, Modal, Paper, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';

import { useInput } from '../../hooks/useInput';
import { useModal } from '../../hooks/useModal';
import { addTask } from '../../store/actions';

import { getStyles } from './getStyles';

export const ItemModal = ({ buttonName }) => {
  const dispatch = useDispatch();
  const styles = getStyles();

  const { open, handleOpen, handleClose } = useModal();

  const { data, onChange, resetInput } = useInput();
  const { title, description } = data;

  const handleAddItem = (e) => {
    e.preventDefault();
    dispatch(addTask({ ...data }));
    resetInput();
    handleClose();
  };

  return (
    <Box sx={styles.container}>
      <Button variant={'contained'} sx={styles.actionButton} onClick={handleOpen}>
        {buttonName}
      </Button>
      <Modal open={open} onClose={handleClose} sx={styles.modal}>
        <Paper elevation={5} sx={styles.paper}>
          <IconButton onClick={handleClose} sx={styles.closeButton}>
            <HighlightOffIcon sx={styles.icon} />
          </IconButton>
          <form onSubmit={handleAddItem}>
            <TextField
              margin={'normal'}
              fullWidth
              label={'Title'}
              variant={'outlined'}
              name={'title'}
              value={title}
              onChange={onChange}
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
