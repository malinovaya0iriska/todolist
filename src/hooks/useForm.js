import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';

import { addTask } from '../store/actions/';

import { useInput } from './useInput';

export const useForm = () => {
  const dispatch = useDispatch();

  const title = useInput(true);
  const description = useInput(true);

  const formFields = { title, description };

  const isDisabled = title.isDisabledSubmit;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({ id: nanoid(), title: title.value, description: description.value }),
    );
    title.value = '';
    description.value = '';
  };

  return { formFields, isDisabled, handleFormSubmit };
};
