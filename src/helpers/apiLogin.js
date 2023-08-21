const url = "https://proyecto-menu.onrender.com/api/auth";


export const ingresarLogin= async(datos)=>{
    try {
        const resp= await fetch(url,{
            method : "POST",
            body : JSON.stringify(datos),
            headers:{"Content-type":"application/json; charset-UTF-8",},
    
    
        });
        const data= await resp.json();
        return data;
    } catch (error){ 
        console.error(error);
        throw new Error("No se conecto al backend");
    
    };
    };
    