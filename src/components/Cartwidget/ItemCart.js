import React from 'react'
import '../Cartwidget/itemCart.css';
import { useCartContext } from './Cartcontext'; 
import {Button} from '@mui/material';

const ItemCart = (data) => {
    //Traigo el useCartContext para el boton eliminar
        const { remItem } = useCartContext();
 
  return ( 
    <div className='Cart'>
        <img src={data.data.image} alt='Productos Rise'></img>
            <div>
                <div>
                    <p>Producto: {data.data.title}</p>
                    <p>Cantidad: {data.data.quantity}</p>
                    <p>Precio Unitario: {data.data.price}</p>
                    <p>Subtotal: $ {data.data.quantity * data.data.price}</p>
                </div>
            </div>
        <div className='CartButton'>    
        <Button size="small" color="primary" onClick={() => remItem(data.data.id)}>
            Eliminar
        </Button>
        </div>
    </div>
  )
}

export default ItemCart