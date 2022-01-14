import { useState } from 'react';

import { EMPTY_STRING, ERROR_INPUT } from '../constants/baseConstants';

export const useInput = (required = false, initial = EMPTY_STRING) => {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState(EMPTY_STRING);
  const [isDisabledSubmit, seIsDisabledSubmit] = useState(required);

  const onKeyPress = () => {
    error && setError(null);
  };

  const onChange = (e) => {
    error && setError(null);
    isDisabledSubmit && seIsDisabledSubmit(false);
    setValue(e.currentTarget.value.trim());
  };

  const onBlur = (e) => {
    if (!e.target.value && required) {
      !isDisabledSubmit && seIsDisabledSubmit(true);
      setError(ERROR_INPUT);
      return;
    }
    isDisabledSubmit && seIsDisabledSubmit(false);
    error && setError(null);
  };

  const resetInput = () => {
    setValue(EMPTY_STRING);
  };

  return { value, error, onChange, onBlur, onKeyPress, isDisabledSubmit, resetInput };
};
