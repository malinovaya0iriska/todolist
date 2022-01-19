import axios from 'axios';

import { DB_URL } from '../constants/baseConstants';

export const instance = axios.create({
  baseURL: DB_URL,
});
