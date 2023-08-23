import { Card, Button, Container } from "react-bootstrap";
import '../styles/stylehome.css'
//import { mostrarMenu  } from "../helpers/apiMenu";
import React, { useEffect, useState } from "react";
// import birraImage from '../assets/img/birra1.jpg';

function Menu() { 
  
 /* const [menu, setMenu] = useState(null);
  useEffect(() => {
 
    traerDatosMenu();
  }, []);
  
  const traerDatosMenu = async() => { const{menu} = await mostrarMenu
}*/


const pizzas = [
  { nombre: "Chedar Borde Relleno",precio: 2000 },
  { nombre: "Jamon y Morrones",      precio: 2000 },
  { nombre: "Cuatro Quesos",         precio: 2000 },
  { nombre: "Espinaca y Morrones",  precio: 2000 },
  
];
const hamburguesas = [
  { nombre: "Doble Provolone", precio: 2000 },
  { nombre: "Doble Chedar", precio: 2000 },
  { nombre: "Bacon ",   precio: 2000 },
  { nombre: "Vegetariana ", precio: 2000 },
  
];

const bebidas = [
  { nombre: "Honey ", precio: 1500 },
  { nombre: "Amber ", precio: 1500 },
  { nombre: "Ipa  ", precio:  1500 },
  { nombre: "Stout ", precio: 1500 },
  
];

return (
  <>
    <Container className="d-flex flex-wrap w-100 ">
     
      <Card className="boxCardMenu fondoCardPizza border bg-danger p-4 ">
        <div>
          <h2 className="text-center">Pizza</h2>
        </div>
        {pizzas.map((pizza, index) => (
          <div
            key={index}
            className="d-flex flex-wrap justify-content-between align-items-center mt-2"
          >
            <h4 className="mx-3">{pizza.nombre}</h4>
            <h5 className="mx-3">${pizza.precio}</h5>
            <Button variant="success">Comprar</Button>
            <Button variant="success">Eliminar</Button>
          </div>
        )
        )
}
      </Card>
      </Container>

      <Container>   
      <Card className="boxCardMenu fondoCardHamburguesas border bg-danger p-4 col-md-6 mb-3">
        <div>
          <h2 className="text-center text-white">Burgers</h2>
        </div>
        {hamburguesas.map((hamburguesas, index) => (
          <div
            key={index}
            className="d-flex flex-wrap justify-content-between align-items-center mt-2"
          >
            <h4 className="mx-3 text-white">{hamburguesas.name}</h4>
            <h5 className="mx-3 text-white">${hamburguesas.price}</h5>
            <Button variant="success">Comprar</Button>
          </div>
        ))}
      </Card>

      <Card className="boxCardMenu fondoCardCervezas border bg-danger p-4">
        <div>
          <h2 className="text-center text-white">Bebidas</h2>
        </div>
        {bebidas.map((bebidas, index) => (
          <div
            key={index}
            className="d-flex flex-wrap justify-content-between align-items-center mt-2"
          >
            <h4 className="mx-3 text-white">{bebidas.name}</h4>
            <h5 className="mx-3 text-white">${bebidas.price}</h5>
            <Button variant="success">Comprar</Button>
          </div>
        ))}
      </Card>
    </Container>
  </>
        
)
        }
export default Menu;