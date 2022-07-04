import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import { flexbox } from '@mui/system';

export const Product = ({ img, name, price, addItem }) => {
  return (
    <>
      <CardActionArea onClick={addItem}>
        <Card sx={{ maxWidth: 160, bgcolor: '#6C9400', width: 160, height: 215, color: 'white' }}>
          <CardMedia
            component="img"
            height="140"
            width="160"
            objectfit="contain"
            image={img}
            alt={name}
          />
          <CardContent sx={{ padding: 0, margin: 0 }}>
            <Typography component="div" sx={{ padding: 0, marginTop: 0, fontSize: 16 }}>
              {name}
            </Typography>
            <Typography variant="body2" color="white">
              ${price}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </>
  )
}
