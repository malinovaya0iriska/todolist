export const style = () => ({
  container: {
    textAlign: 'right',
  },
  modal: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(3, 2fr)',
  },
  button: { padding: '10px 30px' },
  paper: {
    padding: 5,
    display: 'grid',
    height: 350,
    gridTemplateRows: '.5fr 4fr',
  },
  closeButton: { justifyContent: 'flex-end' },
  form: { display: 'grid', rowGap: 4 },
  buttonContainer: {
    display: 'grid',
    justifyContent: 'space-between',
    gap: 6,
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '6fr',
    alignSelf: 'flex-end',
  },
});
