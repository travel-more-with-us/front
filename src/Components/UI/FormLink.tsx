import React from 'react';
import styled from 'styled-components';

interface LinkProps {
  color: string;
}

const Link = styled.p<LinkProps>`
  color: ${props => props.color};
  margin: 0 0 0 6px;
  font-family: Nunito;
  cursor: pointer;
`;

interface Props {
  children: React.ReactNode;
  color: string;
  onClick?: () => void;
}

export const FormLink: React.FC <Props> = ({ children, color, onClick }) => {
  return (
    <Link
      color={color}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
