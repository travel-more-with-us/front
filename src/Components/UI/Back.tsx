import React from 'react';
import styled from 'styled-components';
import backImg from '../../images/backImg.svg';

const StyledBack = styled.div`
margin: 0 0 32px 0;
`;

const GoBack = styled.button`
border: none;
outline: none;
background: transparent;
display: flex;
align-items: center;
gap: 10px;
cursor: pointer;
`;

const Span = styled.span`
font-weight: 400;
font-size: 16px;
line-height: 150%;
text-align: center;
color: ${props => props.theme.txtColor};
`;

export const Back: React.FC <any> = ({ goBack, name}) => {
  return (
    <StyledBack>
      <GoBack onClick={goBack}>
        <img 
          src={backImg}
          alt='go back'
        />
        <Span>
          {name}
        </Span>
      </GoBack>
    </StyledBack>
  );
};
