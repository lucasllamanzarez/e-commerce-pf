import {useState} from 'react'
import './Navbar.css';
import Cartwidget from '../Cartwidget/Cartwidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    //Genero estado del menu
        const [menu , setmenu] = useState(false)
        //Genero funcion para ejecutar estado
            const toggleMenu = () => {
                setmenu( !menu )
            }

    return (
            <div className="barraNav">
                <h1 className="barraNav-h1">
                <Link to ='/' className="barraNav-li">Rise Technology</Link>
                </h1>

                <button onClick={ toggleMenu } className="barraNav-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="barraNav-svg" viewBox="0 0 16 16">
                <path  fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                </button>  

                <nav className={ `barraNav-nav ${menu ? 'isActive' : ''}`}>
                    <ul className="barraNav-ul">
                        <Link to ='/' className="barraNav-li">Productos</Link>
                        <Link to ='/About' className="barraNav-li">Sobre Nosotros</Link>
                        <Link to ='/Contact' className="barraNav-li">Contactanos</Link>
                        <li className="barraNav-li"><Cartwidget /></li>

                    </ul>
                </nav>
            </div>
    )
}

export default NavBar;