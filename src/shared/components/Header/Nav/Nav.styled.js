import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  margin-right: 36px;
  color: white;
  cursor: pointer;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;

  &:last-child {
    margin-right: 0;
  }
`;