import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, FormControl, IconButton, MenuItem, Select } from '@mui/material';
import { useDispatch } from 'react-redux';

import { TASK_STATUS } from '../../constants/baseConstants';
import { useSelect } from '../../hooks/useSelect';
import { changeTaskStatus, deleteTask } from '../../store/actions';
import { ItemModal } from '../ItemModal';

import { getStyles } from './getStyles';

export const TaskActionsBar = ({ taskData }) => {
  const dispatch = useDispatch();
  const styles = getStyles();

  const { id, title, description, status } = taskData;
  const { state, handleSelectChange } = useSelect(status);

  const handleItemDelete = () => {
    dispatch(deleteTask(id));
  };

  const onSelectChange = (e) => {
    handleSelectChange(e);
    dispatch(changeTaskStatus(id, e.target.value));
  };

  return (
    <Box sx={styles.container}>
      <FormControl>
        <Select
          value={state}
          onChange={onSelectChange}
          IconComponent={() => null}
          sx={{ ...styles.select, ...styles[state] }}
        >
          <MenuItem value={TASK_STATUS.TODO}>{TASK_STATUS.TODO}</MenuItem>
          <MenuItem value={TASK_STATUS.PROGRESS}>{TASK_STATUS.PROGRESS}</MenuItem>
          <MenuItem value={TASK_STATUS.DONE}>{TASK_STATUS.DONE}</MenuItem>
        </Select>
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
      </Box>{' '}
    </Box>
  );
};
