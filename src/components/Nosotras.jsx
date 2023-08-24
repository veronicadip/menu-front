import React from 'react'
import "../styles/stylenosotras.css"
import { Col, Row } from 'react-bootstrap'

export const Nosotras = () => {
  return (
    <>

    
<h2 className="text-center py-5">Sobre Nosotras</h2>
        <div className="container mb-5 ">
        <Row className="justify-content-between">
            <Col  xs={12} md={2} className="d-flex flex-column align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                    <img src="../assets/anita.jpeg" alt="Anita Guzman" className="rounded" style={{ width: '10rem', height:'10rem',marginStart:'10px' }}/>
                </div>
                <div className="contenido">
                    <h3>Anita Guzman</h3>
                       <span>Desarrollo Web</span>
                    </div>
            </Col>
                <Col  xs={12} md={2} className="d-flex flex-column align-items-center">
                <div className="imgBox">
                    <img src="../assets/Flor.jpeg" alt="Flor Quiroga" className="rounded imgnosotras"style={{ width: '10rem', height: '10rem' }}/>
                </div>
                <div className="contenido">
                    <h3>Florencia Quiroga</h3>
                        <span>Desarrollo Web</span>
                    </div>
                </Col>
            
            <Col  xs={12} md={2} className="d-flex flex-column align-items-center">
                <div className="imgBox">
                    <img src="./assets/maca.jpeg" alt="Maca Coronel" className="rounded" style={{ width: '10rem', height: '10rem' }}/>
                </div>
                <div className="contenido">
                    <h3>Macarena Coronel"</h3>
                        <span>Desarrollo Web</span>
                    </div>
                </Col>
            
                <Col  xs={12} md={2} className="d-flex flex-column align-items-center">
                <div className="imgBox">
                    <img src="./assets/sofi.jpeg" alt="Sofi Robinson" className="rounded" style={{ width: '10rem', height: '10rem' }}/>
                </div>
                <div className="contenido">
                    <h3>Sofia Robinson</h3>
                       <span>Desarrollo Web</span>
                    </div>
                </Col>
            
                <Col  xs={12} md={2} className="d-flex flex-column align-items-center">
                <div className="imgBox">
                    <img src="./assets/tania.jpeg" alt="Tania Argañaraz" className="rounded" style={{ width: '10rem', height: '10rem' }}/>
                </div>
                <div className="contenido">
                    <h3>Tania Argañaraz</h3>
                       <span>Desarrollo Web</span>
                    </div>
                </Col>

                <Col  xs={12} md={2} className="d-flex flex-column align-items-center">
                <div className="imgBox">
                    <img src="./assets/vero.jpeg" alt="Vero Dip" className="rounded" style={{ width: '10rem', height: '10rem' }}/>
                </div>
                <div className="contenido">
                    <h3>Veronica Dip</h3>
                        <span>Desarrollo Web</span>
                    </div>
                </Col>
                </Row>
        </div>

          
            

        
        </>
  )
}
