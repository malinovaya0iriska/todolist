import React from 'react';

import { useRoutes } from 'react-router-dom';

import { EditTask } from './components/EditTask';
import { Header } from './components/Header';
import { Todolist } from './components/Todolist';
import { ROUTES } from './constants/routes';

export const App = () => {
  const element = useRoutes([
    { path: ROUTES.HOME, element: <Todolist /> },
    {
      path: 'task/',
      element: <EditTask />,
      children: [{ path: ':id', element: <EditTask /> }],
    },
  ]);

  return (
    <>
      <Header />
      {element}
    </>
  );
};
