import React, { useEffect } from 'react';
import {
  ModalBackground,
  ModalContainer,
  ModalImg,
  ModalText,
  CloseIcon,
  ModalDescription,
} from './modalProduct.styled';

const Modal = ({ showModal, closeModal, data }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === 27) {
        // закрытие модального окна по клавише "Escape"
        closeModal();
      }
    };

    if (showModal) {
      document.body.style.overflow = 'hidden'; // блокировка прокрутки при открытии модального окна
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = ''; // разблокировка прокрутки при закрытии модального окна
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = ''; // разблокировка прокрутки при размонтировании компонента
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal, closeModal]);
  if (!showModal) return null;

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseIcon onClick={closeModal} />
        <ModalText>{data.title}</ModalText>
        <ModalImg src={data.picture}></ModalImg>
        <ModalDescription>{data.description}</ModalDescription>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
