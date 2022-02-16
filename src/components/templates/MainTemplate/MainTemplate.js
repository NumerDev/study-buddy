import NavBar from 'components/organisms/NavBar/NavBar';
import React from 'react';
import { Wrapper } from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
