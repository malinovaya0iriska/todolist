import { useDispatch } from 'react-redux';
import { v1 } from 'uuid';

import { addTask } from '../store/actions/tasks';

import { useInput } from './useInput';

export const useForm = () => {
  const dispatch = useDispatch();

  const title = useInput(true);
  const description = useInput(true);

  const formFields = { title, description };

  const isDisabled = Boolean(title.error || description.error);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: v1(), title: title.value, description: description.value }));
    title.value = '';
    description.value = '';
  };

  return { formFields, isDisabled, handleFormSubmit };
};
