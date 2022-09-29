import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from './Cartcontext'; 
import ItemCart from './ItemCart';
import './Cart.css';
import {Button, Typography} from '@mui/material';
import {getFirestore, collection, addDoc} from 'firebase/firestore';
import Swal from 'sweetalert2';

const Cart = () => {
    
    const {cart, totalPrice, clearCart} = useCartContext ();
    const navigate = useNavigate();

    // obtener la fecha y la hora
    let today = new Date();
    let date = today.toLocaleString();
    
    //Campos Form
    const [ formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        address: '',
        cp:'',
    })

    //Genero constante para pasar datos de comprador y pedido
    const addOrder = {
        buyer: {
            name: `${formData.name}`,
            surname: `${formData.surname}`,
            email: `${formData.email}`,
            phone: `${formData.phone}`,
            address: `${formData.address}`,
            cp:`${formData.cp}`,
            date:`${date}`
        },
        items:cart.map(product => ({id: product.id, title:product.title, price:product.price, quantity: product.quantity})),
        total: totalPrice(),
    }

    //Funcion para pasar datos de compra
    const handleClick = () => {
        const db = getFirestore();
        const orders = collection(db, 'orders');
            addDoc(orders, addOrder)
            .then(({id}) => setTimeout(() => {
                Swal.fire( `${formData.name}, muchas gracias por su compra`,
                    `Su numero de pedido es : ${id} `,
                    'success');
              }, 250));
            clearCart();
        setTimeout(() => {navigate(`/`);}, 500); 
    }

    //Condicion para renderizar msj o renderizar carrito
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
            <br></br>
        </div>
        <Typography variant='h4' color="white" className='tipo'>Completar los datos para finalizar la compra</Typography>
        <br></br>
        <form className='form'>
        <div>
        <label>
             Nombre:<input type="text" name="name" value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                } />
        </label>
        <label>
             Apellido:<input type="text" name="surname" value={formData.surname}
                onChange={(e) =>
                  setFormData({ ...formData, surname: e.target.value })
                }/>
        </label> 
        <label>
             Correo:<input type="text" name="mail" value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }/>
        </label>
        </div>
        <div>
        <label>
             Telefono:<input type="number" name="phone" value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }/>
        </label>
        <label>
             Direccion:<input type="text" name="address" value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                } />
        </label>
        <label>
             C.P.:<input type="number" name="cp" value={formData.cp}
                onChange={(e) =>
                  setFormData({ ...formData, cp: e.target.value })
                }/>
        </label>
        </div>
            <div className='container2'>
                <Button size="small" color="primary" variant="contained" onClick={()=>handleClick()} >
                    Finalizar Compra
                </Button>
		    </div>
        </form>
    </div>
	);
};

export default Cart