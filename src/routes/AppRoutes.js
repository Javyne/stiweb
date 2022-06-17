import React from 'react'
import { Home } from '../components/Home';
import { Navigator } from '../components/Navigator';
import { Nosotros } from '../components/Nosotros';
import { Servicios } from '../components/Servicios';
import { Insumos } from '../components/Insumos';
import { Contacto } from '../components/Contacto';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '../styles/app.css';

export const AppRoutes = () => {


  return (

    <BrowserRouter>
        
        <div className="app-page">
            <div className="app-nav">
                <Navigator />
            </div>
            <div className="app-contain">
                <Routes>  
                    <Route exact path="/nosotros" element={<Nosotros />}/>
                    <Route exact path="/servicios" element={<Servicios />}/>
                    <Route exact path="/insumos" element={<Insumos />}/> 
                    <Route exact path="/contacto" element={<Contacto />}/>
                    <Route path="/*" element={<Home />} /> 
                </Routes>
            </div>
        </div>

    </BrowserRouter>


  )
}
