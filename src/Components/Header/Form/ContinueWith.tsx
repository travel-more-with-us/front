/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import styled from 'styled-components';
import { MyButtonLarge } from '../../UI/MyButtonLarge';

const StyledBlock = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`;

export const ContinueWith = () => {
  return (
    <StyledBlock>
      <MyButtonLarge
        outlined="true"
        disabled={false}
        onClick={() => {}}
      >
        Continue with Facebook
      </MyButtonLarge>
      <MyButtonLarge
        outlined="true"
        disabled={false}
        onClick={() => {}}
      >
        Continue with Google
      </MyButtonLarge>
      <MyButtonLarge
        outlined="true"
        disabled={false}
        onClick={() => {}}
      >
        Continue with Apple
      </MyButtonLarge>
    </StyledBlock>
  );
};
