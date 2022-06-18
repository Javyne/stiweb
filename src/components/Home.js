import React from 'react'
import { Carrusel } from './Carrusel';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';



export const Home = () => {

  return (
    <MainPage>

      <Contain>
        <Carrusel />
      </Contain>
      
      <Pie>
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
      </Pie>
    </MainPage>
  )
};


const MainPage = styled.div`
  color: #f9f8f6;
  height: 100%;
`
const Contain = styled.div`
  height: 75%;
  width: 100%;

  .carousel{
    top:50%;
  }

`
const Pie = styled.div`
  height: 25%;
  background: var(--claro);

  h4{
    color: var(--oscuro);
    font-weight: 700;
  }

  form{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 50%;
  margin-left: 25%; 

  .btn-primary{
    background-color: var(--main) !important;
    border:none !important;
  }

  .btn-primary:hover{
    filter:brightness(110%) !important;
  } 

`
