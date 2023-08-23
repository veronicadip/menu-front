import React from 'react'
//import Carousel from 'react-bootstrap/Carousel';
import { Carrusel } from '../components/carrusel'
//import NavbarComponent from '../components/navbar';
//import Menu from '../components/Menu';
/*import { Carrusel } from '../components/carrusel';*/
/*import Menu from '../components/Menu';*/
import { Nosotras } from '../components/Nosotras'
import Menu from '../components/Menu'
//import Carrusel from '../components/carrusel';
/*import ExampleCarouselImage from 'components/ExampleCarouselImage';*/
import '../styles/stylehome.css'

const  Home = () => {
  
  return (
    <>
    
    <Carrusel/>
    <Menu/>
    <Nosotras/>
    </>
  )
}
export default Home;