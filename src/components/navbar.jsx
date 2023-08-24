import React from 'react';
import { Navbar,Nav,Container,Button } from 'react-bootstrap';
//import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import "../styles/navbar.css"

export const NavbarComponent = ({cerrarSesion,user}) => {

  return ( 
   <> <Navbar expand="lg" className="--navbar">
      <Container>
        <Navbar.Brand href="#home">
        <img
              src="https://png.pngtree.com/png-clipart/20230805/original/pngtree-pizza-icon-cut-knife-cheese-vector-picture-image_9811651.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-5 d-flex justify-content-end">
            <NavLink className='nav-link' to='/'>Inicio</NavLink>
            <NavLink className='nav-link' to='/admin'>Admin</NavLink>
            <NavLink className='nav-link' to='/pedidos'>Mi pedido</NavLink>
            <NavLink className='nav-link' to='/login' >Login</NavLink>
            <NavLink className='nav-link' to='/registro'>Registro</NavLink>
            <Button variant='primary' className="btn nav-link" onClick={cerrarSesion}>
                Cerrar sesión
              </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</>
);
}
 export default NavbarComponent;