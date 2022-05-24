export const EMPTY_STRING = '';
export const TASK_QUANTITY = 5;
export const TASK_STATUS = {
  TODO: 'Todo',
  PROGRESS: 'In progress',
  DONE: 'Done',
};
export const TODOLIST_FILTERS = { ALL: 'All', ...TASK_STATUS };

export const COLORS = {
  [TASK_STATUS.TODO]: '#15aabf',
  [TASK_STATUS.PROGRESS]: '#40c057',
  [TASK_STATUS.DONE]: '#fd7e14',
};
