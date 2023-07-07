/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import styled from 'styled-components';
import apple from '../../../images/apple.svg';
import google from '../../../images/google.svg';
import facebook from '../../../images/facebook.svg';

const StyledBlock = styled.div`
display: flex;
justify-content: space-between;

@media screen and (max-width: 768px) {
  flex-direction: column;
  gap: 10px;
}
`;

const Button = styled.button`
outline: none;
width: 149px;
height: 49px;
border-radius: 8px;
border: 2px solid ${props => props.theme.disabledColor};
display: flex;
width: 149px;
height: 48px;
padding: 10px 16px;
justify-content: center;
align-items: center;
gap: 8px;
cursor: pointer;

@media screen and (max-width: 768px) {
  width: 100%;
}

&:hover {
  border: 2px solid ${props => props.theme.primaryColor};
}
`;

const Icon = styled.img`
width: 24px;
height: 24px;
`;

const Txt = styled.span`
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 150%;
`;

export const ContinueWith = () => {
  return (
    <StyledBlock>
      <Button
        onClick={() => {}}
      >
        <Icon 
          src={apple}
          alt='aplle'
        />
        <Txt>
          Apple
        </Txt>
      </Button>
      <Button
        onClick={() => {}}
      >
        <Icon 
          src={google}
          alt="Google"
        />
        <Txt>
          Google
        </Txt>
      </Button>
      <Button
        onClick={() => {}}
      >
        <Icon 
          src={facebook}
          alt='Facebook'
        />
        <Txt>
          Facebook
        </Txt>
      </Button>
    </StyledBlock>
  );
};
