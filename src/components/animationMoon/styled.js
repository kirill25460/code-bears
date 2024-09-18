import styled, { keyframes } from 'styled-components';

export const ImgMoon = styled.img`
  width: 190px;
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.5));
  @media (min-width: 489px) {
    width: 350px;
  }
  @media (min-width: 768px) {
    width: 550px;
  }
  @media (min-width: 1045px) {
    width: 700px;
  }
`;

export const rotateAnimation = keyframes`
    0% {
       transform: perspective(1200px) rotateY(360deg) rotateX(0deg) rotateZ(0) translateY(-30px) translateX(0px) ;
    }
    100% {
        transform: perspective(1200px) rotateY(0deg) rotateX(0deg) rotateZ(0) translateY(-30px) translateX(0px) ;
    }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  transform-style: preserve-3d;
  margin: 0 0 250px 150px;
  position: relative;
  transform: rotate(360deg);

  z-index: 2;
  position: relative;
  @media (min-width: 489px) {
    min-height: 60vh;
  }
  @media (min-width: 768px) {
    min-height: 50vh;
    margin-left: 0;
  }
  @media (min-width: 1045px) {
    min-height: 70vh;
    margin-left: 85px;
  }
`;

export const Moon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 520px;
  right: 30%;

  @media (min-width: 489px) {
    top: 450px;
    right: 15%;
  }
  @media (min-width: 768px) {
    top: 200px;
    right: 0;
  }

  .moonGlow {
    position: absolute;
    top: -50%;
    left: -50%;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.4) -10%,
      rgba(255, 255, 255, 0) 44%
    );
  }
`;

export const Circle = styled.div`
  transform-style: preserve-3d;
  animation: ${rotateAnimation} 20s linear infinite;
  position: absolute;
  top: 93%;
  left: 18%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 489px) {
    top: 90%;
    left: 33%;
  }
  @media (min-width: 768px) {
    top: 60%;
    left: 50%;
  }
  @media (min-width: 1045px) {
    top: 60%;
    left: 50%;
  }
`;

export const Span = styled.span`
  position: absolute;
  top: 150px;
  left: 0;
  color: rgba(147, 101, 255, 1);
  font-size: 1.5em;
  transform-origin: center;
  transform-style: preserve-3d;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  padding: 2px 1px;
  transform: rotateY(calc(${props => props.index} * calc(360deg / 40)))
    translateZ(130px);
  ${props =>
    props.index === 16 &&
    `
    padding: 2px 15px;
  `}
  ${props =>
    props.index === 33 &&
    `
    padding: 2px 13px;
  `}
  ${props =>
    props.index === 27 &&
    `
    padding: 2px 8px;
  `}
  ${props =>
    props.index === 28 &&
    `
    padding: 2px 8px;
  `}
  ${props =>
    props.index === 8 &&
    `
    padding: 2px 8px;
  `}
  ${props =>
    props.index === 9 &&
    `
    padding: 2px 11px;
  `}
  ${props =>
    props.index === 10 &&
    `
    padding: 2px 11px;
  `}
  ${props =>
    props.index === 34 &&
    `
    padding: 2px 0px;
  `}
  ${props =>
    props.index === 35 &&
    `
    padding: 2px 6px;
  `}
  ${props =>
    props.index === 36 &&
    `
    padding: 2px 6px;
  `}
  ${props =>
    props.index === 13 &&
    `
    padding: 2px 0px;
  `}
  ${props =>
    props.index === 14 &&
    `
    padding: 2px 6px;
  `}
  @media (min-width: 489px) {
    font-size: 3em;
    transform: rotateY(calc(${props => props.index} * calc(360deg / 40)))
      translateZ(220px);
  }

  @media (min-width: 768px) {
    font-size: 4em;
    transform: rotateY(calc(${props => props.index} * calc(360deg / 40)))
      translateZ(320px);
  }

  @media (min-width: 1045px) {
    font-size: 5em;
    transform: rotateY(calc(${props => props.index} * calc(360deg / 40)))
      translateZ(400px);
  }
`;
