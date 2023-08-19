import React from 'react'

import Carrusel from '../components/Carrusel.jsx'
import NavbarComponent from '../components/Navbar.jsx';
import Menu from '../components/Menu';
import { Nosotras } from '../components/Nosotras';
/*import ExampleCarouselImage from 'components/ExampleCarouselImage';*/


const  Home = () => {
  
  return (
    <>
    <NavbarComponent />
    <Carrusel />
    <Menu />
    <Nosotras />
    </>
  )
}
export default Home