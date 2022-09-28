import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './Cartcontext'; 
import ItemCart from './ItemCart';
import './Cart.css';
import {Button, Typography} from '@mui/material';

const Cart = () => {
    const {cart, totalPrice, clearCart} = useCartContext ();

    if (cart.length === 0){
        return(
            <div className='container'>
                <Typography variant='h3' color='white'>No hay items en el carrito</Typography>
                <br></br>
                <br></br>
                <br></br>
                <Button variant="contained"><Link to='/' className='li'>Ver Productos</Link></Button>
            </div>
        );
    }
    return (
		<div>
			{
			 cart.map((product) => {
				return (
					<div key={product.id}>
						<ItemCart data={product} />
					</div>
				);
			})}
            
        <div className='vaciar'>
            <Button size="small" color="primary" variant="contained" onClick={() => clearCart()}>
                Vaciar Carrito
            </Button>
        </div>
        <div> 
            <Typography color="white">
                Total: $ {totalPrice()}
            </Typography>
        </div>
        <div className='container2'>
            <Button size="small" color="primary" variant="contained" >
                Finalizar Compra
            </Button> 
		</div>
    </div>
	);
};

export default Cart