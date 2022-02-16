import styled from 'styled-components';

export const StyledAverage = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ avg, theme }) =>
    avg > 4 ? theme.colors.success : avg > 3 ? theme.colors.warning : avg > 2 ? theme.colors.red : theme.colors.grey};
  color: ${({ theme }) => theme.colors.white};
`;
