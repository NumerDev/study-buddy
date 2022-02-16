import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 130px 1fr;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
  margin: 0;
  padding: 0;
`;
