import styled from 'styled-components';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export const Arrow = styled(HiOutlineArrowNarrowRight)`
  height: 24px;
  width: 40px;
  color: #9f9f9f;
`;

export const BlockImg = styled.img`
  position: relative;
  opacity: 0.3;
  z-index: 0;
`;

export const BlockShadowImg = styled.img`
  position: absolute;
  left: 25px;
  top: 25px;
  z-index: -1;
`;

export const ImageWithOverlay = styled.div`
  position: relative;
  display: inline-block;
`;

export const OverlayContent = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff; /* Цвет текста */
`;

export const ImageText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  width: 463px;
  margin-bottom: 10px;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

export const BookService = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-right: 14px;

  color: #5b5b5b;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 58px;
  height: 30px;

  background: #282829;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
`;
