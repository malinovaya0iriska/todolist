import { useState } from 'react';

import { EMPTY_STRING, ERROR_INPUT } from '../constants/baseConstants';

export const useInput = (required, initial = EMPTY_STRING) => {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState(null);

  const onKeyPress = () => {
    error && setError(null);
  };

  const onChange = (e) => {
    error && setError(null);
    setValue(e.currentTarget.value.trim());
  };

  const onBlur = (e) => {
    if (!e.target.value && required) {
      setError(ERROR_INPUT);
      return;
    }
    error && setError(null);
  };

  return { value, error, onChange, onBlur, onKeyPress };
};
