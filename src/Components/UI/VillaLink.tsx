import React from 'react';
import styled from 'styled-components';

interface LinkInterface {
  margin?: string;
}

const StyledLink = styled.p<LinkInterface>`
font-weight: 400;
font-size: 16px;
line-height: 22px;
text-decoration-line: underline;
color: #2149C1;
cursor: pointer;
font-family: Nunito;
margin: ${props => (props.margin ? props.margin : '0')};
`;

interface Props {
  children: React.ReactNode;
  click: () => void;
  margin?: string;
}

export const VillaLink: React.FC <Props> = ({ children, click, margin }) => {
  return (
    <StyledLink margin={margin} onClick={() => {
      click();
    }}>
      {children}
    </StyledLink>
  );
};
