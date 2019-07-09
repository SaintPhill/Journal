import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom";

const StyledNav = styled.nav`
    width: 100%;
    display: flex;
    background-color: lightgray;
    margin-bottom: 20px;
`;

const NavButton = styled.a`
    margin-right: 10px
`;

const Header = () => {
    return (
        <StyledNav>
            <NavButton href={'#'}><NavLink to={'/'}>Список статей</NavLink> </NavButton>
            <NavButton href={'#'}><NavLink to={'/new-article'}>Добавить статью</NavLink></NavButton>
        </StyledNav>
    )
};

export default Header