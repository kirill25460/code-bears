import styled from 'styled-components';

export const SwitcherContainer = styled.div`
  display: flex;
  gap: 10px;
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
