import { EditTask } from '../components/EditTask';
import { Todolist } from '../components/Todolist';

export const ROUTES = {
  HOME: '/',
  TASK: `/task/`,
  ERROR: '/404',
};

export const publicRoutes = [
  { path: ROUTES.HOME, component: Todolist },
  { path: ROUTES.TASK, component: EditTask },
  { path: ROUTES.ERROR, component: Error },
];
