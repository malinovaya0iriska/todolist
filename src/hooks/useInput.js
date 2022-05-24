import { useState } from 'react';

import { EMPTY_STRING } from '../constants/baseConstants';

export const useInput = (
  initial = { title: EMPTY_STRING, description: EMPTY_STRING },
) => {
  const [data, setValue] = useState(initial);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...data, [name]: value });
  };

  const resetInput = () => {
    setValue(initial);
  };

  return { data, onChange, resetInput };
};
