import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageButton, SwitcherContainer } from './styled';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    console.log(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <SwitcherContainer>
      <LanguageButton onClick={() => changeLanguage('en')}>EN</LanguageButton>
      <LanguageButton onClick={() => changeLanguage('ua')}>UA</LanguageButton>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;
