import {React} from 'react'
import {Link, useLocation} from 'react-router-dom';
import styled from 'styled-components';


export const Navigator = () => {

    const pagina = useLocation().pathname;

    return (
        <>
            <Nav>
                <div>
                    <Img src='../../images/STINEGRO3.png'/>
                </div>
                <LinksDiv >
                    <NavLinks pagina={ pagina } to='/'>Home</NavLinks>
                    <NavLinks pagina={ pagina } to='/nosotros'>Nosotros</NavLinks>
                    <NavLinks pagina={ pagina } to='/servicios'>Servicios</NavLinks>
                    <NavLinks pagina={ pagina } to='/insumos'>Insumos</NavLinks>
                    <NavLinks pagina={ pagina } to='/contacto'>Contacto</NavLinks>
                </LinksDiv>
            </Nav>
        </>
    )
}


const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content:space-around;
`

const LinksDiv = styled.div`
    display: flex;
    justify-content: space-around;
`

const NavLinks = styled(Link)`
    text-decoration: none;
    color: ${link => NavLinkColor(link.to).color};
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    margin-left: 75px;

    &:hover{
        color: ${link => NavLinkColor(link.to).hover};
    }

`
const Img = styled.img`
    height: 70px;
    margin-top: 10px;
`

const NavLinkColor = (linkName) =>{
    const pagina = useLocation().pathname;
    
    if(pagina === '/'){
        return ({color:'var(--claro)',hover:'var(--oscuro)'});
    }
    else if(pagina === linkName){
        return ({color:'var(--main)',hover:'var(--oscuro)'});
    }
    else
    {
        return ({color:'var(--oscuro)',hover:'var(--main)'});
    }



}