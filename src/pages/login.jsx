import React,  { useState }from 'react';
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import { ingresarLogin } from '../helpers/apiLogin'
import { useNavigate } from "react-router-dom";
import MessageApp from '../components/message';



    const ModalLogin  = ({iniciarSesion, guardarUsuario }) =>{
        const navigate = useNavigate();
      
        const [inputCorreo, setInputCorreo] = useState("");
        const [inputPassword, setInputPassword] = useState("");
      
        const [resultado, setResultado] = useState(null);

        const [loading, setLoading] = useState(false);
      
        const handleLogin = async (e) => {
          e.preventDefault();
          setLoading(true);
          //Obtener datos ingresados
          const datos = {
            mail: inputCorreo,
            password: inputPassword,
          };
       //hacer petición a la API
       const resp = await ingresarLogin(datos);
       console.log(resp);
       
       //Guardar token
       if (resp?.token) {
         localStorage.setItem("token", JSON.stringify(resp.token));
      
         //ejecutar función iniciar sesión
         iniciarSesion();
         //guardar datos del usuario
         const { nickname, mail, rol, uid } = resp.usuario;
         guardarUsuario({
           nickname,
           mail,
           rol,
           uid,
         });
         //redireccionar
         navigate("/");
       }
       setResultado(resp);
       setLoading(false);
      };
    return (
        <div className="bg-dark">
        <div className="container container-login">
          <div className="row px-2">
            <div className="col-12 col-md-4 offset-md-4 card-login">
              <div className="d-flex justify-content-center align-items-center">
                <img src={logo} alt="logo" />
              </div>
              <h3 className="text-center mt-2">
                <span>
                  <i className="fa fa-user-circle" aria-hidden="true"></i>{" "}
                </span>
                Inicio de sesión
              </h3>
              <form onSubmit={handleLogin}>
                <div className="mt-3">
                  <label className="fw-bold">Correo</label>
                  <input
                    type="email"
                    className="form-control"
                    value={inputCorreo}
                    onChange={(e) => setInputCorreo(e.target.value)}
                  />
                </div>
                <div className="mt-3">
                  <label className="fw-bold">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                  />
                </div>
                <div className="mt-3 d-grid">
                  <button className="btn btn-dark" disabled={loading && true}>
                    Iniciar
                  </button>
                </div>
              </form>
              {resultado?.msg && (
                <div className="mt-2">
                  <MessageApp mensaje={resultado.msg} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div> 
      
      
        )
}

export default ModalLogin;
        
        
        
        {/*
        <Form onSubmit={handleLogin}>
        
        
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={inputCorreo}
                  onChange={(e) => setInputCorreo(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)} />
      </Form.Group>
   
        
        
        
          <Button variant="primary"   disabled={loading && true}>
            ingresar
          </Button>
          
        
        </Form>*/}
        
        