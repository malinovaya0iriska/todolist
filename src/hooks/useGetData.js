/*
import { useCallback, useEffect } from 'react';

import axios from 'axios';
import { useDispatch } from 'react-redux';

import { setTasks } from '../store/actions';

export const useGetData = (url) => {
  const dispatch = useDispatch();

  const getData = useCallback(async () => {
    try {
      const response = await axios.get(url);
      dispatch(setTasks(response.data));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }, [url]);

  useEffect(() => {
    getData(url);
  }, [getData, url]);

  return { data };
};
*/
