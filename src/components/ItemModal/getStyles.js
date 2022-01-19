export const getStyles = () => ({
  container: {
    textAlign: 'right',
  },
  modal: {
    maxWidth: '450px',
    margin: '12% auto',
  },
  actionButton: {
    padding: '10px 30px',
    background: '#40c057',
    color: '#000000',
    fontSize: 'medium',
    fontFamily: 'Virgil',
  },
  paper: {
    outline: 'none',
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
    height: 350,
    background: '#ced4da',
  },
  closeButton: {
    alignSelf: 'flex-end',
    maxWidth: '36px',
    color: '#000000',
  },
  editButton: {
    width: '28px',
    height: '28px',
    color: '#000000',
    background: '#ced4da',
    padding: '0',
    marginRight: '7px',
  },
  textField: {
    background: '#fff',
  },
  icon: {
    borderRadius: '50%',
    background: '#868e96',
  },
  buttonContainer: {
    paddingTop: '40px',
    display: 'grid',
    justifyContent: 'space-between',
    gap: 8,
    gridTemplateColumns: '1fr 1fr',
  },
  cancelButton: {
    fontSize: 'medium',
    fontFamily: 'Virgil',
    background: '#fa5252',
    color: '#000000',
  },
  confirmButton: {
    fontSize: 'medium',
    fontFamily: 'Virgil',
    background: '#228be6',
    color: '#000000',
  },
});
