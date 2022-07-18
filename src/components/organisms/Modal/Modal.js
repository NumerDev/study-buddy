import { Button } from 'components/atoms/Button/Button';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalWrapper } from './Modal.styles';

const modalContainter = document.querySelector('#modal-containter');

const Modal = ({ handleClose, children }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainter.appendChild(modalNode);

    return () => {
      modalContainter.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <ModalWrapper>
      {children}
      <Button onClick={() => handleClose()}>Close Modal</Button>
    </ModalWrapper>,
    modalContainter
  );
};
export default Modal;
