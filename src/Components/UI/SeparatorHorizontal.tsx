import React from 'react';
import styled from 'styled-components';

const StyledSeparator = styled.div`
height: 1px;
width: 100%;
background: ${props => props.theme.disabledColor};
`;

export const SeparatorHorizontal = () => {
  return (
    <StyledSeparator>
    </StyledSeparator>
  );
};
