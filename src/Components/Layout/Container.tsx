import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
padding: 0 30px;
margin: 0 auto;
max-width: 1224px;
`;

interface Props {
  children: React.ReactNode;
}

export const Container: React.FC <Props> = ({ children }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
};
