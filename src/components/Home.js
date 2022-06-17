import React from 'react'
import { Carrusel } from './Carrusel';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';


export const Home = () => {

  return (
    <div className="home">

      <div className="home-contain">
        <Carrusel />
      </div>
      
      <div className="home-pie">
        <Form>
          <Row >
            <Form.Label ><h4>Solicitar Presupuesto</h4></Form.Label>
            <Form.Group as={Col} controlId="nombreID">
              <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            <Form.Group as={Col} controlId="telefonoID">
              <Form.Control type="" placeholder="Telefono" />
            </Form.Group>
            <Form.Group as={Col} controlId="mailID">
              <Form.Control placeholder="e-mail" />
            </Form.Group>
            <Button as={Col} variant="primary" type="submit">
              Enviar
            </Button>
          </Row>
        </Form>
      </div>
    </div>
  )
}
