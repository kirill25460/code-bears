import React from 'react';
import {ModalBackground,ModalContainer,ModalImg,ModalText,CloseIcon,ModalDescription} from "./modalProduct.styled";


const Modal = ({ showModal, closeModal, data }) => {
    if (!showModal) return null;

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseIcon onClick={closeModal}/>
        <ModalText>{data.title}</ModalText>
        <ModalImg src={data.picture}></ModalImg>
        <ModalDescription>{data.description}</ModalDescription>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;