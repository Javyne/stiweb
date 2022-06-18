import React from 'react'
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';

export const Servicios = () => {
  return (
    <>
      <Pagina>
        <CajaTexto>
          <h3>Reparaciones</h3>
          <hr/>
          <h5>Reparamos todo tipo de defectos y fallas.</h5>
          <ul>
            <li><FaCheckCircle/> Tv LCD, Smart, LED, 4K curvos.</li>
            <li><FaCheckCircle/> Equipos de Audio.</li>
            <li><FaCheckCircle/> Microondas.</li>
          </ul>
        </CajaTexto>
        <Imagen src='../../images/it-1.jpg'/>
        <Imagen src='../../images/it-2.jpg'/>
        <CajaTexto>
          <h3>Actualizaciones</h3>
          <hr/>
            <h5>Actualización de firmware.</h5>
            <ul>
              <li><FaCheckCircle/> Amplia gama de marcas y modelos.</li>
              <li><FaCheckCircle/> Correccion de errores. </li>
              <li><FaCheckCircle/> Mejoras de la funcionalidad.</li>
            </ul>
        </CajaTexto>
        <CajaTexto>
          <h3>Reparación de computadoras</h3>
          <hr/>
          <h5>Reparamos todo tipo de defectos y fallas.</h5>
            <ul>
              <li><FaCheckCircle/> Computadoras personales.</li>
              <li><FaCheckCircle/> Laptops.</li>
              <li><FaCheckCircle/> Servicio de diagnosticos.</li>
            </ul>
        </CajaTexto>
        <Imagen src='../../images/it-5.jpg'/>


      </Pagina>

    </>
  )
}

const Pagina = styled.div`
  width: 70%;
  margin-left: 25%;
  display: flex;
  flex-wrap: wrap;
`


const CajaTexto = styled.div`
  width: 35%;
  margin: 20px;
  padding: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h3{
    font-weight: 700;
  }

  li{
    color: grey;
    list-style: none;
  }

  h5{
    color: grey;
  }

  svg{
    color: var(--main);
  }
`
const Imagen = styled.img`

  width: 35%;
  border-radius: 10px;
  margin: 20px;

`