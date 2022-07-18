import styled from 'styled-components';

export const ModalWrapper = styled.div`
  min-height: 700px;
  min-width: 600px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
`;
