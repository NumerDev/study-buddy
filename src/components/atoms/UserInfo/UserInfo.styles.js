import styled from 'styled-components';

export const UserInfoo = styled.p`
  font-size: ${({ isLarge, theme }) => (isLarge ? theme.fontSize.l : theme.fontSize.s)};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 400)};
  display: flex;
  align-items: center;
  padding: 0 24px;
`;
