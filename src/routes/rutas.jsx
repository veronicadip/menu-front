import { Routes, Route } from 'react-router-dom';
import  Home  from '../pages/homeScreem';
import  Admin from '../pages/admin';
import  App2  from '../pages/registro';
import  Pedidos  from '../pages/pedidos';
import ModalLogin from '../pages/login';
import NavbarComponent from '../components/navbar';
import ProtectRoutesAdmin from "./protectRoutesAdmin"
//import { ProtectRoutes } from './routes/protectRoutes';
//import { useState } from 'react';
//import ModalLogin from './components/login';

const Rutas= ({cerrarSesion,user}) => {

 
  
  return(
    <> 
            <NavbarComponent cerrarSesion={cerrarSesion} user={user} />
            <Routes>
           <Route path='/homeScreem' element={<Home/>}/>
           <Route path='/registro' element={<App2/>}/>
           <Route path='/pedidos' element={<Pedidos/>}/>
           <Route path='/login' element={<ModalLogin/>}/>
           <Route
            path='/admin'
            element={
           <ProtectRoutesAdmin  user={user}>
            <Admin/>
            </ProtectRoutesAdmin>
          }/>
        </Routes>
   </>
  );
};

export default Rutas;