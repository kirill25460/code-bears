import styled from 'styled-components';
import { SlArrowDown } from 'react-icons/sl';
import { CiMenuBurger } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';

export const ButtonArrow = styled(SlArrowDown)`
  width: 60px;
  height: 30px;
  color: #ffffff;
`;

export const StyledHeader = styled.header`
  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1045px) {
    display: block;
    background-color: #141415;
    padding: 15px 0;
    font-family: 'DM Sans', sans-serif;
  }
`;

export const TabletStyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 250px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 250px;
  }

  @media (min-width: 1045px) {
    display: none;
  }
`;

export const TabletStyleTitle = styled.h1`
  font-size: 58px;
  text-align: center;
  font-weight: bold;

  @media (max-width: 445px) {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px;
  }
`;

export const GreenWord = styled.span`
  color: #57ff9a;
  text-shadow: 0px 0px 7px rgba(87, 255, 154, 1), 0 0 2em rgba(87, 255, 154, 1),
    0 0 1.2em rgba(87, 255, 154, 1);

  @media (max-width: 445px) {
    text-shadow: none;
  }
`;

export const PurpleWord = styled.span`
  color: #9365ff;
`;

export const HeroSubTitleTablet = styled.p`
  font-family: 'Inter', sans-serif;
  width: 100px;
  text-align: center;
  font-size: 10px;
  margin-top: 37px;
  margin-bottom: 213px;
`;

export const BoldWord = styled.span`
  font-weight: bold;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderNavList = styled.ul`
  list-style: none;
  text-decoration: none;
  display: flex;
  gap: 30px;
`;

export const HeaderNavLogoWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1045px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const MenuConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-top: 15px;

  @media (min-width: 1045px) {
    display: none;
  }
`;

export const HeaderNavLink = styled.a`
  text-decoration: none;
  color: #fff;
`;

export const ImgBear = styled.img`
  width: 36px;
  height: 40px;
  margin-bottom: 37px;
`;

export const Menu = styled(CiMenuBurger)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const Close = styled(IoMdClose)`
  width: 30px;
  height: 30px;
  cursor: pointer;

  padding: 15px;
  position: absolute;
  right: 0;
  top: 0;

  color: #fff;
`;

export const MenuBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  flex-direction: column;
`;

export const ListBlock = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ListItem = styled.li`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const LogoConteiner = styled.div`
  margin-top: 150px;
`;
