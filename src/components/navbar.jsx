import React from 'react';
import { Navbar,Nav,Container,Button } from 'react-bootstrap';
//import { useState } from 'react';
import { NavLink } from 'react-router-dom';
 const NavbarComponent = ({cerrarSesion,user}) => {

  return ( 
   <>
  <Navbar expand="lg" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <NavLink className='nav-link' to='/'>home</NavLink>

             
      <NavLink className='nav-link' to='/admin'>Admin</NavLink>

      <NavLink className='nav-link' to='/Pedidos'>Mi pedido</NavLink>
      <NavLink className='nav-link' to='/login' >Login</NavLink>
      <NavLink className='nav-link' to='/registro'>Registro</NavLink>
      </Nav>
      <Button variant='primary' className="btn nav-link" onClick={cerrarSesion}>
                Cerrar sesión
              </Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
  
</>
);
}
 export default NavbarComponent;