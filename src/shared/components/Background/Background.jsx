import React, { useState } from 'react';
import { MainContainer,Wrap } from './BackGround.styled';
import group from '../../images/stains.png';

const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = e => {
    setMousePosition({ x: e.clientX, y: e.clientY });
 
  };
  return (
    <MainContainer  onMouseMove={handleMouseMove}>
      <Wrap 
        style={{ 
          backgroundImage: `url(${group})`,
          transform: `translate(-${mousePosition.x / 50}px, 
          -${mousePosition.y / 50}px)`,
        }}
      ></Wrap>
    </MainContainer>
  );
};


export default Background;
