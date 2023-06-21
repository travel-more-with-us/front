/* eslint-disable no-console */
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<Props>`
  background-color: ${props => (props.outlined ? '#fff' : props.theme.primaryColor)};
  color: ${props => props.theme.txtColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  width: 100%;
  height: 56px;
  border-radius: 8px;
  border: ${props => (props.outlined ? `4px solid ${props.theme.focusedColor}` : 'none')};
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 425px) {
    height: 42px;
  }

  &:hover {
  background-color: ${props => props.theme.hoverColor};
  }

  &:active {
  background-color: ${props => props.theme.focusedColor};
  }

  &:disabled {
  background: #D9DBE9;
  color: #A0A3BD;
  }
`;

interface Props {
  children: ReactNode;
  onClick: () => void;
  outlined?: string;
  disabled: boolean;
}

export const MyButtonLarge: React.FC <Props> = ({
  children, onClick, outlined, disabled,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      outlined={outlined ? outlined.toString() : ''}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};
