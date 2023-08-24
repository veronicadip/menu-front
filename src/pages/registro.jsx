import React, { useState } from 'react';
import '../pages/Registro.css';
import { crearUsuario } from '../helpers/apiUsuario'
 <style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
</style>

function App2() {
  const initialFormData = {
    nickname: '',
    mail: '',
    celular: '',
    passwordm: '',
    direccion: '',
    rol: 'USER_ROLE'
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Llamar a la función para crear el usuario en la base de datos
      await crearUsuario(formData);

      // Limpiar el formulario después de enviar los datos
      setFormData(initialFormData);

      console.log('Datos enviados y almacenados en la base de datos:', formData);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };
  
  return (
    <div className="form">
      <h1>Formulario de Registro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nickname:</label>
          <input type="text" name="nickname" maxLength={14} minLength={3} value={formData.nickname} onChange={handleChange} required />
        </div>
        <div>
          <label>Mail:</label>
          <input type="email" name="mail" value={formData.mail} onChange={handleChange} required />
        </div>
        <div>
          <label>Celular:</label>
          <input type="tel" name="celular" value={formData.celular} onChange={handleChange} required />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" name="password" maxLength={8} minLength={8} value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Dirección:</label>
          <input type="text" name="direccion" maxLength={25} minLength={3} value={formData.direccion} onChange={handleChange} required />
        </div>
        <button type="submit">Registrarse</button>
        <button className='cancel' type="reset" onClick={handleReset}>Cancelar</button>
      </form>
    </div>
  );
}

export default App2;
