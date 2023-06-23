import React from 'react';
import styled from 'styled-components';

interface LinkProps {
  color: string;
}

const Link = styled.a<LinkProps>`
  color: ${props => props.color};
  margin-left: 6px;
  font-family: Nunito;
`;

interface Props {
  children: React.ReactNode;
  color: string;
  href: string;
}

export const FormLink: React.FC <Props> = ({ children, color, href }) => {
  return (
    <Link
      href={href}
      color={color}
    >
      {children}
    </Link>
  );
};
