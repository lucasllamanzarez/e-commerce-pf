
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import {useState} from 'react'
import './Navbar.css';

const MenuCat = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const styles = {
      btnMenuCat: {
        textDecoration: 'none',
        color: 'white',
              
      },
    
    };

  return (
    <div>
        <Button aria-controls={open ? 'demo-positioned-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} style={styles.btnMenuCat}>
        Categorias 
        </Button>

                  <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{
                  'aria-labelledby': 'basic-button'}}>
                  
                  <MenuItem className="liMenuCat" onClick={handleClose}><Link to ='/category/Monitores' className="barraNav-li liMenuCat">Monitores</Link></MenuItem>
                  <MenuItem className="liMenuCat" onClick={handleClose}><Link to ='/category/Placas de video' className="barraNav-li liMenuCat">Placas de video</Link></MenuItem>
                  <MenuItem className="liMenuCat" onClick={handleClose}><Link to ='/category/Discos Rigidos y SSD' className="barraNav-li liMenuCat">Discos Rigidos y SSD</Link></MenuItem>

                  </Menu>
    </div>
  )
}

export default MenuCat