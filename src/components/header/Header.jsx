import React, { useEffect, useState } from 'react';
import { configHeader } from './configHeader';
import {
  StyledHeader,
  Nav,
  HeaderNavList,
  HeaderNavLogoWrapper,
  HeaderNavLink,
  TabletStyleWrapper,
  TabletStyleTitle,
  GreenWord,
  PurpleWord,
  HeroSubTitleTablet,
  BoldWord,
  ButtonArrow,
  ImgBear,
  MenuConteiner,
  Menu,
  MenuBlock,
  Close,
  ListBlock,
  ListItem,
  LogoConteiner,
  Li,
  ButtonLanguages,
  LanguagesBlock,
} from './styled';
import { Container } from '../common/styled';
import HeaderLogo from '../icons/HeaderLogo';
import BearPng from '../../images/header/BearPng.png';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from 'components/LanguageSwitch/LanguageSwitch';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const { t } = useTranslation();

  const actionOpen = () => {
    setOpenMenu(true);
  };

  const actionClose = () => {
    setOpenMenu(false);
  };

  const actionLanguage = () => {
    if (openLanguage) {
      return setOpenLanguage(false);
    }

    return setOpenLanguage(true);
  };

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openMenu]);

  return (
    <StyledHeader>
      <Container>
        <HeaderNavLogoWrapper>
          <HeaderLogo />
          <Nav>
            <HeaderNavList>
              {configHeader.map(item => (
                <Li key={item.id}>
                  <HeaderNavLink href={item.link}>{t(item.text)}</HeaderNavLink>
                </Li>
              ))}
            </HeaderNavList>
          </Nav>
          <LanguagesBlock>
            <ButtonLanguages onClick={actionLanguage} />
            {openLanguage ? <LanguageSwitcher /> : <></>}
          </LanguagesBlock>
        </HeaderNavLogoWrapper>
        <MenuConteiner>
          <Menu onClick={actionOpen} />
        </MenuConteiner>
        {openMenu ? (
          <MenuBlock>
            <Close onClick={actionClose} />
            <ListBlock>
              {configHeader.map(item => (
                <ListItem key={item.id}>
                  <HeaderNavLink href={item.link} onClick={actionClose}>
                    {t(item.text)}
                  </HeaderNavLink>
                </ListItem>
              ))}
            </ListBlock>
            <LanguagesBlock>
              <LanguageSwitcher />
            </LanguagesBlock>
            <LogoConteiner>
              <ImgBear src={BearPng} />
            </LogoConteiner>
          </MenuBlock>
        ) : (
          <></>
        )}
        <TabletStyleWrapper>
          <ImgBear src={BearPng} />
          <TabletStyleTitle>
            <GreenWord>CODE</GreenWord>
            <br />
            <PurpleWord>BEAR</PurpleWord>
          </TabletStyleTitle>
          <HeroSubTitleTablet>
            Doing <BoldWord>extra</BoldWord> since day one.
          </HeroSubTitleTablet>
          <ButtonArrow />
        </TabletStyleWrapper>
      </Container>
    </StyledHeader>
  );
};

export default Header;
