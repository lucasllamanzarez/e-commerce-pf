import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './Cartcontext'; 
import ItemCart from './ItemCart';
import './Cart.css';
import {Button} from '@mui/material';

const Cart = () => {
    const {cart, totalPrice} = useCartContext ();

    if (cart.length === 0){
        return(
            <div className='container'>
                <p>No hay elementos en el carrito</p>
                <Link to='/' className='li'>Comenzar a comprar</Link>
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
        <p color="white">
            Total: $ {totalPrice()}
        </p>
        <Button size="small" color="primary" >
            Finalizar Compra
            </Button> 
		</div>
	);
};

export default Cart