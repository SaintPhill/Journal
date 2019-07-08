import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom";

const StyledNav = styled.nav`
    display: flex;
    background-color: lightgray
`;

const NavButton = styled.a`
    margin-right: 10px
`;

const Header = () => {
    return (
        <StyledNav>
            <NavButton href={'#'}><NavLink to={'/'}>Список статей</NavLink> </NavButton>
            <NavButton href={'#'}><NavLink to={'/article'}>Отдельная статья</NavLink></NavButton>
        </StyledNav>
    )
};

export default Header