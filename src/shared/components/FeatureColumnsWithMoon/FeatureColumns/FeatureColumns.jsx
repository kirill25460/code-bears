import {
  FeatureColumnsConteiner,
  FeatureColumnstText,
  FlexibleSolutionsBlock,
  LegalProcessingBlock,
  MainText,
  PersonalizationBlock,
} from './FeatureColumns.styled';

const FeatureColumns = () => {
  return (
    <FeatureColumnsConteiner>
      <LegalProcessingBlock>
        <MainText>Legal Processing.</MainText>
        <FeatureColumnstText>
          We love creativity, but do not forget about the objective reality, all
          our business deals are designed in such a way that each party gets the
          desired result.
        </FeatureColumnstText>
      </LegalProcessingBlock>
      <FlexibleSolutionsBlock>
        <MainText>Flexible Solutions.</MainText>
        <FeatureColumnstText>
          We accept project requests all the time and are always happy to handle
          your request, we are prepared to work with tight deadlines if your
          situation requires it.
        </FeatureColumnstText>
      </FlexibleSolutionsBlock>
      <PersonalizationBlock>
        <MainText>Personalization.</MainText>
        <FeatureColumnstText>
          Individual approach to each project, target audience and also to the
          project goals. We are in constant communication with you throughout
          the development.
        </FeatureColumnstText>
      </PersonalizationBlock>
    </FeatureColumnsConteiner>
  );
};

export default FeatureColumns;
