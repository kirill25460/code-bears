import styled from 'styled-components';
import Bg from "../../images/BG.png"

export const MainContainer = styled.div`
z-index:-999;
height: 400vh;
position: absolute;
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-size: cover;
  
  width: 100%;
`;

export const Wrap = styled.div`
z-index:-998;

background-size: cover;
width: 50%;
height: 50%;
position: absolute;
top: 0;
left: 0;
transition: transform 0.4s ease-out;
`;