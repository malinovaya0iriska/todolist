import { MenuItem, Select } from '@mui/material';
import { useDispatch } from 'react-redux';

import { COLORS, TASK_STATUS } from '../../constants/baseConstants';
import { useSelect } from '../../hooks/useSelect';
import { changeTaskStatus } from '../../store/actions';

import { getStyles } from './getStyles';

export const CustomSelect = ({ id, status }) => {
  const dispatch = useDispatch();

  const { state, handleSelectChange } = useSelect(status);

  const styles = getStyles(COLORS[state]);

  const onSelectChange = (e) => {
    handleSelectChange(e);
    dispatch(changeTaskStatus(id, e.target.value));
  };

  return (
    <Select
      value={state}
      onChange={onSelectChange}
      IconComponent={() => null}
      sx={styles.select}
    >
      <MenuItem value={TASK_STATUS.TODO}>{TASK_STATUS.TODO}</MenuItem>
      <MenuItem value={TASK_STATUS.PROGRESS}>{TASK_STATUS.PROGRESS}</MenuItem>
      <MenuItem value={TASK_STATUS.DONE}>{TASK_STATUS.DONE}</MenuItem>
    </Select>
  );
};
