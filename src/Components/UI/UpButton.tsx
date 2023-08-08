import React from 'react';
import styled from 'styled-components';

const StyledButtonContainer = styled.div`
position: fixed;
bottom: 50px;
right: 50px;
`;

const Button = styled.button`
border: none;
outline: none;
border-radius: 50%;
background: ${props => props.theme.primaryColor};
width: 30px;
height: 30px;
cursor: pointer;
`;

export const UpButton = () => {
  function scroll() {
    window.scrollTo(0, 0);
  }
  return (
    <StyledButtonContainer>
      <Button onClick={() => {
        scroll();
      }}>
        &#11165;
      </Button>
    </StyledButtonContainer>
  );
};
