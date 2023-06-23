import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
background: #fff;
border-radius: 8px;
border: none;
outline: none;
cursor: pointer;
padding: 12px 16px;
border: 2px solid #29E3AB;
font-family: Nunito;

&:hover {
  border: 2px solid #0E966D;
  background: #B4FDD3;
}
`;

interface Props {
  children: React.ReactNode;
}

export const ButtonOutlined: React.FC <Props> = ({ children, ...props }) => {
  return (
    <Button {...props}>
      {children}
    </Button>
  );
};
