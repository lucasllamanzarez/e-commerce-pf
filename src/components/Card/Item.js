import * as React from 'react';
import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';

const Item = ({data}) => {
    return (
      <Card sx={{ maxWidth: 345, minHeight: 380 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={data.image}
          alt="Productos RiseTech"
        />
        <CardContent>
          <Typography variant="h6" color="text.secondary" component="div">
            {data.title}
          </Typography>
          <Typography variant="h5" gutterBottom>
            $ {data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}

export default Item;