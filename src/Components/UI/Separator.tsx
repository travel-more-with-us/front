import React from 'react';
import styled from 'styled-components';

const StyledSeparator = styled.div`
width: 1px;
background-color: #D9DBE9;

@media screen and (max-width: 768px) {
  display: none;
}
`;

export const Separator = () => {
  return (
    <StyledSeparator>
    </StyledSeparator>
  );
};
