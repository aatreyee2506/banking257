import React from 'react'

import {
    Container,
    Icon,
    CloseIcon,
    Wrapper,
    Menu,
    Link,
    BtnWrap,
    SidebarRoute
} from "./Elements";

const Sidebar = ({isOpen,toggle}) => {
    return (
        <Container isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <Wrapper>
                <Menu>
                    
                    <Link to="about" onClick={toggle} >About</Link>
                    <Link to="discover" onClick={toggle}>Discover</Link>
                    <Link to="services" onClick={toggle}>Services</Link>
                    <Link to="signup" onClick={toggle}>Sign Up</Link>
                    

                </Menu>
                <BtnWrap>
                    <SidebarRoute to="/signin">
                        Sign In
                    </SidebarRoute>
                </BtnWrap>
            </Wrapper>
        </Container>
    )
}

export default Sidebar
