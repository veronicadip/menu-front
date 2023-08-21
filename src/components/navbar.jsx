import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

export const NavbarComponent = ({logIn, logOut, auth}) => {

  return (<Navbar expand="lg" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <NavLink className='nav-link' to='/'>home</NavLink>
      <NavLink className='nav-link' to='/admin'>Admin</NavLink>
      <NavLink className='nav-link' to='/pedidos'>Mi pedido</NavLink>
      <NavLink className='nav-link' to='/login'>Login</NavLink>
      <NavLink className='nav-link' to='/registro'>Registro</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);
}
 