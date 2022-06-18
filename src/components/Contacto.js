import React from 'react'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {BsGeoAlt, BsTelephone, BsWhatsapp, BsMailbox} from 'react-icons/bs';


export const Contacto = () => {
  return (
    <>
      <Main>
        <Formulario>
          <Form>
          <h1>CONTACTO</h1>
          <p>
            Para contactarnos, por favor complete el siguiente formulario, o bien, comuníquese a través de los siguientes medios. Un asesor lo estará contactando a la brevedad.
          </p>

            

                <Form.Group className="mb-3" controlId="nombreID">
                  <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="telefonoID">
                  <Form.Control type="" placeholder="Telefono" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="mailID">
                  <Form.Control placeholder="e-mail" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="msjID">
                  <Form.Control as="textarea" placeholder="Mensaje" />
                </Form.Group>
                <Button className="mb-3" variant="primary" type="submit">
                  Enviar
                </Button>

            </Form>

        </Formulario>
        <Data>
          <div className="mapa">
              ///COLOCAR MAPA///
          </div>
          <div className="datos">

          <h5>TALLER</h5>
            <p><BsGeoAlt/> Av. Avellaneda 45, CABA CP1405, Buenos Aires, Argentina</p>
            <p><BsTelephone/> (011) 4981-2141</p>
            <p><BsWhatsapp/> (+54) 11-5323-3702</p>
            <p><BsMailbox/> jl_grana@hotmail.com</p>
          </div>
        </Data>
      </Main>









    </>
  )
}

const Main = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`
const Formulario = styled.div`
  height: 100%;
  width: 50%;
  border-right: 1px solid #ccc;


  form{
    width: 60%;
    margin-left: 20%;
    margin-top: 15%;

    p{
      color: grey;


    }
  }
`
const Data = styled.div`
  height: 100%;
  width: 50%;
  

  .mapa{
    height: 50%;
    width: 100%;
    text-align: center;
    color:red;

  }

  .datos{
    height: 50%;
    width: 80%;
    margin-left: 10%;

    p{
      color: grey;
      font-style: italic;

      svg{
        color:var(--main);
      }
    }
  }

`
