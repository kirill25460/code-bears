import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 45px 20px 50px 20px;
  background-color: #2f2f2fd9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  border-radius: 10px;
  border: 1px solid #717171;
  z-index: 1001;
  margin: auto;
  max-height: fit-content;

  @media (min-width: 768px) {
    width: 680px;
    height: 634px;
  }
  @media (min-width: 1400px) {
    width: 1240px;
    height: 739px;
  }
`;

export const ModalConteiner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  border-radius: 10px;
  height: 100%;
  max-width: 1240px;
  position: relative;
`;

export const ModalText = styled.h2`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  text-align: center;
  line-height: 104%;

  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 35px;
  }
  @media (min-width: 1400px) {
    font-size: 46px;
    line-height: 47.84px;
    letter-spacing: -0.02em;
    text-align: left;
  }
`;

export const ModalImg = styled.img`
  width: 260px;
  height: 201px;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    width: 620px;
    height: 371px;
  }
  @media (min-width: 1400px) {
    width: 1120px;
    height: 371px;
  }
`;

export const ModalDescription = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 100%;
  text-align: center;
  max-width: 260px;
  margin: 0 auto;

  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 18px;
    max-width: 620px;
  }
  @media (min-width: 1400px) {
    font-size: 22px;
    line-height: 22px;
    text-align: left;
    max-width: 1120px;
  }
`;

export const CloseIcon = styled(IoClose)`
  display: none;
  @media (min-width: 1400px) {
    display: inline-block;
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

    cursor: pointer;
  }
`;
