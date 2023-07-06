import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
background: #fff;
border-radius: 8px;
border: none;
outline: none;
cursor: pointer;
padding: 12px 16px;
border: 2px solid ${props => props.theme.primaryColor};
font-family: Nunito;

&:hover {
  border: 2px solid ${props => props.theme.focusedColor};
  background: ${props => props.theme.hoverColor};
}
`;

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

export const ButtonOutlined: React.FC <Props> = ({ children, ...props }) => {
  return (
    <Button {...props}>
      {children}
    </Button>
  );
};
