const url= "https://proyecto-menu.onrender.com/api/menu";

const token = JSON.parse(localStorage.getItem("token"));

export const mostrarMenu = async (limite = 0, pagina = 0) => {
  try {
    const resp = await fetch(url + "?limite=" + limite + "&desde=" + pagina);
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo obtener la info");
  }
};


 
  
  export const agregarProductos = async (datos) => {
    try {
      const resp = await fetch(url, {
        method: "POST",
        body: JSON.stringify(datos),
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
  
  
  export const editarProductos = async (id, datos) => {
    try {
      const resp = await fetch(url + "/" + id, {
        method: "PUT",
        body: JSON.stringify(datos),
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
  
  
  export const desactivarProductos = async (id) => {
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
  

