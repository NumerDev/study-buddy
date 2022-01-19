import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavBar = styled.nav`
  width: 100%;
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.colors.borderGray};
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 30px 0;
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

export const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 20px 15px auto;
  font-size: ${({ theme }) => theme.fontSize.s};
`;
