import styled, { keyframes } from 'styled-components';
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const MoonPictureContainer = styled.div`
  position: relative;
  z-index: -1;
`;

export const MoonImage = styled.img`
  width: 954px;
  height: 954px;
`;

export const BigLogoImage = styled.img`
  position: absolute;
  top: 26%;
  left: 25%;
  width: 350px;
  height: 390px;
`;

export const TextMoonImage = styled.img`
  position: absolute;
  top: 30%;
  left: -7%;
  width: 1180px;
  height: 320px;
  animation: ${rotate} 15s linear infinite;
`;