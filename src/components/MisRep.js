import React, { useState } from 'react'
import styled from 'styled-components';
import { TablaRep } from './TablaRep';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import { dataCliente, dataReparaciones } from '../helpers';

export const MisRep = () => {

    const [data, setData] = useState([]);


    const checkData = ( e ) => {
      e.preventDefault();
      let cliente = parseInt(e.target[0].value);
      let pass = e.target[1].value.toString();
      dataCliente(cliente,pass)?setData(dataReparaciones(cliente)):alert("Datos incorrectos");     
    }

  return (
    <Main>
      <Container>
        <Form onSubmit={checkData} >
          <Row>
            <Col sm={2} >
              <Form.Group controlId="usuario">
                <Form.Control type="text" placeholder="Nro Cliente"/>
              </Form.Group>
            </Col>
            <Col sm={2} >
              <Form.Group controlId="pass">
                <Form.Control type="pasword" placeholder="Contraseña"/>
              </Form.Group>
            </Col>
            <Col sm={2} >
              <Boton variant="primary" type="submit">
                Ver mis reparaciones
              </Boton>
            </Col>
          </Row>
        </Form>
      </Container>
      <div className="tabla">
        <TablaRep dataCliente={data} />
      </div>
      
    </Main>

  )
}

const Main = styled.div`
  margin-top: 50px;
  height: 85vh;

  .tabla{
    margin-top: 50px;
  }
`
const Boton = styled(Button)`
  background-color: var(--main);
  border: none;

  &hover{
    filter: brightness(110%);
  }

`
