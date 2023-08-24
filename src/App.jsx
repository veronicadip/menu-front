//import { useState } from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import  ProtectRoutes from "./routes/protectRoutes";
//import Rutas from "./routes/rutas";
// import "./App.css";
//import ModalLogin from "./pages/login";
import React from 'react'
import Home from './pages/homeScreem'
//import NavbarComponent from './components/navbar';
//import Pedidos from './pages/pedidos';
//import ModalLogin from './pages/login';
function App() {
  //Estados para manejar login y datos de usuario
  //const [login, setLogin] = useState(false);
  //const [user, setUser] = useState(null);

  //Función para guardar datos del usuario autenticado
  //const guardarUsuario = (datos) => {
  //  setUser(datos);
  //};

  //Función cuando inicia sesión
  //const iniciarSesion = () => {
  //  setLogin(true);
  //};

  //Función cuando cierra sesión
  //const cerrarSesion = () => {
   // setLogin(false);
 // };

  return (
    <>
    
    <Home/>
    </>
  );
}

export default App;
