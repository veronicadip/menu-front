import React from 'react'

/*import { Carrusel } from '../components/carrusel';*/
/*import Menu from '../components/Menu';*/
import { Nosotras } from '../components/Nosotras';
import Menu from '../components/Menu';
import Carrusel from '../components/carrusel';
import '../styles/stylehome.css';
import { NavbarComponent } from '../components/navbar';
import footer from '../components/footer';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
</style>



const  Home = () => {
  
  return (
    <> 
    
    <Carrusel/>
    <Menu/>
    <Nosotras/>
    <footer/>
    </>
  )
}
export default Home;