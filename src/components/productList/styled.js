import styled from 'styled-components';
import { AiFillPlusCircle } from 'react-icons/ai';
import { RxCrossCircled } from 'react-icons/rx';

export const StyledSection = styled.section`
  padding: 30px 0;
  margin-bottom: 80px;
  margin-top: 70px;
  @media (min-width: 768px) {
    margin-bottom: 100px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 250px;
  }
`;

export const TitleWrapperProdList = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1024px) {
    align-items: normal;
  }
`;

export const StyledH2 = styled.h2`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 66px;
`;

export const StyledP = styled.p`
  color: rgba(151, 149, 181, 1);
`;

export const StyledList = styled.ul`
  margin-top: 50px;
`;

export const StyledItem = styled.li`
  display: flex;

  &:not(:first-child) {
    margin-top: 100px;
  }
`;

export const StyledSubTitle = styled.h6`
  margin-bottom: 17px;
  font-weight: 700;
`;

export const StyledWraper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

export const StyledPlus = styled(AiFillPlusCircle)`
  font-size: 20px;
  color: rgba(41, 41, 41, 1);
`;

export const StyledCross = styled(RxCrossCircled)`
  font-size: 20px;
  color: rgba(87, 255, 154, 1);
`;

export const ListBlock = styled.div`
  margin-right: 62px;
`;

export const ListSecondBlock = styled.div``;

export const MainTextBlock = styled.h3`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 86.5%;
  letter-spacing: -0.02em;

  color: #ffffff;

  border-top: 1px solid #ffff;
  padding-top: 15px;
`;

export const ImageBlock = styled.div`
  position: relative;
`;

export const ImageSecondBlock = styled.div`
  position: relative;
  margin-right: 62px;
`;

export const FlexList = styled.div`
  display: flex;
`;
export const FirstListSection = styled.ul`
  margin-top: 30px;
  width: 261px;
  height: 400px;
  margin-right: 30px;
`;

export const SecondListSection = styled.ul`
  margin-top: 30px;
  width: 261px;
  height: 400px;
`;

export const ItemList = styled.li`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 104%;
  letter-spacing: -0.02em;

  color: #ffffff;

  text-shadow: 0px 4px 16px rgba(0, 0, 0, 0.68);

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const NumberBlock = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 515px;
  line-height: 86.5%;
  letter-spacing: -0.02em;

  color: #ffffff;

  mix-blend-mode: soft-light;
  opacity: 0.47;
`;

export const Image = styled.img`
  width: 430px;
  height: 430px;
  position: absolute;
  top: 0;
  left: 50px;
`;
