import { useState } from 'react';

export const useSelect = (initialValue) => {
  const [state, setState] = useState(initialValue);

  const handleSelectChange = (e) => {
    setState(e.target.value);
  };

  return { state, handleSelectChange };
};
