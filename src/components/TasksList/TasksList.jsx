import React from 'react';

import { useSelector } from 'react-redux';

import { getTasks } from '../../store/selectors';
import { Task } from '../Task';

export const TasksList = () => {
  const tasks = useSelector(getTasks);

  return (
    <>
      {tasks.map(({ id, title, description }) => (
        <Task key={id} id={id} title={title} description={description} />
      ))}
    </>
  );
};
