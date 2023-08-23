import React from 'react'

/*import { Carrusel } from '../components/carrusel';*/
/*import Menu from '../components/Menu';*/
import { Nosotras } from '../components/Nosotras';
import Menu from '../components/Menu';
import Carrusel from '../components/carrusel';
import '../styles/stylehome.css';


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