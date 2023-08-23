/*import React from 'react'
import img1 from '../assets/pizza1.png'
import img2 from '../assets/burger1.png'
import img3 from '../assets/birra1.jpg'

function Carrusel() {
  return (
    <div id="carouselExampleControls" className="carousel slide m-5" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="PIIZA DE EN HORNO DE BARRO"/>
              <h5 className="text-center">PIZZAS AL HORNO DE BARRO CON BORDES RELLENOS </h5>
                <p className="text-center">Morrones y Jamon Cocido </p>
            </div>
            <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="BURGER"/>
              <h5 className="text-center">LAS BURGERS MÁS INCREIBLES</h5>
              <p className="text-center">Doble Provolone</p>
            </div>
            <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="CERVEZA"/>
              <h5 className="text-center">CERVEZA ARTESANAL</h5>
                <p className="text-center">LAS MEJORES CERVEZAS ARTESANALES ESTAN EN NUESTRO RESTÓ</p>
            </div>  
            <div className="carousel-item">
            <img src=".assets.pizza1src/assets/vero.jpeg.png" className="d-block w-100" alt="NUESTRO LOCAL"/>
              <h5 className="text-center">NUESTRO LOCAL</h5>
                <p className="text-center">DESPUES DE MUCHO ESPERALO, NUESTRO RESTO YA ESTA ABRIO SUS PUERTAS Y LOS ESPERA PARA BRINDARLES UNA EXPERIENCIA GASTRONOMICA ESPECTACULAR</p>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

/* <div className="row mt-4">
  <div className="col-md-8 offset-md-2">
        
        
  <h2>NUESTRA INSPIRACIÓN</h2>
  <p>Nos especializamos en burgers y pizzas al horno de barro.

Enorme variedad de pizzas, cada una con el toque especial de nuestro maestro pizzero.

Nada es más importante que ofrecer solamente lo mejor a nuestros clientes, es por eso que trabajamos con productos de primerísima calidad, asegurándonos un excelente producto final.

Siguiendo la tradición, decidimos combinar nuestra pizzas con cervezas que sean tan únicas con ellas, por eso hacemos la mejor 
cerveza artesanales de argentina para poder lograr una combinacion perfecta entre estos productos
.</p>
      
      </div
</div> 
    

  )
}

export default Carrusel;*/

import Carousel from "react-bootstrap/Carousel";
import slider1 from "../assets/pizza1.png";
import slider2 from "../assets/burger1.png";
import slider3 from "../assets/birra1.jpg";
import slider4 from "../assets/local.jpg";
import "../styles/stylehome.css";
function Carrusel() {
  return (
    <div className="slider container-slider mt-4">
      
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="carousel-image" src={slider1} alt="First slide" />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="carousel-image" src={slider2} alt="Second slide" />
          <Carousel.Caption>
            <h5>esto es un h5</h5>
            <p>esto es un p</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={slider3} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={slider4} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrusel;