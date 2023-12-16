import styled from 'styled-components';
import { AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaTelegramPlane } from 'react-icons/fa';

export const ActionBlockContainer = styled.div`
  display: block;
  margin-right: 142px;
`

export const MainTextActionBlock = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 66px;

  margin-bottom: 24px;

  color: #ffffff;
`;

export const ActionsBlockText = styled.p`
  width: 455.12px;
  height: 60px;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;

  margin-bottom: 50px;

  color: #9795b5;
`;

export const ContactButton = styled.button`
  width: 120px;
  height: 54px;

  margin-right: 24px;

  background: linear-gradient(99.29deg, #282828 7.44%, #2d2d2d 96.69%);
  border-radius: 30px;

  color: #ffffff;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
`;

export const ProjectButton = styled.button`
  width: 155px;
  height: 54px;

  background: #ffffff;

  border: 1px solid #d4d2e3;
  border-radius: 30px;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */
  text-align: center;

  color: #5d5a88;
`;


export const ContactList = styled.ul``;

export const ContactItem = styled.li`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;

  color: #ffffff;
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