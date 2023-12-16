import { useState } from 'react';
import {
  ActionsBlockText,
  ContactButton,
  MainTextActionBlock,
  ActionBlockContainer,
  ProjectButton,
  ContactList,
  ContactItem,
  Mail,
  Instagram,
  Telegram,
} from './ActionsBlock.styled';
import Modal from 'shared/components/Modal/Modal';

const ActionsBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    console.log('Button clicked');
    openModal();
  };

  return (
    <ActionBlockContainer>
      <MainTextActionBlock>
        Not just product <br /> But a selling one
      </MainTextActionBlock>
      <ActionsBlockText>
        We combine everything the best features in one projects: quality, speed,
        customizability and comfort.
      </ActionsBlockText>
      <ContactButton onClick={handleClick}>Contacts</ContactButton>
      <ProjectButton>Start a project</ProjectButton>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactList>
          <ContactItem>
            <Mail />
            codebear@gmail.com
          </ContactItem>
          <ContactItem>
            <Instagram />
            @codebearit
          </ContactItem>
          <ContactItem>
            <Telegram />
            @codebearmanager
          </ContactItem>
        </ContactList>
      </Modal>
    </ActionBlockContainer>
  );
};

export default ActionsBlock;
