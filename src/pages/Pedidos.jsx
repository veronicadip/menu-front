import React from 'react'
import { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap';


function Pedidos() {
    const [comidas, setComidas] = useState([
        {
            id: 1,
            nombre: "pizza",
            precio: 2000,
            cantidad: 1,
            img: "pizza.jpg"
        },
        {
            id: 2,
            nombre: "hamburguesa",
            precio: 2000,
            cantidad: 1,
            img: "hamburguesa.jpg"
        },
        {
            id: 3,
            nombre: "milanesa",
            precio: 2000,
            cantidad: 1,
            img: "milanesa.jpg"
        },
        {
            id: 4,
            nombre: "coquita",
            precio: 800,
            cantidad: 1,
            img: "coquita.jpg"
        },
    ])
    const [total, setTotal] = useState(0); // Estado para el total

    useEffect(() => {
        // Calcula el total sumando el precio de cada comida multiplicado por la cantidad
        const newTotal = comidas.reduce((acc, comida) => acc + comida.precio * comida.cantidad, 0);
        setTotal(newTotal); // Actualiza el estado del total
    }, [comidas]); // Se ejecutará cada vez que el estado comidas cambie

    const manejoDeCantidad = (id, operacion) => {
        console.log(comidas);
        const nuevaListaComidas = comidas.map(comida => {
            if (comida.id === id) {
                const nuevaCantidad = operacion === '+' ? comida.cantidad + 1 : Math.max(comida.cantidad - 1, 1);
                return { ...comida, cantidad: nuevaCantidad };
            }
            return comida;
        });

        setComidas(nuevaListaComidas);
    }

    const eliminarComida = (id) => {
        const nuevaListaComidas = comidas.filter((comida) => {
            return comida.id !== id
        });
        setComidas(nuevaListaComidas)
        console.log(nuevaListaComidas)
    }

    return (
        <>  
        <div>
            <div className='px-5 d-flex flex-column gap-4 container'>
                <div className='overflow-auto' style={{ height: "60vh" }}>
                    {comidas.map((comida) => (
                        <Card className='col-12 d-flex flex-row mb-4' style={{ height: "200px" }}>
                            <div className='col-4 d-flex justify-content-start d-none d-md-block'>
                                <img className='img-fluid w-100' src={"img/" + comida.img} />
                            </div>
                            <div className='d-flex col align-items-center justify-content-around flex-column'>
                                <h4>{comida.nombre}</h4>
                                <div className='d-flex justify-content-around align-items-center col-3'>
                                    <Button onClick={() => manejoDeCantidad(comida.id, '-')} variant="primary">-</Button>
                                    <h5 className='mb-0'>{comida.cantidad}</h5>
                                    <Button onClick={() => manejoDeCantidad(comida.id, '+')} variant="primary">+</Button>
                                </div>
                                <h4>{comida.precio * comida.cantidad}</h4>
                                <Button onClick={() => eliminarComida(comida.id)} variant="danger">Eliminar</Button>
                            </div>
                        </Card>)
                    )}
                </div>
                <div className='col card p-4' style={{ height: "40vh" }}>
                    <div className='d-flex justify-content-around flex-column'>
                        <div>
                            <h4>Aclaracion para su pedido:</h4>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={5} />
                            </Form.Group>
                        </div>
                        <div className='mb-2'>
                            <h4>Total: {total}</h4>
                        </div>
                        <div className='d-flex flex-column justify-content-around gap-4'>
                            <Button variant="primary">Confirmar pedido</Button>
                            <Button variant="primary">Confirmar y pagar</Button>
                            <Button variant="danger">Cancelar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}



 export default Pedidos;