import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { cyan } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(cyan[500]),
  backgroundColor: cyan[500],
  '&:hover': {
    backgroundColor: cyan[700],
  },
}));

export default function CustomizedButtons({sendOrder}) {
  return (
      <ColorButton variant="contained" onClick={sendOrder}>Enviar orden</ColorButton>
  );
}
