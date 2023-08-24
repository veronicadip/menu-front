import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import ModalLogin from './login';
import "../styles/navbar.css"

export const NavbarComponent = ({logIn, logOut, auth}) => {

//  login modal no borrar
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return ( 
   <>
   <Navbar expand="lg" className="--navbar">
      <Container>
        <Navbar.Brand href="/">
        <img
              src="https://png.pngtree.com/png-clipart/20230805/original/pngtree-pizza-icon-cut-knife-cheese-vector-picture-image_9811651.png"
              width="50"
              height="50"
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
            <NavLink className='nav-link' onClick={handleShow} >Login</NavLink>
            <NavLink className='nav-link' to='/registro'>Registro</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
<ModalLogin show={show} handleClose={handleClose} />
</>
);
}
 