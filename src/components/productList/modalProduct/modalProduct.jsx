import React, { useEffect } from 'react';
import {
  ModalBackground,
  ModalContainer,
  ModalImg,
  ModalText,
  CloseIcon,
  ModalDescription,
} from './modalProduct.styled';
import { useTranslation } from 'react-i18next';

const Modal = ({ showModal, closeModal, data }) => {
  const { t } = useTranslation();
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
        <ModalText>{t(data.title)}</ModalText>
        <ModalImg src={data.picture}></ModalImg>
        <ModalDescription>{t(data.description)}</ModalDescription>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
