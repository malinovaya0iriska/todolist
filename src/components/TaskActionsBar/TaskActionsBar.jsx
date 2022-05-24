import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, FormControl, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';

import { removeTask } from '../../store/middlewares';
import { CustomSelect } from '../CustomSelect';
import { ItemModal } from '../ItemModal';

import { getStyles } from './getStyles';

export const TaskActionsBar = ({ taskData }) => {
  const styles = getStyles();
  const dispatch = useDispatch();

  const { id, title, description, status } = taskData;

  const handleItemDelete = () => {
    dispatch(removeTask(id));
  };

  return (
    <Box sx={styles.container}>
      <FormControl>
        <CustomSelect id={id} status={status} />
      </FormControl>
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
    </Box>
  );
};
