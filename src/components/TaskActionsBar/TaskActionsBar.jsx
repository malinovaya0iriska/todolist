import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';

import { removeTask } from '../../store/middlewares';
import { ItemModal } from '../ItemModal';

import { getStyles } from './getStyles';

export const TaskActionsBar = ({ taskData }) => {
  const dispatch = useDispatch();
  const styles = getStyles();

  const { id, title, description } = taskData;

  const handleItemDelete = () => {
    dispatch(removeTask(id));
  };

  return (
    <Box sx={styles.container}>
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
  );
};
