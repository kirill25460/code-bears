const { ModalConteiner, Wrapper } = require('./Modal.styled');

const Modal = ({ isOpen, onClose, children }) => {
  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <Wrapper onClick={handleOverlayClick} />
      <ModalConteiner>
        {children}
      </ModalConteiner>
    </>
  );
};

export default Modal;
