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
      <Card sx={{ maxWidth: 160, bgcolor: '#3bb5b6fe', width:160, height: 185 }}>
        <CardActionArea onClick={addItem}>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt={name}
          />
          <CardContent sx={{padding: 0, margin: 0}}>
            <Typography gutterBottom  component="div" sx={{padding: 0, margin: 0, fontSize: 16}}>
              {name} 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}
