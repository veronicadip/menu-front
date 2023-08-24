import React from 'react';
import { Navbar,Nav,Container,Button } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import "../styles/navbar.css"


const NavbarSinRutas = () => {

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
            <Nav.Link href="#homeScreem">Inicio</Nav.Link>
            <Nav.Link href="#registro">Registro</Nav.Link>
            <Nav.Link href="/pedidos">Mis Pedidos</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
          
          </Navbar>
          </>
);
 }


 export default NavbarSinRutas