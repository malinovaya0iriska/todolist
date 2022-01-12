import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';

import { EMPTY_STRING } from '../constants/baseConstants';
import { addTask, editTask } from '../store/actions/';

import { useInput } from './useInput';

export const useForm = (value1 = EMPTY_STRING, value2 = EMPTY_STRING) => {
  const dispatch = useDispatch();

  const title = useInput(true, value1);
  const description = useInput(false, value2);

  const formFields = { title, description };

  const isDisabled = title.isDisabledSubmit || description.isDisabledSubmit;

  const handleAddItem = (e) => {
    e.preventDefault();
    dispatch(
      addTask({ id: nanoid(), title: title.value, description: description.value }),
    );
    title.value = '';
    description.value = '';
  };

  const handleEditItem = (e, id) => {
    e.preventDefault();
    dispatch(editTask(id, title.value, description.value));
  };

  return { formFields, isDisabled, handleAddItem, handleEditItem };
};
