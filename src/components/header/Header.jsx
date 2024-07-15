import React from 'react';
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
} from './styled';
import { Container } from '../common/styled';
import HeaderLogo from '../icons/HeaderLogo';
import BearPng from '../../images/header/BearPng.png';
import LanguageSwitcher from 'components/LanguageSwitch/LanguageSwitch';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <StyledHeader>
      <Container>
        <HeaderNavLogoWrapper>
          <HeaderLogo />
          <Nav>
            <HeaderNavList>
              {configHeader.map(item => (
                <li key={item.id}>
                  <HeaderNavLink href={item.link}>
                    {t(item.text)}
                  </HeaderNavLink>
                </li>
              ))}
            </HeaderNavList>
          </Nav>
          <LanguageSwitcher />
        </HeaderNavLogoWrapper>
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
