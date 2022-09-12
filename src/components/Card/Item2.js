import * as React from 'react';
import {Button, Card, CardContent, CardMedia, Typography, CardActions, CardActionArea} from '@mui/material';
import Itemcount from '../Items/Itemcount';

const Item2 = ({data}) => {
    return (
        <Card sx={{ maxWidth: 345}}>
        <CardActionArea>
          <CardMedia
            component="img"
            
            image= {data.image}
            alt="Productos RiseTech"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {data.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            $ {data.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Itemcount />
          <Button size="small" color="primary">
            Agregar Producto
          </Button>
        </CardActions>
      </Card>
    )
}

export default Item2;