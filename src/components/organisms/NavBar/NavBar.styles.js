import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavBar = styled.nav`
  width: 100%;
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.colors.borderGray};
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 30px 0;
  grid-row: 1 / 3;
  grid-column: 1 / 1;
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  width: 100%;
  height: 60px;
  padding: 13px 15px 13px 54px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const activeClassName = 'activeLink';
export const StyledLink = styled(NavLink).attrs({ activeclassname: activeClassName })`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 20px 15px auto;
  font-size: ${({ theme }) => theme.fontSize.s};
  position: relative;

  &.active {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    position: absolute;
    width: 15px;
    height: 3px;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
