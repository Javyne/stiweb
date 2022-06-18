import React from 'react'
import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';

export const Faq = () => {
  return (
    <>
      <Main>
        <ComoTrabajamos>
          <h2>Como Trabajamos</h2>
          <hr />
          <h4>Nos esforzamos por satisfacer las necesidades de nuestros clientes y brindarle un servicio rápido y oportuno.</h4>
          <ul>
            <li>
              <div>1</div>
              <h3>Presupuesto</h3>
              <p>Realizamos el diagnostico y presupuesto SIN CARGO.</p>
            </li>
            <li>
              <div>2</div>
              <h3>Repuestos</h3>
              <p>Una vez aprobado el presupuesto, se compran los repuestos y materiales de primera caldad.</p>
            </li>
            <li>
              <div>3</div>
              <h3>Reparación</h3>
              <p>Realizamos la reparación en nuestros talleres especializados, con las mejore normas de seguridad.</p>
            </li>
            <li>
              <div>4</div>
              <h3>Devolución</h3>
              <p>Devolvemos el equipo, reparado y funcional, con GARANTIA DE 6 MESES.</p>
            </li>
          </ul>
        </ComoTrabajamos>
        <PFTit>Preguntas frecuentes</PFTit>
        <Preguntas>
          <div className="Divaccordion">
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0" >
              <Accordion.Header>- ¿Cuánto tiempo tarda una reparación típica?</Accordion.Header>
              <Accordion.Body>
                <p>
                  Depende del tipo de reparación, y del tiempo para adquirir los repuestos necesarios, puede tardar entre 1 semana hasta 30 dias.
                  De todas formas siempre se da aviso al cliente.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>- ¿Dan alguna garantía sobre la reparación?</Accordion.Header>
              <Accordion.Body>
                <p>
                  Ofrecemos una garantía de 6 meses sobre los repuestos y reparaciones que nosotros le hicimos al equipo.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>- ¿Se piede alguna información del dispostivo?</Accordion.Header>
              <Accordion.Body>
                <p>
                  Depende del daño que el equipo haya sufrido es posible que esa información no se pierda. Siempre se le da aviso al cliente si es que se puede llegar a perder dicha información.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>- ¿Se necesita cita previa?</Accordion.Header>
              <Accordion.Body>
                Se puede acercar a nuestros locales sin cita previa.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>- ///Ver alguna pregunta tipica mas</Accordion.Header>
              <Accordion.Body>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </div>
          <img src='../../images/it-1.jpg'/>
        </Preguntas>
      </Main>


    </>
  )
}

const Main = styled.div`
  width: 100%;
`

const ComoTrabajamos = styled.div`
  text-align: center;
  margin-top: 5%;

  hr{
    width: 10%;
    margin-left: 45%;
    color: var(--acento-oscuro);
    height: 2px;
    opacity: 1;
  }

  h4{
    color: grey;
    width: 30%;
    margin-left: 35%;
  }

  h2, h3, div{
    font-weight: 900;
  }

  ul{
    display: flex;
    flex-direction: row wrap;
    justify-content: space-around;
    list-style: none;
    border-top: 2px solid var(--main);
    margin-top: 5%;
    width: 80%;
    margin-left: 10%;

    li{
      width: 20%;

      div{
        border: 2px solid var(--main);
        border-radius: 50%;
        position: relative;
        top: -22px;
        background-color: var(--claro);
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      p{
        color: grey;
        font-weight: 700;
      }
    }
  }


`

const PFTit = styled.h2`
  margin-left: 5%;
  font-weight: 900;
`

const Preguntas = styled.div`
  display: flex;
  margin-left: 5%;
  margin-top: 5%;
  align-items: center;
  justify-content: space-around;

  .Divaccordion{
    width: 40%;
  }

  img{
    width: 35%;
    border-radius: 10px;
    margin: 20px;
  }

  .accordion-item{
    border-color: var(--acento-claro);
  }

`

