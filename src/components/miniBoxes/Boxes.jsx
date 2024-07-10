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
import { useTranslation } from 'react-i18next';

const Boxes = () => {
  const { t } = useTranslation();

  return (
    <ConteinerUl>
      <StyledUl>
        {configMiniBoxes.map((item, index) => (
          <MiniBoxesCard key={index}>
            <TopLine />
            <SubTitle>{t(item.title)}</SubTitle>
            <BoxesText>{t(item.text)}</BoxesText>
          </MiniBoxesCard>
        ))}
      </StyledUl>
    </ConteinerUl>
  );
};

export default Boxes;
