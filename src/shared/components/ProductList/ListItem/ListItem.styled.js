import styled from 'styled-components';
import { FaPlusCircle } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';

export const WebDesignConteiner = styled.div`
  width: 1012px;
  height: 128px;
  border-bottom: 1px solid #ffffff;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #YourHighlightColor;
  }
`;

export const WebDesignMainText = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #ffffff;
`;

export const WebDesignText = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;

  color: #9795b5;
`;

export const FrontendDevelopmentConteiner = styled.div`
  width: 1012px;
  height: 128px;
  border-bottom: 1px solid #ffffff;
  position: relative;


  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #YourHighlightColor;
  }
`;


export const FrontendDevelopmentMainText = styled.div`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%; 

  

  color: #ffffff;
`;

export const BackendDevelopmentConteiner = styled.div`
  width: 1012px;
  height: 128px;
  border-bottom: 1px solid #ffffff;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #YourHighlightColor;
  }
`;

export const BackendDevelopmentMainText = styled.div`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%; 

  color: #ffffff;
`;

export const OptimizationConteiner = styled.div`
  width: 1012px;
  height: 128px;
  border-bottom: 1px solid #ffffff;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #YourHighlightColor;
  }
`;

export const OptimizationMainText = styled.div`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%; 

  color: #ffffff;
`;

export const TextContainer = styled.div``;

export const Plus = styled(FaPlusCircle)`
  height: 24px;
  width: 24px;
`;

export const CloseCircle = styled(IoIosCloseCircle)`
  height: 24px;
  width: 24px;
`;
