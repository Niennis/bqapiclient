import * as React from 'react';
import { ColorButton } from '../utils/theme';

export default function CustomizedButtons({ sendOrder }) {
  return (
    <ColorButton variant="contained" onClick={sendOrder}>Enviar orden</ColorButton>
  );
}
