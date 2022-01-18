import styled from 'styled-components';

export const StyledDeleteButton = styled.button`
  width: 22px;
  height: 22px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    height: 100%;
    width: 100%;
  }
`;
