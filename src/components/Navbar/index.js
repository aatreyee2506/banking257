import React,{useEffect, useState} from 'react'

import {VscListFlat } from "react-icons/vsc";
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll/modules/mixins/animate-scroll';
import {
    Nav,
    Container,
    Logo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './Elements'


function Navbar({toggle}) {
    const [scrollNav,setScorllNav]=useState(false)

    const changeNav=()=>{
        if(window.scrollY>=80){
            setScorllNav(true)
        }
        else{
            setScorllNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',changeNav)
    },[]);

    const toggleHome=()=>{
        scroll.scrollToTop();
    }
    
    
    return (
        <>
        <IconContext.Provider value={{color:'white'}}>
            <Nav scrollNav={scrollNav}>
                <Container>
                    <Logo to='/' onClick={toggleHome}>
                        dolla
                    </Logo>
                    <MobileIcon onClick={toggle}>
                        <VscListFlat color="white"/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup' smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Sign Up</NavLinks>
                        </NavItem>

                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </Container>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
