import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/Theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import AddUser from './AddUser';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from './Dashboard';
import UsersProvider from 'providers/UsersProvider';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Switch>
                <Route path="" element={<Dashboard />}></Route>
                <Route path="add-user" element={<AddUser />}></Route>
              </Switch>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
