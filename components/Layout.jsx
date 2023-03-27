import styled, { css, keyframes } from "styled-components"
import { createGlobalStyle } from "styled-components"
import { Link } from "react-scroll"
import { useState } from "react"
import { Contenedor } from "@/pages/_app";

export const GlobalStyles = createGlobalStyle`

 body{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
    user-select: none;
 }

 a{
    text-decoration: none;
 }
`;
const ContenedorGlobal = styled.div`
    width: 100%;
    height: max-content;
`
const Nav = styled.nav`
    height: 45px;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 0px 5px #00000052;
    z-index: 1000;
    width: calc(100% - 200px);
    padding: 0px 100px;
    
    @media (max-width: 576px) {
        width: calc(100% - 80px);
        padding: 0px 40px;
        /* position: relative; */
        height: 60px;
    }
`
const Logo = styled.h1`
    color:#fa6980;
    font-size: 1.20rem;
    margin-bottom: 18px;
    letter-spacing: 1px;
    margin-left: 4px;
`
const MenuDesktop = styled.div`
    display: flex;
    gap: 25px;
    font-size: .83rem;
    font-weight: 600;
    margin-bottom: 5px;
    @media (max-width: 576px) {
        display: none;
    }
`

const HamburgerMenu = styled.div`
    width: 25px;
    height: 26px;
    cursor: pointer;
    display: none;
    @media (max-width: 576px) {
        display: block;
    }
`
const menuAnimationIn = keyframes`
   from{
        opacity: 0;
    }
    to{
       opacity: 1;
   }
`

const menuAnimationOut = keyframes`
   from{
       opacity: 1;
    }
    to{
        opacity: 0;
   }
`

const ContainerMenuMobile = styled.div`
        position: absolute;
        top:0px;
        right: 0;
        width: 100%;
        height: 100vh;
        z-index: 2000;
        transition: all .5s;
        opacity: 0;
        overflow:hidden;

     ${({ active }) => active ? css`
        animation: ${menuAnimationIn} .5s forwards;
    ` : css`
        animation: ${menuAnimationOut} .5s forwards;
    `}

    ${({ hidden }) => hidden ? css`
        display: none;
    ` : css`
        display: flex;
    `}
`

const MenuMobile = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;
    position:relative;
    background-color: #fff;
`
const DivCruzMenu = styled.div`
   display: flex;
   width: calc(100% - 70px);
   height:max-content;
   flex-direction: row-reverse;
   padding: 20px 35px;
`

const Line = styled.span`
    display: block;
    width: 100%;
    height: 3px;
    background-color: #5a5a5a;
    margin-top: 4px;
    border-radius: 3px;
    transform-origin: 0px 100%;
    transition: all 300ms;
    
    ${({ line, active }) => line == 1 && active && css`
        transform: rotate(45deg) translate(-2px, 0);
    `}
    ${({ line, active }) => line == 2 && active && css`
        opacity: 0;
        margin-left: -30px;
    `}
    ${({ line, active }) => line == 3 && active && css`
        transform: rotate(-45deg) translate(-2px, 2px);
    `}
  `


const Footer = styled.footer`
    width: 100%;
    height: 49px;
    position: fixed;
    background-color: #fff;
    bottom: 0;
    z-index: 1000;
    @media (max-width: 576px) {
        display: none;
    }
`

const Enlace = styled.a`
    cursor: pointer;
    ${({ active }) => active == true ? css`
        color: #333940;
    `: css`
        color: #dbdada;
    `}
`
const EnlaceMenuMobile = styled.a`
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 600;
    color: #444;
`

export default function Layout({ children }) {

    const [menuDesktop, setMenuDesktop] = useState({
        home: true,
        tendencias: false,
        blog: false
    })
    const [menuMobile, setMenuMobile] = useState({
        active: false,
    })

    const [hiddenMenu, setHiddenMenu] = useState(true)

    function menuDesktopSeleccionado(seccion, modo) {

        setMenuDesktop({
            home: false,
            tendencias: false,
            blog: false,
            [seccion]: true
        })
        if (modo == "mobile") {
            animateMenu()
        }
    }

    function animateMenu() {
        if (menuMobile.active) {
            setMenuMobile({
                active: false,
            })
            let setTimeOut = setTimeout(() => {
                setHiddenMenu(true)
                clearTimeout(setTimeOut)
            }, 500);
        }
        else {
            setHiddenMenu(false)
            setMenuMobile({
                active: true,
            })
        }
    }

    return (
        <ContenedorGlobal>
            <GlobalStyles />
            <Nav>
                <Logo>VIAJES</Logo>
                <MenuDesktop>
                    <Link activeClass="active" to="Inicio" spy={true} smooth={true} offset={-1000} duration={500} delay={10} onClick={() => { menuDesktopSeleccionado("home") }}><Enlace active={menuDesktop.home}>HOME</Enlace></Link>
                    <Link activeClass="active" to="Tendencias" spy={true} smooth={true} offset={-45} duration={500} delay={10} onClick={() => { menuDesktopSeleccionado("tendencias") }}><Enlace active={menuDesktop.tendencias}>TENDENCIAS</Enlace></Link>
                    <Link activeClass="active" to="Blog" spy={true} smooth={true} offset={0} duration={500} delay={10} onClick={() => { menuDesktopSeleccionado("blog") }}><Enlace active={menuDesktop.blog}>BLOG</Enlace></Link>
                </MenuDesktop>
                <HamburgerMenu onClick={animateMenu}>
                    <Line line={1} active={false} />
                    <Line line={2} active={false} />
                    <Line line={3} active={false} />
                </HamburgerMenu>
                <ContainerMenuMobile active={menuMobile.active} hidden={hiddenMenu}>
                    <Contenedor w="30%" h="100%" bg="#424242c7" />
                    <MenuMobile>
                        <DivCruzMenu>
                            <HamburgerMenu onClick={animateMenu}>
                                <Line line={1} active={true} />
                                <Line line={2} active={true} />
                                <Line line={3} active={true} />
                            </HamburgerMenu>
                        </DivCruzMenu>
                        <Contenedor flex column px="40px" gap="18px">
                            <Link activeClass="active" to="Inicio" spy={true} smooth={false} offset={-1000} duration={0} delay={0} onClick={() => { menuDesktopSeleccionado("home", "mobile") }}><EnlaceMenuMobile>HOME</EnlaceMenuMobile></Link>
                            <Link activeClass="active" to="Tendencias" spy={true} smooth={false} offset={0} duration={0} delay={0} onClick={() => { menuDesktopSeleccionado("tendencias", "mobile") }}><EnlaceMenuMobile>TENDENCIAS</EnlaceMenuMobile></Link>
                            <Link activeClass="active" to="Blog" spy={true} smooth={false} offset={0} duration={0} delay={0} onClick={() => { menuDesktopSeleccionado("blog", "mobile") }}><EnlaceMenuMobile>BLOG</EnlaceMenuMobile></Link>
                        </Contenedor>
                    </MenuMobile>
                </ContainerMenuMobile>
            </Nav>
            {children}
            <Footer></Footer>
        </ContenedorGlobal>
    )
}
