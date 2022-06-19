import React from 'react'
import styled from 'styled-components';
import { Home, Navigator, Faq, Servicios, Contacto, MisRep} from '../components';
import {Routes, Route, useLocation} from 'react-router-dom';
import {appBackGround} from '../helpers/appBackGround';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                    <Route exact path="/misrep" element={<MisRep />}/> 
                    <Route exact path="/contacto" element={<Contacto />}/>
                    <Route exact path="/faq" element={<Faq />}/>
                    <Route path="/*" element={<Home />} /> 
                </Routes>
            </AppContain>
        </AppPage>

  )
}


const AppPage = styled.div`
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