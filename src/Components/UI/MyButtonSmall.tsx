import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.txtColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  width: 132px;
  height: 48px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: Nunito;

  &:hover {
  background-color: ${props => props.theme.hoverColor};
  }

  &:active {
  background-color: ${props => props.theme.focusedColor};

  }
`;

export const MyButtonSmall: React.FC <any> = ({ children }) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
};
