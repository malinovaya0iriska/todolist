import React from 'react';

import { Header } from './components/Header';
import { Todolist } from './components/Todolist';

export const App = () => {
  return (
    <>
      <Header />
      <Todolist />;
    </>
  );
};
