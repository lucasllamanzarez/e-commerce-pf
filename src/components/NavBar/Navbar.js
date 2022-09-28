import {useState} from 'react'
import * as React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import CartWidget from '../Cartwidget/Cartwidget';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const NavBar = () => {
    //Genero estado del menu
        const [menu , setmenu] = useState(false)
        //Genero funcion para ejecutar estado
            const toggleMenu = () => {
                setmenu( !menu )
            }
    
    //Boton Categoria
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


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
                        <Button aria-controls={open ? 'demo-positioned-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} className="btnMenuCat"><Link to ='/' className="barraNav-li">Productos</Link></Button>

                        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{
                        'aria-labelledby': 'basic-button'}}>
                        <MenuItem>Categorias</MenuItem>
                        <MenuItem className="liMenuCat" onClick={handleClose}><Link to ='/category/Monitores' className="barraNav-li liMenuCat">Monitores</Link></MenuItem>
                        <MenuItem className="liMenuCat" onClick={handleClose}><Link to ='/category/Placas de video' className="barraNav-li liMenuCat">Placas de video</Link></MenuItem>
                        <MenuItem className="liMenuCat" onClick={handleClose}><Link to ='/category/Discos Rigidos y SSD' className="barraNav-li liMenuCat">Discos Rigidos y SSD</Link></MenuItem>
                        </Menu>

                        <Button><Link to ='/About' className="barraNav-li">Sobre Nosotros</Link></Button>
                        <Button><Link to ='/Contact' className="barraNav-li">Contactanos</Link></Button>
                        <Button><Link to = '/Cart' className="barraNav-li"><CartWidget /></Link></Button>

                    </ul>
                </nav>
            </div>
    )
}

export default NavBar;