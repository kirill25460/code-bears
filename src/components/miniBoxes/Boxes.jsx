import React from 'react';
import {
  MiniBoxesCard,
  TopLine,
  SubTitle,
  BoxesText,
  StyledUl,
  ConteinerUl,
} from './styled';
import { configMiniBoxes } from './configMiniBoxes';

const Boxes = () => {
  return (
    <ConteinerUl>
      <StyledUl>
        {configMiniBoxes.map((item, index) => (
          <MiniBoxesCard key={index}>
            <TopLine />
            <SubTitle>{item.title}</SubTitle>
            <BoxesText>{item.text}</BoxesText>
          </MiniBoxesCard>
        ))}
      </StyledUl>
    </ConteinerUl>
  );
};

export default Boxes;
