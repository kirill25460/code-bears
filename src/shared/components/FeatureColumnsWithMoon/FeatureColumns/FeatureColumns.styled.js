import styled from 'styled-components';

export const FeatureColumnsConteiner = styled.div`
  display: flex;
  justify-content: space-evenly;

  margin-bottom: -80px;
`;

export const LegalProcessingBlock = styled.div`
  width: 261px;
  height: 200px;
  border-top: 1px solid #ffffff;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #YourHighlightColor;
  }

  margin-right: 75px;
`;

export const FlexibleSolutionsBlock = styled.div`
width: 261px;
height: 200px;
border-top: 1px solid #ffffff;
position: relative;

&::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #YourHighlightColor;
}
  margin-right: 75px;
`;

export const PersonalizationBlock = styled.div`
width: 261px;
height: 200px;
border-top: 1px solid #ffffff;
position: relative;

&::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #YourHighlightColor;
}
`;

export const MainText = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 86.5%;
  letter-spacing: -0.02em;

  padding-top: 18px;
  margin-bottom: 15px;

  color: #ffffff;
`;

export const FeatureColumnstText = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 104%;
  /* or 23px */
  letter-spacing: -0.02em;

  color: #ffffff;

  text-shadow: 0px 4px 16px rgba(0, 0, 0, 0.68);
`;
