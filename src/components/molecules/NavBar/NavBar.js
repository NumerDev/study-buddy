import React from 'react';
import { StyledNavBar, Logo, StyledLink } from './NavBar.styles';

const NavBar = () => {
  return (
    <>
      <StyledNavBar>
        <Logo>Study Buddy</Logo>

        <StyledLink to="/">Dashboard</StyledLink>
        <StyledLink to="add-user">Settings</StyledLink>
        <StyledLink to="/">Logout</StyledLink>
      </StyledNavBar>
    </>
  );
};

export default NavBar;
