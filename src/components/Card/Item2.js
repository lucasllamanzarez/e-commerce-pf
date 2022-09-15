import {Button, Card, CardContent, CardMedia, Typography, CardActions, CardActionArea} from '@mui/material';
import Itemcount from '../Items/Itemcount';
import { useCartContext } from '../Cartwidget/Cartcontext'; 
import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const Item2 = ({data}) => {
  // Se setea estado de carrito en falso para poder cargarlo en el onAdd
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

    //Funciona onAdd que permite agregar la cantidad de elementos deseados
      const onAdd = (quantity) => {
        alert(`Agregaste ${quantity} unidades al carrito`);
            setGoToCart(true);
              addProduct(data, quantity);
            
  }

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
          {goToCart ? <Link to = '/cart' className="barraNav-li"><Button size="small" color="primary">
          Ir al carrito
          </Button></Link> : <Itemcount onAdd={onAdd}/>}
        </CardActions>
      </Card>
    )
}

export default Item2;