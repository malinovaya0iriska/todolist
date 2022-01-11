import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  // eslint-disable-next-line no-unused-vars
  root: ({ test }) => ({}), // and use it here
  buttonContainer: {
    display: 'grid',
    justifyContent: 'space-between',
    gap: 6,
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '6fr',
    alignSelf: 'flex-end',
  },
});
