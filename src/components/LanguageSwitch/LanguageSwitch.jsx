import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImgItem, LanguageButton, SwitcherContainer } from './styled';
import imgUk from '../../images/header/uk-icon.png';
import imgUa from '../../images/header/ukraine-icon.png';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <SwitcherContainer>
      <LanguageButton onClick={() => changeLanguage('en')}>
        <ImgItem src={imgUk} />
      </LanguageButton>
      <LanguageButton onClick={() => changeLanguage('ua')}>
        <ImgItem src={imgUa} />
      </LanguageButton>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;
