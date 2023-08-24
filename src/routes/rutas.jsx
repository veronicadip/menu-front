import React from 'react'
/*import Home from './pages/home'*/
//import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import  Home  from '../pages/homeScreem';
import  Admin from '../pages/admin';

import  App2  from '../pages/registro';
import  Pedidos  from '../pages/pedidos';
import NavbarComponent from '../components/navbar';
import ProtectRoutes from './protectRoutes';
import { useState } from 'react';
import ModalLogin from '../pages/login';

function Rutas(){

  const [auth, setAuth] = useState (false);

  const LogIn = () => {
        setAuth(true);
  };

  const LogOut = () => {
     setAuth(false);
  }
  return( <BrowserRouter>
            <NavbarComponent  />
            <ModalLogin logIn={LogIn} logOut={LogOut} auth={auth}/>
           <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/admin' element={
           <ProtectRoutes auth={auth}>
            <Admin/>
            </ProtectRoutes>
          }/>
          <Route path='/login' element={<ModalLogin/>}/>
           <Route path='/registro' element={<App2/>}/>
           <Route path='/Pedidos' element={<Pedidos/>}/>
           
 

           
           </Routes>
          </BrowserRouter>)
}

export default Rutas;