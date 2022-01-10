import { useCallback, useState } from 'react';

import { EMPTY_STRING, ERROR_INPUT } from '../constants/baseConstants';

export const useInput = (required, initial = EMPTY_STRING) => {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState(' ');

  const onKeyPress = useCallback(() => {
    error && setError(null);
  }, [error]);

  const onChange = useCallback((event) => {
    setValue(event.currentTarget.value.trim());
  }, []);

  const onBlur = useCallback(
    (e) => {
      if (!e.target.value && required) {
        setError(ERROR_INPUT);
        return;
      }
      setError(null);
    },
    [required],
  );

  return { value, error, onChange, onBlur, onKeyPress };
};
