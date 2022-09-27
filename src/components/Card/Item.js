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
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}

export default Item;