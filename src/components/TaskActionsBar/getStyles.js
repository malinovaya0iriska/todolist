import { TASK_STATUS } from '../../constants/baseConstants';

export const getStyles = () => ({
  closeButton: { color: '#000000', background: '#fa5252', borderRadius: '50%' },
  container: {
    display: 'grid',
    gridAutoFlow: 'column',
  },
  select: {
    marginTop: '5px',
    fontSize: 'medium',
    fontFamily: 'Virgil',
    height: '30px',
    width: '140px',
    textAlign: 'center',
    border: '1px solid #000000',
  },
  [TASK_STATUS.TODO]: {
    background: '#15aabf',
  },
  [TASK_STATUS.PROGRESS]: {
    background: '#40c057',
  },
  [TASK_STATUS.DONE]: {
    background: '#fd7e14',
  },
});
