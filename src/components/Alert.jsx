import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../utils/theme'

const AlertDialog = ({ action, handleGet, handleUpdate }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#6C9400'),
    backgroundColor: "#6C9400",
    '&:hover': {
      backgroundColor: "#40414c89",
      color: 'white'
    },
    spacing: 50,
  }));

  return (
    <div>
      <ThemeProvider theme={theme}>

        <ColorButton
          variant="contained"
          sx={{ m: 1, textTransform: 'capitalize', margin: 0 }}
          onClick={() => { handleClickOpen(); handleGet() }}>
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
              sx={{ borderColor: '#40414c89', color: '#40414c89' }}
              onClick={handleClose}>
              Cancelar
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#6C9400', color: 'white' }}
              onClick={() => { handleClose(); handleUpdate() }}
              autoFocus>
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}

export default AlertDialog;
