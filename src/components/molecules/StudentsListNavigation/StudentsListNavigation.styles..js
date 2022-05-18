import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ViewWrapper } from '../ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';

export const StudentsNavWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 700;
  padding: 0 40px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 30px;

  a {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

export const DialogWrapper = styled.dialog`
  background: transparent;
  border: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkGrey};

  &::backdrop {
    background-color: rgba(115, 124, 142, 0.5);
  }
`;

export const DialogContent = styled(ViewWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin: 0;
  height: 60vh;
`;

export const DialogLink = styled(Link)`
  text-decoration: none;
  background-color: rgba(115, 124, 142, 0.2);
  width: 80%;
  text-align: center;
  border-radius: 8px;
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xl};

  &:hover {
    background-color: rgba(115, 124, 142, 0.3);
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const DialogTitle = styled(Title)`
  font-weight: bold;
`;
