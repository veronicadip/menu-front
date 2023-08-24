import React from 'react'

/*import { Carrusel } from '../components/carrusel';*/
/*import Menu from '../components/Menu';*/
import { Nosotras } from '../components/Nosotras';
import Menu from '../components/Menu';
import Carrusel from '../components/carrusel';
import '../styles/stylehome.css';
import NavbarSinRutas from '../components/navbar2';


import Footer from '../components/footer';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
</style>



const  Home = () => {
  
  return (
    <> 
    <NavbarSinRutas/>
    <Carrusel/>
    <Menu/>
    <Nosotras/>
    <Footer/>
    </>
  )
}
export default Home;