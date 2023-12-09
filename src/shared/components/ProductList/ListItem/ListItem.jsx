import {
  BackendDevelopmentConteiner,
  BackendDevelopmentMainText,
  CloseCircle,
  FrontendDevelopmentConteiner,
  FrontendDevelopmentMainText,
  OptimizationConteiner,
  OptimizationMainText,
  Plus,
  TextContainer,
  WebDesignConteiner,
  WebDesignMainText,
  WebDesignText,
} from './ListItem.styled';

const ListItem = () => {
  return (
    <>
      <WebDesignConteiner>
        <WebDesignMainText>
          Web Design
          <CloseCircle />
        </WebDesignMainText>
        <WebDesignText>
          Website design, including layouts, color schemes, logos, and user
          interfaces, your branding and etc.
        </WebDesignText>
      </WebDesignConteiner>
      <FrontendDevelopmentConteiner>
        <FrontendDevelopmentMainText>
          <TextContainer>Frontend development</TextContainer>
          <Plus />
        </FrontendDevelopmentMainText>
      </FrontendDevelopmentConteiner>
      <BackendDevelopmentConteiner>
        <BackendDevelopmentMainText>
          <TextContainer>Backend development</TextContainer>
          <Plus />
        </BackendDevelopmentMainText>
      </BackendDevelopmentConteiner>
      <OptimizationConteiner>
        <OptimizationMainText>
          <TextContainer>Optimization and SEO</TextContainer>
          <Plus />
        </OptimizationMainText>
      </OptimizationConteiner>
    </>
  );
};

export default ListItem;
