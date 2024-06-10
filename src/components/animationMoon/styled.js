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
  margin: 0 auto 250px;
  position: relative;
  transform: rotate(345deg); 
  @media (min-width: 489px) {
    min-height: 60vh;
  }
  @media (min-width: 768px) {
    min-height: 50vh;
  }
  @media (min-width: 1045px) {
    min-height: 70vh;
    
  }
`;

export const Moon = styled.div`
  position: relative;
  top: 520px;

  @media (min-width: 489px) {
    top: 450px;
  }
  @media (min-width: 768px) {
    top: 200px;
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
  top: 112%;
  transform: rotate(45deg); 
  @media (min-width: 489px) {
    top: 110%;
  }
  @media (min-width: 768px) {
    top: 60%;
  }
  @media (min-width: 1045px) {
    top: 60%;
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
  transform: rotateY(calc(${props => props.index} * calc(360deg / 40))) translateZ(130px) ;
  ${props => props.index === 16 && `
    padding: 2px 15px;
  `}
  ${props => props.index === 33 && `
    padding: 2px 13px;
  `}
  ${props => props.index === 27 && `
    padding: 2px 8px;
  `}
  ${props => props.index === 28 && `
    padding: 2px 8px;
  `}
  ${props => props.index === 8 && `
    padding: 2px 8px;
  `}
  ${props => props.index === 9 && `
    padding: 2px 11px;
  `}
  ${props => props.index === 10 && `
    padding: 2px 11px;
  `}
  ${props => props.index === 34 && `
    padding: 2px 0px;
  `}
  ${props => props.index === 35 && `
    padding: 2px 6px;
  `}
  ${props => props.index === 36 && `
    padding: 2px 6px;
  `}
  ${props => props.index === 13 && `
    padding: 2px 0px;
  `}
  ${props => props.index === 14 && `
    padding: 2px 6px;
  `}
  @media (min-width: 489px) {
    font-size: 3em;
    transform: rotateY(calc(${props => props.index} * calc(360deg / 40))) translateZ(220px);
  }

  @media (min-width: 768px) {
    font-size: 4em;
    transform: rotateY(calc(${props => props.index} * calc(360deg / 40))) translateZ(320px);
  }

  @media (min-width: 1045px) {
    font-size: 5em;
    transform: rotateY(calc(${props => props.index} * calc(360deg / 40))) translateZ(400px);
  }
`;
