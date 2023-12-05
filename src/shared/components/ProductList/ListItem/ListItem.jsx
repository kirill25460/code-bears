import {
  BackendDevelopmentConteiner,
  BackendDevelopmentMainText,
  FrontendDevelopmentConteiner,
  FrontendDevelopmentMainText,
  OptimizationConteiner,
  OptimizationMainText,
  WebDesignConteiner,
  WebDesignMainText,
  WebDesignText,
} from './ListItem.styled';

const ListItem = () => {
  return (
    <>
      <WebDesignConteiner>
        <WebDesignMainText>Web Design</WebDesignMainText>
        <WebDesignText>
          Website design, including layouts, color schemes, logos, and user
          interfaces, your branding and etc.
        </WebDesignText>
      </WebDesignConteiner>
      <FrontendDevelopmentConteiner>
        <FrontendDevelopmentMainText>
          Frontend development
        </FrontendDevelopmentMainText>
      </FrontendDevelopmentConteiner>
      <BackendDevelopmentConteiner>
        <BackendDevelopmentMainText>
          Backend development
        </BackendDevelopmentMainText>
      </BackendDevelopmentConteiner>
      <OptimizationConteiner>
        <OptimizationMainText>
            Optimization and SEO
        </OptimizationMainText>
      </OptimizationConteiner>
    </>
  );
};

export default ListItem;
