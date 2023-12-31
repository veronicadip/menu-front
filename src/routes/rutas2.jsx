import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  ProtectRoutes from "./routes/protectRoutes";
import Rutas from "./routes/rutas";
// import "./App.css";
import ModalLogin from "./pages/login";

function Rutas2() {
  //Estados para manejar login y datos de usuario
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  //Función para guardar datos del usuario autenticado
  const guardarUsuario = (datos) => {
    setUser(datos);
  };

  //Función cuando inicia sesión
  const iniciarSesion = () => {
    setLogin(true);
  };

  //Función cuando cierra sesión
  const cerrarSesion = () => {
    setLogin(false);
  };

  return (
    <BrowserRouter>
      <Routes>
      {/*Rutas protegidas que reciben login, datos de usuario y función cerrar sesión*/}
      <Route
        path="/"
        element={
          <ProtectRoutes login={login}>
            <Rutas cerrarSesion={cerrarSesion} user={user} />
          </ProtectRoutes>
        }
      />
      <Route
          path="/login"
          element={
            <ModalLogin
              iniciarSesion={iniciarSesion}
              guardarUsuario={guardarUsuario}
            />
          }
        />
        
    
      </Routes>
    </BrowserRouter>
  );
}

export default Rutas2