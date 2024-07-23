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
  @media (min-width: 1240px) {
    margin-bottom: 250px;
  }
`;

export const TitleWrapperProdList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1240px) {
  }
`;

export const StyledProductList = styled.h2`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 66px;
  @media (min-width: 768px) {
    font-size: 28px;
    font-weight: 700;
    line-height: 66px;
    text-align: left;
  }
  @media (min-width: 1024px) {
    margin-right: 695px;
  }
  @media (min-width: 1240px) {
    margin-right: 910px;
    font-size: 56px;
  }
`;

export const StyledP = styled.p`
  color: rgba(151, 149, 181, 1);
`;

export const StyledList = styled.ul`
  margin-top: 50px;
`;

export const StyledItem = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 100px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    margin-right: 25px;
    align-items: normal;
  }
  @media (min-width: 1024px) {
    margin-right: 108px;
  }
  @media (min-width: 1240px) {
    margin-right: 189px;
  }
`;

export const ListBlock03 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    margin-right: 25px;
    align-items: normal;
  }
  @media (min-width: 1024px) {
    margin-right: 15px;
  }
  @media (min-width: 1240px) {
    margin-right: 62px;
  }
`;

export const ListSecondBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    align-items: normal;
  }
`;

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
  display: none;
  @media (min-width: 768px) {
    display: block;
    position: relative;
  }
`;
export const ImageBlockMob = styled.div`
  position: relative;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    display: none;
    margin-bottom: 0;
  }
`;
export const ImageSecondBlock = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    position: relative;
    margin-right: 25px;
  }
  @media (min-width: 1240px) {
    margin-right: 62px;
  }
`;

export const FlexList = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;
export const FirstListSection = styled.ul`
  margin-top: 30px;

  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    width: 150px;
  }
  @media (min-width: 1024px) {
    width: 200px;
  }
  @media (min-width: 1240px) {
    height: 400px;
    margin-right: 30px;
    width: 261px;
  }
`;

export const SecondListSection = styled.ul`
  margin-top: 20px;

  @media (min-width: 768px) {
    text-align: left;
    width: 170px;
  }
  text-align: center;
  @media (min-width: 1024px) {
    width: 200px;
  }
  @media (min-width: 1240px) {
    height: 400px;
    margin-top: 30px;
    width: 261px;
  }
`;

export const FirstListSection03 = styled.ul`
  margin-top: 30px;

  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    width: 150px;
  }
  @media (min-width: 1240px) {
    height: 400px;
    margin-right: 30px;
    width: 261px;
  }
`;

export const SecondListSection03 = styled.ul`
  margin-top: 20px;

  @media (min-width: 768px) {
    text-align: left;
    width: 170px;
  }
  text-align: center;
  @media (min-width: 1240px) {
    height: 400px;
    margin-top: 30px;
    width: 261px;
  }
`;

export const StyledBr = styled.br`
  display: none;
  @media (min-width: 768px) {
    display: inline-block;
  }
`;

export const ItemList = styled.li`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14.56px;
  line-height: 104%;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-shadow: 0px 4px 16px rgba(0, 0, 0, 0.68);
  cursor: pointer;
  &:not(:first-child) {
    margin-top: 20px;
  }
  @media (min-width: 1240px) {
    font-size: 22px;
  }
`;

export const NumberBlock = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-size: 267px;
  line-height: 230.96px;
  letter-spacing: -0.02em;
  color: #ffffff;
  mix-blend-mode: soft-light;
  opacity: 0.47;
  @media (min-width: 1024px) {
    font-weight: 700;
    font-size: 375px;
    line-height: 338.96px;
  }
  @media (min-width: 1240px) {
    font-weight: 700;
    font-size: 515px;
    line-height: 92.5%;
  }
`;

export const Image = styled.img`
  width: 269px;
  height: 269px;
  position: absolute;
  top: 0;

  @media (min-width: 1024px) {
    width: 330px;
    height: 330px;
    left: 50px;
  }
  @media (min-width: 1240px) {
    width: 430px;
    height: 430px;
    left: 50px;
  }
`;
