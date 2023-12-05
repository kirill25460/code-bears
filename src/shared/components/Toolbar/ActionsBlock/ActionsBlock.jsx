import {
  ActionsBlockText,
  ContactButton,
  MainTextActionBlock,
  ActionBlockContainer,
  ProjectButton,
} from './ActionsBlock.styled';

const ActionsBlock = () => {
  return (
    <ActionBlockContainer>
      <MainTextActionBlock>
        Not just product <br /> But a selling one
      </MainTextActionBlock>
      <ActionsBlockText>
        We combine everything the best features in one projects: quality, speed,
        customizability and comfort.
      </ActionsBlockText>
      <ContactButton>Contacts</ContactButton>
      <ProjectButton>Start a project</ProjectButton>
    </ActionBlockContainer>
  );
};

export default ActionsBlock;
