import styled from 'styled-components';
import { AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaTelegramPlane } from 'react-icons/fa';

export const FooterContactConteiner = styled.div``;

export const FooterContactList = styled.ul``;

export const FooterContactItem = styled.li`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;

  color: #ffffff;

  display: flex;
  
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Instagram = styled(AiFillInstagram)`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  color: black;
  background-color: #ffffff;
  padding: 3px;
  margin-right: 11px;
`;

export const Mail = styled(MdEmail)`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  color: black;
  background-color: #ffffff;
  padding: 3px;
  margin-right: 11px;
`;

export const Telegram = styled(FaTelegramPlane)`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  color: black;
  background-color: #ffffff;
  padding: 3px;
  margin-right: 11px;
`;
