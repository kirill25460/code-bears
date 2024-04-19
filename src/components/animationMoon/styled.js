import styled, { keyframes } from 'styled-components';

export const ImgMoon = styled.img`

width: 190px;
    @media (min-width: 489px) {
        width: 350px;
    }
    @media (min-width: 768px) {
        width: 550px;
    }
    @media (min-width: 1045px) {
        width: 700px;
    }
    
`

export const rotateAnimation = keyframes`
    0% {
        transform: perspective(1000px) rotateY(360deg) rotateX(12deg) ;
    }
    100% {
        transform: perspective(1000px) rotateY(0deg) rotateX(15deg) ;
    }
`;

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 55vh;
    transform-style: preserve-3d;
    margin: 0 auto 400px;
    position: relative;
    @media (min-width: 489px) {
        min-height: 50vh;
    }
    @media (min-width: 768px) {
        min-height: 50vh;
    }
    @media (min-width: 1045px) {
        min-height: 70vh;
    }
`;

export const Moon = styled.div`
    position: absolute;
    top: 700px;
    
    @media (min-width: 489px) {
        top: 450px
    }
    @media (min-width: 768px) {
        top: 200px
    }
`;

export const Circle = styled.div`
    transform-style: preserve-3d;
    animation: ${rotateAnimation} 20s linear infinite;

    position: absolute;
    top: 125%;
    @media (min-width: 489px) {
        top: 100%;
    }
    @media (min-width: 768px) {
        top: 50%;
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
    padding: 2px 1px;
    transform: rotateY(calc(${props => props.index} * calc(360deg / 40))) translateZ(130px);

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