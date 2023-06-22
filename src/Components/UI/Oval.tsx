import React from 'react';
import styled from 'styled-components';

const StyledOval = styled.p`
background: ${props => props.theme.txtFormColor};
width: 6px;
height: 6px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
margin: 0 8px 0 0;
`;

export const Oval = () => {
  return (
    <StyledOval>
    </StyledOval>
  );
};
