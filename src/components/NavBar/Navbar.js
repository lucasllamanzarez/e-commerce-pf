import {useState} from 'react'
import * as React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import CartWidget from '../Cartwidget/Cartwidget';
import MenuCat from './MenuCat';
import Button from '@mui/material/Button';


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
                        <Button><Link to ='/' className="barraNav-li">Productos</Link>
                        </Button>
                        <MenuCat />
                        <Button><Link to ='/About' className="barraNav-li">Sobre Nosotros</Link></Button>
                        
                        <Button><Link to ='/Contact' className="barraNav-li">Contactanos</Link></Button>
                        
                        <Button><Link to = '/Cart' className="barraNav-li"><CartWidget /></Link></Button>
                        

                    </ul>
                </nav>
            </div>
    )
}

export default NavBar;