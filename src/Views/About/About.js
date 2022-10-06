import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='divCont'>

            <h1>Sobre Nosotros</h1>
            <p>              
				Somos una empresa que desde 2012 se dedica a la venta de insumos informáticos, buscando los mejores accesorios y componentes para las pc's. <br></br>
                Nos adaptamos a todo tipo de equipos, tanto de oficina, como gamers.<br></br>
                Traemos las últimas novedades del mercado para que tengas una amplia gama de elección y no te quedes con las ganas de tener lo último en tecnología.<br></br>
                Somos <strong>Rise Technology</strong>, somos la opción que necesitas para estar en la cúspide del ámbito informático - tecnológico.
			</p>
            <h2>
                Algunos de nuestros proveedores
            </h2>

            <img src='https://firebasestorage.googleapis.com/v0/b/e-commerce-pf.appspot.com/o/ProveedoresRiseTech.jpg?alt=media&token=39d5b98c-2817-42c5-941d-67a84da69df4' alt='Proveedores'></img>
                
    </div>
  )
}

export default About;