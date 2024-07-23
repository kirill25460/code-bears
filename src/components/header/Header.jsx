import React, { useState } from 'react';
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
} from './styled';
import { Container } from '../common/styled';
import HeaderLogo from '../icons/HeaderLogo';
import BearPng from '../../images/header/BearPng.png';
import LanguageSwitcher from 'components/LanguageSwitch/LanguageSwitch';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const { t } = useTranslation();

  console.log(openMenu);

  const actionOpen = () => {
    setOpenMenu(true);
  };

  const actionClose = () => {
    setOpenMenu(false);
  };

  return (
    <StyledHeader>
      <Container>
        <HeaderNavLogoWrapper>
          <HeaderLogo />
          <Nav>
            <HeaderNavList>
              {configHeader.map(item => (
                <li key={item.id}>
                  <HeaderNavLink href={item.link}>{t(item.text)}</HeaderNavLink>
                </li>
              ))}
            </HeaderNavList>
          </Nav>
          <LanguageSwitcher />
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
                  {' '}
                  <HeaderNavLink href={item.link} onClick={actionClose}>
                    {t(item.text)}
                  </HeaderNavLink>
                </ListItem>
              ))}
            </ListBlock>
            <LogoConteiner  >
              <HeaderLogo />
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
