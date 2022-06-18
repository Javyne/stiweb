import React from 'react'
import { Home } from '../components/Home';
import { Navigator } from '../components/Navigator';
import { Faq } from '../components/Faq';
import { Servicios } from '../components/Servicios';
import { Insumos } from '../components/Insumos';
import { Contacto } from '../components/Contacto';
import {Routes, Route, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import {appBackGround} from '../helpers/appBackGround';
import '../styles/app.css';

export const AppRoutes = () => {

    const pagina = useLocation().pathname;

  return ( 
        
        <AppPage fondo = {appBackGround(pagina)}>
            <AppNav>
                <Navigator />
            </AppNav>
            <AppContain>
                <Routes>  
                    <Route exact path="/servicios" element={<Servicios />}/>
                    <Route exact path="/insumos" element={<Insumos />}/> 
                    <Route exact path="/contacto" element={<Contacto />}/>
                    <Route exact path="/faq" element={<Faq />}/>
                    <Route path="/*" element={<Home />} /> 
                </Routes>
            </AppContain>
        </AppPage>

  )
}


const AppPage = styled.div`
    height: 100vh;
    font-family: 'Lato', sans-serif;
    background: ${props => props.fondo};
    background-size: cover;
`

const AppNav = styled.div`
    width: 100%;
    height: 10%;
`

const AppContain = styled.div`
    height: 90%;
`