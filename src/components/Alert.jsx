import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const AlertDialog = ({action, handleGet, handleUpdate}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[100]),
    backgroundColor: purple[100],
    '&:hover': {
      backgroundColor: 'teal',
      color: 'white'
    },
    spacing: 50,
  }));
  
  return (
    <div>
      <ColorButton
        variant="contained" 
        sx={{m:1, textTransform:'capitalize', margin: 0}} 
        onClick={() => {handleClickOpen(); handleGet()}}>
          {action}
      </ColorButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Desea confirmar petición
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            sx={{borderColor:'purple', color:'purple'}}
            onClick={handleClose}>
              Cancelar
          </Button>
          <Button
            variant="contained"
            sx={{backgroundColor:'teal', color:'white'}}
            onClick={() => {handleClose(); handleUpdate()}}
            autoFocus>
              Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog;
