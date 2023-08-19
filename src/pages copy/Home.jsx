import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Carrusel } from '../components/carrusel';
import NavbarComponent from '../components/navbar';
import Menu from '../components/Menu';
import { Nosotras } from '../components/Nosotras';
/*import ExampleCarouselImage from 'components/ExampleCarouselImage';*/


const  Home = () => {
  
  return (
    <>
    <NavbarComponent/>
    <Carrusel/>
    <Menu/>
    <Nosotras/>
    </>
  )
}
export default Home