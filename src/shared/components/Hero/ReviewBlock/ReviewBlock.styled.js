import styled from 'styled-components';

export const BlockImg = styled.img`
    opacity: 0.3;
`;

export const ImageWithOverlay = styled.div`
  position: relative;
  display: inline-block;
`;

export const OverlayContent = styled.div`
  position: absolute;
  top: 50%;
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

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3498db; /* Цвет кнопки */
  color: #fff; /* Цвет текста кнопки */
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;
