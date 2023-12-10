import styled from 'styled-components';
import Bg from "../../images/BG.png"

export const MainContainer = styled.div`
z-index: 0;
  background-image: url(${Bg});
  background-size: contain;
  background-repeat: no-repeat;
  background-size: auto;
  background-attachment: fixed;
  background-position: center top;
  min-height: 100vh;
  width: 100%;
`;

export const Wrap = styled.div`
display: inline-block;
background-size: cover;
width: 50%;
height: 50%;
position: absolute;
top: 0;
left: 0;
transition: transform 0.4s ease-out;
`;