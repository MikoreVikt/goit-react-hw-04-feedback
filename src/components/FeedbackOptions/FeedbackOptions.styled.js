import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  box-shadow: 2px 2px 2px black;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 4px black;
    transform: scale(1.3);
  }
`;
