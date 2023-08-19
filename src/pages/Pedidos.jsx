import React from 'react'
import { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Pedidos() {
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
        <div>
            {comidas.map((comida) => (
                <Card className='col-4'>
                    <Card.Img variant="top" src={"img/" + comida.img} />
                    <Card.Body>
                        <Card.Title>{comida.nombre}x{comida.cantidad}</Card.Title>
                        <Button onClick={() => manejoDeCantidad(comida.id, '+')} variant="primary">+</Button>
                        <Button onClick={() => manejoDeCantidad(comida.id, '-')} variant="primary">-</Button>
                        <h4>{comida.precio * comida.cantidad}</h4>
                        <Button onClick={() => eliminarComida(comida.id)} variant="danger">Eliminar</Button>
                    </Card.Body>
                </Card>)
            )}
        </div>
    )
}
