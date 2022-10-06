import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from './Cartcontext'; 
import ItemCart from './ItemCart';
import './Cart.css';
//MATERIAL UI
import {Button, TextField} from '@mui/material';
//FIREBASE
import {getFirestore, collection, addDoc} from 'firebase/firestore';
// FORMIK & YUP
import * as yup from 'yup';
import { Formik } from 'formik';
// SWEET ALERT
import Swal from 'sweetalert2';

//VALIDACION
const yupSchema = yup
                    .object()
	                .shape({
		            name: yup
			        .string()
			        .min(2, 'Por favor ingrese un nombre de más de 2 caracteres')
			        .required(),
		            surname: yup
			        .string()
			        .min(2, 'Por favor ingrese un apellido de más de 2 caracteres')
			        .required(),
		            email: yup.string().email().required(),
		            phone: yup.number()
		            
		            .required(),
                    address: yup
			        .string()
			        .min(2, 'Por favor ingrese una direccion valida')
			        .required(),
                    cp: yup.number()
		            
		            .required(),
	            })
	        .required();

const Cart = () => {

//CONSTANTES
    const {cart, totalPrice, clearCart} = useCartContext ();
    const navigate = useNavigate();

//FECHA Y HORA 
    let today = new Date();
    let date = today.toLocaleString();


    const submitHandler = (values, resetForm) => {
        
//Genero constante para pasar datos de comprador y pedido
    const addOrder = {
        buyer: {
            name: `${values.name}`,
            surname: `${values.surname}`,
            email: `${values.email}`,
            phone: `${values.phone}`,
            address: `${values.address}`,
            cp: `${values.cp}`,
            date: `${date}`
        },
        items:cart.map(product => ({id: product.id, title:product.title, price:product.price, quantity: product.quantity})),
        total: totalPrice(),
    }
    
//Paso Datos y obtengo ID para mostrarlo en pantalla
    const db = getFirestore();
    const orders = collection(db, 'orders');
        addDoc(orders, addOrder)
        .then(({id}) => setTimeout(() => {
            Swal.fire( `${values.name}, muchas gracias por su compra`,
                `Su numero de pedido es : ${id} `,
                'success');
          }, 250));
        clearCart();
    setTimeout(() => {navigate(`/`);}, 500); 
        resetForm();
    };

    //Condicion para renderizar msj o renderizar carrito
    if (cart.length === 0){
        return(
            <div className='container'> 
                <p><strong>No hay items en el carrito</strong></p>
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
            <p style={{ color: "white", fontSize:"25px", padding: "15px"}}>
                Total: $ {totalPrice()}
            </p>
            <br></br>
        </div>
        <p className='tipo' style={{ color: "white", fontSize:"35px"}} >Completar los datos para finalizar la compra</p>
        <br></br>
        <Formik
				initialValues={{ name: '', surname: '', email: '', phone: '', address: '', cp:'',}}
				onSubmit={(values, { resetForm }) => submitHandler(values, resetForm)}
				validationSchema={yupSchema}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isValid,
					dirty,
				}) => (
					<form className='form' onSubmit={handleSubmit}>
						<TextField
							name='name'
							placeholder='Nombre'
							variant='outlined'
							className='TextField'
							sx={{ mb: 1 }}
							onChange={handleChange}
							value={values.name}
							onBlur={handleBlur}
						/>
						{errors.name && touched.name && errors.name}
						<TextField
							name='surname'
							placeholder='Apellido'
							variant='outlined'
							className='TextField'
							sx={{ mb: 1 }}
							onChange={handleChange}
							value={values.surname}
							onBlur={handleBlur}
						/>
						{errors.surname && touched.surname && errors.surname}
						<TextField
							name='email'
							placeholder='email@email.com'
							variant='outlined'
							className='TextField'
							sx={{ mb: 1 }}
							onChange={handleChange}
							value={values.email}
							onBlur={handleBlur}
						/>
						{errors.email && touched.surname && errors.email}
						<TextField
							name='phone'
							placeholder='Telefono'
							variant='outlined'
							className='TextField'
							sx={{ mb: 1 }}
							onChange={handleChange}
							value={values.phone}
							onBlur={handleBlur}
						/>
						{errors.phone && touched.email && errors.phone}
                        <TextField
							name='address'
							placeholder='Direccion'
							variant='outlined'
							className='TextField'
							sx={{ mb: 1 }}
							onChange={handleChange}
							value={values.address}
							onBlur={handleBlur}
						/>
                        {errors.address && touched.phone && errors.address}
                        <TextField
							name='cp'
							placeholder='Codigo Postal'
							variant='outlined'
							className='TextField'
							sx={{ mb: 1 }}
							onChange={handleChange}
							value={values.cp}
							onBlur={handleBlur}
						/>
                        {errors.cp && touched.address && errors.cp}
						<Button
							disabled={!(isValid && dirty)}
							variant='contained'
							type='submit'
							sx={{ width: '400px', height: '54px' }}
						>
							Enviar
						</Button>
					</form>
				)}
			</Formik>
    </div>
	);
};

export default Cart;
