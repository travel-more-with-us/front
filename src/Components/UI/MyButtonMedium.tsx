import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.txtColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  width: 184px;
  height: 48px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-family: Nunito;
  font-weight: 600;
  line-height: 150%;

  &:hover {
  background-color: ${props => props.theme.hoverColor};
  }

  &:active {
  background-color: ${props => props.theme.focusedColor};

  }
`;

interface Props {
  children: ReactNode;
  onClick: () => void;
}

export const MyButtonMedium: React.FC <Props> = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
};
