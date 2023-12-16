import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000000;
  overflow: hidden;
  z-index: 999;
  opacity: 0.5; 
`;

export const ModalConteiner = styled.div`
  position: fixed;
  width: 201px;
  height: 247px;
  top: 40%;
  left: 45%;
  z-index: 999;

  background: linear-gradient(180deg, #171717 0%, #0b0b0b 100%);
  box-shadow: 0px 5px 14px rgba(0, 0, 0, 0.75),
    inset 0px 3px 1px rgba(0, 0, 0, 0.26);
  border-radius: 8px;
  background: #000000;
`;
