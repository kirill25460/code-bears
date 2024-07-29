import styled from 'styled-components';

export const SwitcherContainer = styled.div`
  position: absolute;

  right: -45px;
  top: 50px;

  display: flex;
  gap: 10px;
  align-items: center;

  @media (min-width: 1045px) {
    flex-direction: column;

    right: -10px;
    top: 30px;
  }
`;

export const LanguageButton = styled.button`
  background-color: #000000;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: white;
    color: black;
  }

  &:focus {
    outline: none;
  }
`;

export const ImgItem = styled.img`
  width: 20px;
  height: 20px;
`;
