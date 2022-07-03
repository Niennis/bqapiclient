import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AlertDialog from './Alert';

export const Orders = ({ order, qtyProducts, getOrder, handleUpdate }) => {

  return (
    <Card sx={{ maxWidth: 220, bgcolor: '#6a1b9a', width: 220, height: { qtyProducts } * 100, color: '#e1bee7' }}>
      <CardActionArea>

        <CardContent sx={{ padding: 0, margin: 0 }}>
          <Typography gutterBottom component="div" sx={{ padding: 0, margin: 0, fontSize: 16 }}>
            {order.client}
          </Typography>
          {order.products.map(prod => {
            return (
              <Typography key={order.id + prod.product.id} variant="body2" color="text.secondary" sx={{ color: '#e1bee7' }}>
                {prod.qty} {prod.product.name}
              </Typography>
            )
          })}
        </CardContent>
      </CardActionArea>
          <AlertDialog action={'Entregar'} handleGet={getOrder} handleUpdate={handleUpdate} />
    </Card>
  )
}
