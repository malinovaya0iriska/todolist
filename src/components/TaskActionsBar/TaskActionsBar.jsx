import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';

import { removeTask } from '../../store/middlewares';

import { getStyles } from './getStyles';

export const TaskActionsBar = ({ id }) => {
  const dispatch = useDispatch();
  const styles = getStyles();

  const handleItemDelete = () => {
    dispatch(removeTask(id));
  };

  return (
    <Box sx={styles.container}>
      <IconButton onClick={handleItemDelete}>
        <HighlightOffIcon sx={styles.closeButton} />
      </IconButton>
    </Box>
  );
};
