import React from 'react';
import { Navbar,Nav,Container,Button } from 'react-bootstrap';
//import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import Rutas from '../routes/rutas';
import "../styles/navbar.css"

const NavbarComponent = ({logIn, logOut, auth}) => {

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
           
          </Nav>
        </Navbar.Collapse>
        <Button variant="danger" onClick={() =>  auth? logOut() : logIn()}>{auth ? 'Cerrar Sesion' :'Loguearse' }</Button>{' '}
      </Container>
          
    </Navbar>

</>
);
}
 export default NavbarComponent;











