const url = "https://proyecto-menu.onrender.com/api/pedidos";

const token = JSON.parse(localStorage.getItem("token"));

export const mostrarPedidosGeneral = async (limite = 0, pagina = 0) => {
    try {
      const resp = await fetch(url + "?limite=" + limite + "&desde=" + pagina);
      const data = await resp.json();
  
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("No se pudo obtener la info");
    }
  };
  
  
  export const mostrarMiPedidoId = async (id) => {
    try {
      const resp = await fetch(url + "/" + id, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-token": token,
        },
      });
      const data = await resp.json();
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("No se pudo obtener la info");
    }
  };
  
  
  export const crearMiPedido = async (datos) => {
    try {
      const resp = await fetch(url, {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          
        },
      });
  
      const data = await resp.json();
  
      return data;
    } catch (error) {
      console.log(error);
      return { msg: "No se conectó con backend" };
    }
  };
  
  //Actualizar un curso
  export const modificarMiPedido = async (id, datos) => {
    try {
      const resp = await fetch(url + "/" + id, {
        method: "PUT",
        body: JSON.stringify(datos),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          
        },
      });
  
      const data = await resp.json();
  
      return data;
    } catch (error) {
      console.log(error);
      return { msg: "No se conectó con backend" };
    }
  };
  

  export const pedidoCompleto = async (id) => {
    try {
      const resp = await fetch(url + "/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-token": token,
        },
      });
  
      const data = await resp.json();
  
      return data;
    } catch (error) {
      console.log(error);
      return { msg: "No se conectó con backend" };
    }
  };
  