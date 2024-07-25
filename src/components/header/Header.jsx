import React from "react";
import { configHeader } from "./configHeader";
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
  Li
} from "./styled";
import { Container } from "../common/styled";
import HeaderLogo from "../icons/HeaderLogo";
import BearPng from '../../images/header/BearPng.png'

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderNavLogoWrapper>
          <HeaderLogo />
          <Nav>
            <HeaderNavList>
              {configHeader.map((item) => (
                <Li key={item.id}>
                  <HeaderNavLink href={item.link}>{item.text}</HeaderNavLink>
                </Li>
              ))}
            </HeaderNavList>
          </Nav>
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
