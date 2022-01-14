import React from 'react';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';

import { deleteTask } from '../../store/actions';
import { ItemModal } from '../ItemModal';

import { getStyles } from './getStyles';

export const TaskActionsBar = ({ id, title, description }) => {
  const dispatch = useDispatch();
  const styles = getStyles();

  const handleItemDelete = () => {
    dispatch(deleteTask(id));
  };

  return (
    <>
      <Box>
        <IconButton onClick={handleItemDelete}>
          <HighlightOffIcon sx={styles.closeButton} />
        </IconButton>

        <ItemModal
          id={id}
          itemTitle={title}
          itemDescription={description}
          edit={true}
          buttonName={'Edit'}
        />
      </Box>
    </>
  );
};
