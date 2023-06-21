import React from 'react';
import styled from 'styled-components';

const StyledBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 0 35px 0;
`;

const BlackLine = styled.div`
  flex-grow: 1;
  height: 2px;
  background-color: black;
`;

const OrText = styled.span`
  margin: 0 10px;
`;

export const Separator = () => {
  return (
    <StyledBlock>
      <BlackLine />
      <OrText>or</OrText>
      <BlackLine />
    </StyledBlock>
  );
};
