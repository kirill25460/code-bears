import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 45px 20px 50px 60px;
  background-color: #2f2f2fd9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1240px;
  height: 739px;
  border-radius: 10px;
  border: 1px solid #717171;
  z-index: 1000;
  margin: auto;
`;

export const ModalContainer = styled.div`
  border-radius: 10px;
  height: 100%;
  max-width: 1240px;
  position: relative;
`;

export const ModalText = styled.h2`
  font-family: 'DM Sans';
  font-size: 46px;
  font-weight: 500;
  line-height: 47.84px;
  letter-spacing: -0.02em;
  text-align: left;
`;

export const ModalImg = styled.img`
  width: 1120px;
  height: 371px;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const ModalDescription = styled.p`
  font-family: 'DM Sans';
  font-size: 22px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
  max-width: 1120px;
`;

export const CloseIcon = styled(IoClose)`
  color: #aa85ff;

  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  padding: 5px;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background: #555555;
`;
