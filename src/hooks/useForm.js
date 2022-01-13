import { EMPTY_STRING } from '../constants/baseConstants';

import { useInput } from './useInput';

export const useForm = (value1 = EMPTY_STRING, value2 = EMPTY_STRING) => {
  const title = useInput(true, value1);
  const description = useInput(false, value2);

  const formFields = { title, description };

  const isDisabled = title.isDisabledSubmit || description.isDisabledSubmit;

  return { formFields, isDisabled };
};
