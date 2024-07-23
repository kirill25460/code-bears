import React, { useEffect } from 'react';
import {
  ModalBackground,
  ModalContainer,
  ModalImg,
  ModalText,
  CloseIcon,
  ModalDescription,
  ModalConteiner,
} from './modalProduct.styled';
import { useTranslation } from 'react-i18next';

const Modal = ({ showModal, closeModal, data }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (showModal) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal, closeModal]);

  if (!showModal) return null;

  const handleBackgroundClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <ModalConteiner onClick={handleBackgroundClick}>
      <ModalBackground>
        <ModalContainer>
          <CloseIcon onClick={closeModal} />
          <ModalText>{t(data.title)}</ModalText>
          <ModalImg src={data.picture} alt={data.title} />
          <ModalDescription>{t(data.description)}</ModalDescription>
        </ModalContainer>
      </ModalBackground>
    </ModalConteiner>
  );
};

export default Modal;
