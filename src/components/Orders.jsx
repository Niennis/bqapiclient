import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
// import { flexbox } from '@mui/system';
import { purple } from '@mui/material/colors';

export const Orders = ({ client, qtyProducts, product, handleUpdate }) => {

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[100]),
    backgroundColor: purple[100],
    '&:hover': {
      backgroundColor: purple[200],
    },
    spacing: 50,
  }));

  return (
      <Card sx={{ maxWidth: 220, bgcolor: '#6a1b9a', width: 220, height: {qtyProducts} * 100, color: '#e1bee7' }}>
        <CardActionArea>

          <CardContent sx={{ padding: 0, margin: 0 }}>
            <Typography gutterBottom component="div" sx={{ padding: 0, margin: 0, fontSize: 16 }}>
              {client}
            </Typography>
            {product.products.map(prod => {
              return (
                  <Typography key={product.id + prod.product.id} variant="body2" color="text.secondary" sx={{color: '#e1bee7'}}>
                    {prod.qty} {prod.product.name}
                  </Typography>
              )
            })}
            <ColorButton variant="contained" sx={{m:1}} onClick={handleUpdate}>Entregar</ColorButton>
          </CardContent>
        </CardActionArea>
      </Card>
  )
}
