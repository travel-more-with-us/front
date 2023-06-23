import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.p<any>`
font-weight: 400;
font-size: 16px;
line-height: 22px;
text-decoration-line: underline;
color: #2149C1;
cursor: pointer;
font-family: Nunito;
margin: ${props => (props.margin ? props.margin : '0')};
`;

export const VillaLink: React.FC <any> = ({ children, click, margin }) => {
  return (
    <StyledLink margin={margin} onClick={(e: any) => {
      click();
    }}>
      {children}
    </StyledLink>
  );
};
