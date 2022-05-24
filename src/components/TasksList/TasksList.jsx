import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

import { TASK_QUANTITY, TODOLIST_FILTERS } from '../../constants/baseConstants';
import { getTasks } from '../../store/selectors';
import { StartInfo } from '../StartInfo';
import { Task } from '../Task';

export const TasksList = ({ filter }) => {
  const tasks = useSelector(getTasks);

  const filteredTasks =
    filter !== TODOLIST_FILTERS.ALL
      ? tasks.filter((task) => task.status === filter)
      : tasks;

  const tasksForRender = filteredTasks.slice(-TASK_QUANTITY);

  if (tasks.length === 0) {
    return (
      <StartInfo
        text={'There are nothing here... Please create one'}
        bgColor={{ background: '#15aabf' }}
      />
    );
  }

  return (
    <Box>
      {tasksForRender.length === 0 ? (
        <StartInfo
          text={`There is nothing in '${filter}' now...`}
          bgColor={{ background: '#ced4da' }}
        />
      ) : (
        tasksForRender.map((task) => <Task key={task.id} taskData={task} />)
      )}
    </Box>
  );
};
