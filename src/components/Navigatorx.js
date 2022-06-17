import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import '../styles/navigator.css';

export const Navigator = () => {
    return (
        <>
            <Navbar bg="shadow" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand><img src='../../images/STIBlanco.png'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" >
                        </Nav>
                        <Nav className="me-auto" >
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/Nosotros">Nosotros</Nav.Link>
                            <Nav.Link as={Link} to="/">Servicios</Nav.Link>
                            <Nav.Link as={Link} to="/">Insumos</Nav.Link>
                            <Nav.Link as={Link} to="/">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
