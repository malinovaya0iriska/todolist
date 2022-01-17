import React from 'react';

import { useSelector } from 'react-redux';

import { Header } from './components/Header';
import { Todolist } from './components/Todolist';
import { getTodoLists } from './store/selectors';

export const App = () => {
  const todoLists = useSelector(getTodoLists);
  return (
    <>
      <Header />
      {todoLists.map(({ id, filter }) => {
        return <Todolist key={id} id={id} filter={filter} />;
      })}
    </>
  );
};
