import React from 'react';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Modal,
  TextField,
} from '@mui/material';

import { useInput } from '../../hooks/useInput';
import { useModal } from '../../hooks/useModal';

export const AddItemModal = () => {
  const { open, handleOpen, handleClose } = useModal();
  const { newTitle, titleError, onTitleChange, onTitleBlur, onTitleKeyPress } =
    useInput(true);
  const { description, descriptionError, onDescriptionChange, onBlur, onKeyPress } =
    useInput(true);
  const onAddHandler = () => {};
  return (
    <>
      <Button variant={'contained'} sx={{ padding: 2 }} onClick={handleOpen}>
        Create
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Grid container xs={12} justifyContent={'center'} alignItems={'center'}>
          <Card elevation={3} sx={{ padding: 2 }}>
            <CardHeader
              action={
                <IconButton onClick={handleClose}>
                  <HighlightOffIcon />
                </IconButton>
              }
              title
            />
            <CardContent>
              <form onSubmit={onAddHandler}>
                <TextField
                  label={'Title'}
                  variant={'outlined'}
                  name={'title'}
                  value={newTitle}
                  onChange={onTitleChange}
                />

                <TextField
                  label={'Description'}
                  multiline
                  variant={'outlined'}
                  name={'description'}
                  value={description}
                  onChange={onDescriptionChange}
                  rowsMax={4}
                />
              </form>
              <Button variant={'contained'} color={'primary'} sx={{ padding: 2 }}>
                Create
              </Button>
              <Button
                type={'submit'}
                color={'secondary'}
                variant={'contained'}
                sx={{ padding: 2 }}
              >
                Cancel
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Modal>
    </>
  );
};
