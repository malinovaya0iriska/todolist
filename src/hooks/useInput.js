import { useCallback, useMemo, useState } from 'react';

import { EMPTY_STRING, ERROR_INPUT } from '../constants/baseConstants';

export const useInput = (required, initial = EMPTY_STRING) => {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState(null);

  const onKeyPress = useCallback(() => {
    error && setError(null);
  }, [error]);

  const onChange = useCallback(
    (event) => {
      error && setError(null);
      setValue(event.currentTarget.value.trim());
    },
    [error],
  );

  const onBlur = useCallback(
    (e) => {
      if (!e.target.value && required) {
        setError(ERROR_INPUT);
        return;
      }
      error && setError(null);
    },
    [required, error],
  );

  return useMemo(
    () => ({ value, error, onChange, onBlur, onKeyPress }),
    [value, error, onChange, onBlur, onKeyPress],
  );
};
