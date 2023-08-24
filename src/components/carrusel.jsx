import Carousel from "react-bootstrap/Carousel";
import slider1 from "../assets/pizza1.png";
import slider2 from "../assets/burger1.png";
import slider3 from "../assets/birra1.jpg";
import slider4 from "../assets/local.jpg";
import "../styles/stylehome.css";
function Carrusel() {
  return (
    <>
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
    <div className="text-center">
    <h2>NUESTRA INSPIRACIÓN</h2>
  <p>Nos especializamos en burgers y pizzas al horno de barro.

Enorme variedad de pizzas, cada una con el toque especial de nuestro maestro pizzero.

Nada es más importante que ofrecer solamente lo mejor a nuestros clientes, es por eso que trabajamos con productos de primerísima calidad, asegurándonos un excelente producto final.

Siguiendo la tradición, decidimos combinar nuestra pizzas con cervezas que sean tan únicas con ellas, por eso hacemos la mejor 
cerveza artesanales de argentina para poder lograr una combinacion perfecta entre estos productos
.</p>
    </div>
    </>

  );
}

export default Carrusel;