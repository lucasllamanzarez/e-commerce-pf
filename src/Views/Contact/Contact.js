import React from 'react';
import { Button, TextField } from '@mui/material';
import './Contact.css';
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
			.min(2, 'Por favor ingrese un nombre de más de 2 caracteres')
			.required(),
		email: yup.string().email().required(),
		consult: yup.string()
		.max(300, 'Ha superado el maximo de caracteres')
		.required(),
		
	})
	.required();

//SUBMIT - CAPTURA DE DATOS
const submitHandler = (values, resetForm) => {
	console.log(values);
	Swal.fire( `${values.name}, hemos recibido su consulta`,
                    `Esperamos poder resolver todas sus dudas a la brevedad`,
                    'info');
	resetForm();
};

const Contact = () => {
	return (
		<div className='FormContainer'>
			<h1>Dejanos tu consulta y te contactaremos a la brevedad</h1>
			<Formik
				initialValues={{ name: '', surname: '', email: '', consult: '', }}
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
					<form className='Form' onSubmit={handleSubmit}>
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
							name='consult'
							placeholder='consulta'
							variant='outlined'
							className='TextField'
							sx={{ mb: 1 }}
							multiline
							rows={4}
							onChange={handleChange}
							value={values.consult}
							onBlur={handleBlur}
						/>
						{errors.consult && touched.email && errors.consult}
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

export default Contact;