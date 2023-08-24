import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/login.css';

const ModalLogin = () => {
  return (
    <section className="vh-100 d-flex justify-content-center align-items-center" >
      <Container  >
        <Row className="justify-content-center" >
          <Col md={8} lg={6} xl={4}>
            <div className="login-form" border="danger">
              <h2 className="text-center">LOGIN</h2>

              <div className="divider mb-4"></div>

              <Form.Group className="mb-4">
                <Form.Control type="email" placeholder="Escribe tu email" />
                <Form.Label>Email</Form.Label>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Escribe tu contraseña" />
                <Form.Label>Password</Form.Label>
              </Form.Group>

              <div className="d-flex justify-content-between align-items-center">
                <Form.Check className="mb-0">
                  <Form.Check.Input type="checkbox" id="form2Example3" />
                  <Form.Check.Label>Remember me</Form.Check.Label>
                </Form.Check>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <Button variant="primary" size="lg">Login</Button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    No tienes cuenta? <a href="#!" className="text-danger">Registrate</a>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ModalLogin;
