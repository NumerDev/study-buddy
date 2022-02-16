import styled from 'styled-components';

export const ViewWrapper = styled.div`
  width: 100%;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  padding: 40px 50px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 25px;
  max-width: 500px;
  border-radius: 25px;
`;
