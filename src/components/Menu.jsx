/*import { Card, Button, Container } from "react-bootstrap";*/
import '../styles/stylehome.css'
import { mostrarMenu  } from "../helpers/apiMenu";
import React, { useEffect, useState } from "react";
import { traerCategoria } from "../helpers/apiCategoria";
// import birraImage from '../assets/img/birra1.jpg';


function Menu() { 
  
const infoMenu ={
  nombre: '',
  precio: '',
  categoria: '', 
  descrpcion: '', 
  foto: '',
}
const [productos, setProductos] = useState([]); // Usaremos un estado para almacenar los productos

  useEffect(() => {
    traerMenuBD(); // Llama a la función para obtener los productos del backend
  }, []);

const traerMenuBD = async ( ) => {
  try {
    const { producto } = await mostrarMenu(); // Obtén los productos desde la API

    setProductos(producto); // Actualiza el estado con los productos obtenidos
  } catch (error) {
    console.error("Error al obtener los productos:", error);
  }
};
  



return ( 
  <>
        
        <div>
        <h2 className="text-center">Pizza</h2>
      </div>
      {productos.map((producto) => (
        <Card key={producto._id} className="m-2" style={{ width: "18rem" }}>
          {/* Agrega la información del producto a la tarjeta */}
          <Card.Img variant="top" src={producto.foto} alt={producto.nombre} />
          <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Text>{producto.descripcion}</Card.Text>
            <Card.Text>Precio: ${producto.precio}</Card.Text>
          </Card.Body>
        </Card>
      ))}
</>

)
}
export default Menu;
/*return (
  <>
    <Container className="d-flex flex-wrap w-100 ">
     
      <Card className="boxCardMenu fondoCardPizza border bg-danger p-4 ">
        <div>
          <h2 className="text-center">Pizza</h2>
        </div>
        {pizzas.map((pizza, index) => (
          <div
            key={index}
            className="d-flex flex-wrap justify-content-between align-items-center mt-2 text-white"
          >
            <h3 className="mx-3 letramenu">{pizza.nombre}</h3>
            <h4 className="mx-3 letramenu">${pizza.precio}</h4>
            <h4 className="mx-3 letramenu">{pizza.Descripcion}</h4>
            <Button variant="danger">Comprar</Button>
            <Button variant="danger">Eliminar</Button>
          </div>
        )
        )
}
      </Card>
      </Container>

      <Container>   
      <Card className="boxCardMenu fondoCardHamburguesas border bg-danger p-4 col-md-6 mb-3 ">
        <div>
          <h2 className="text-center text-white">Burgers</h2>
        </div>
        {hamburguesas.map((hamburguesas, index) => (
          <div
            key={index}
            className="d-flex flex-wrap justify-content-between align-items-center mt-2 text-white"
          >
            <h3 className="mx-3 text-white">{hamburguesas.nombre}</h3>
            <h4 className="mx-3 text-white">${hamburguesas.precio}</h4>
            <h4 className="mx-3 letramenu">{hamburguesas.Descripcion}</h4>
            <Button variant="danger">Comprar</Button>
            <Button variant="danger">Eliminar</Button>
          </div>
        ))}
      </Card>

      <Card className="boxCardMenu fondoCardCervezas border bg-danger p-4">
        <div>
          <h2 className="text-center text-white">Cervezas</h2>
        </div>
        {bebidas.map((bebidas, index) => (
          <div
            key={index}
            className="d-flex flex-wrap justify-content-between align-items-center mt-2 text-white"
          >
            <h3 className="mx-3 text-white">{bebidas.nombre}</h3>
            <h4 className="mx-3 text-white">${bebidas.precio}</h4>
            <h4 className="mx-3 letramenu">{bebidas.Descripcion}</h4>
            <Button variant="danger">Comprar</Button>
            <Button variant="danger">Eliminar</Button>
          </div>
        ))}
      </Card>
    </Container>
  </>
        
)
        }*/

/* pizzas = [
  { nombre: "Cheddar Borde Relleno", Descripcion: "salsa de tomate, cheddar y relleno de bordes a eleccion",precio: 2000 },
  { nombre: "Jamon y Morrones", Descripcion: "salsa de tomate, jamon y morrones",     precio: 2000 },
  { nombre: "Cuatro Quesos", Descripcion:" salsa de tomate y muzarela, roquefort, parmesano y fontina",     precio: 2000 },
  { nombre: "Espinaca y Morrones",Descripcion: "salsa de tomate espinaca y morrones",  precio: 2000 },
  
];
const hamburguesas = [
  { nombre: "Doble Provolone", Descripcion: "pan, burger, doble provolone", precio: 2000 },
  { nombre: "Doble Cheddar",Descripcion: "pan, burger, doble cheddar", precio: 2000 },
  { nombre: "Bacon ", Descripcion: "pan, burger, extra bacon",  precio: 2000 },
  { nombre: "Vegetariana ", Descripcion: "pan, verduras grilladas queso cheddar", precio: 2000 },
  
];

const bebidas = [
  { nombre: "Honey ", Descripcion: " realizaba con miel, graduación alcohólica es de 7,7% ", precio: 1500 },
  { nombre: "Amber ",Descripcion:" cerveza roja Con 7% grados de alcohol", precio: 1500 },
  { nombre: "Ipa  ",Descripcion:" cerveza amarga, graduación alcohólica entre 5 y 7 %", precio:  1500 },
  { nombre: "Stout ",Descripcion:" cerveza malta caramelizadas graduación alcohólica promedia los 5°C", precio: 1500 },
  
]; */