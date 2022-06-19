import React from 'react'
import styled from 'styled-components';
import { Carrusel } from '../components';



export const Home = () => {

  return (
    <MainPage>
      <Contain>
        <Carrusel />
      </Contain>
      <Pie>
        <div>
          <p>Sucursal Av. Avellaneda</p>
          <ul>
            <li>Direccion: Av. Avellaneda 45, CABA C1405CNA, Buenos Aires, Argentina</li>
            <li>Telefono: (011) 4981-2141</li>
            <li>WhatsApp: (+54) 11-5323-3702</li>
            <li>e-mail: jl_grana@hotmail.com</li>
          </ul>
        </div>
        <div>
          <p>Sucursal Gurruchaga</p>
          <ul>
            <li>Direccion: Calle Gurruchaga 558, CABA C1414DHK, Buenos Aires, Argentina</li>
            <li>Telefono: (011) 4856-9427</li>
            <li>WhatsApp: (+54) 11-5323-3702</li>
          </ul>
        </div>
        <div>
          <ul className="designed">
            <li>Designed by: Javier Russo</li>
            <li>&copy; 2022</li>
          </ul>
        </div>
      </Pie>
    </MainPage>
  )
};


const MainPage = styled.div`
  color: #f9f8f6;
  height: 90vh;
`
const Contain = styled.div`
  height: 75%;
  width: 100%;

  .carousel{
    top:50%;
  }

`
const Pie = styled.div`

  padding-top: 20px;
  whidth: 50%;
  height: 25%;
  background: var(--oscuro90);

  display: flex;
  justify-content: space-around;
  font-size: 15px;


  ul{
    list-style: none;
  }

  p{
    font-weight: 900;
    color: (--acento-oscuro);
  }

  

`
