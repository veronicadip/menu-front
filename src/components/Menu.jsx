import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import birraImage from '../assets/img/birra1.jpg';

function Menu() {
  return (
    <>
     <Card className="text-center mt-3 mx-3" style={{ width: "18rem" }}>
      <Card.Img variant="top" src="../assets/img/local.jpg" />{" "}
      {/* Use the imported image */}
      <Card.Body>
        <Card.Title className="text-center mb-3">PIZZAS</Card.Title>
        <Card.Text>
          {/* Removed the <p> element */}
          <span>Chedar con Bordes Rellenos $2000</span>{" "}
          <span>
            {" "}
            <Button variant="primary">Agregar</Button>
          </span>
          <br />
          <span>Jamon y Morrones $2000</span>{" "}
          
          <span>
            {" "}
            <Button variant="primary">Click me</Button>
          </span>
          <span>Cuatro Quesos $2000</span>{" "}
          <span>
            {" "}
            <Button variant="primary">Click me</Button>
          </span>
          <br />
          <span>Espinaca y Morrones $2000</span>{" "}
          
          <span>
            {" "}
            <Button variant="primary">Agregar</Button>
          </span>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="text-center mt-3 mx-3" style={{ width: "18rem" }}>
      <Card.Img variant="top" src="../assets/img/local.jpg" />{" "}
      {/* Use the imported image */}
      <Card.Body>
        <Card.Title className="text-center mb-3">BURGERS</Card.Title>
        <Card.Text>
          {/* Removed the <p> element */}
          <span>Doble Provolone $2000</span>{" "}
          <span>
            {" "}
            <Button variant="primary">Click me</Button>
          </span>
          <br />
          <span>Doble Chedar $2000</span>{" "}
          
          <span>
            {" "}
            <Button variant="primary">Click me</Button>
          </span>
          <span>Bacon $2000</span>{" "}
          <span>
            {" "}
            <Button variant="primary">Click me</Button>
          </span>
          <br />
          <span>Vegetariana $2000</span>{" "}
          
          <span>
            {" "}
            <Button variant="primary">Click me</Button>
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
    
    <Card className="text-center mt-3 mx-3" style={{ width: "18rem" }}>
      <Card.Img variant="top" src="../assets/img/local.jpg" />{" "}
      {/* Use the imported image */}
      <Card.Body>
        <Card.Title className="text-center mb-3">CERVEZA ARTESANAL</Card.Title>
        <Card.Text>
          {/* Removed the <p> element */}
          <span>Honey $1500</span>{" "}
          <span>
            {" "}
            <Button variant="primary">Click me</Button>
          </span>
          <br />
          <span>Amber $1500</span>{" "}
          
          <span>
            {" "}
            <Button variant="primary">Click me</Button>
          </span>
          <span>Ipa $1500</span>{" "}
          <span>
            {" "}
            <Button variant="primary">Click me</Button>
          </span>
          <br />
          <span>Stout $1500</span>{" "}
          
          <span>
            {" "}
            <Button variant="primary">Click me</Button>
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
   
    
  );
}

export default Menu;