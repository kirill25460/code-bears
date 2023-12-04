import LogoImg from 'shared/components/Header/LogoImg/LogoImg';
import { HeaderContainer } from './Header.styled';
import Nav from 'shared/components/Header/Nav/Nav';

const Header = () => {
  return (
    <>
      <a href='/'><LogoImg /></a>
      <HeaderContainer>
        <Nav />
      </HeaderContainer>
    </>
  );
};

export default Header;
