import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
height: 64px;
width: 100%;
background: #FFFFFF;
border: 1px solid #D9DBE9;
border-radius: 8px;
padding: 20px 24px;
box-sizing: border-box;
outline: none;
font-family: Nunito;

@media screen and (max-width: 425px) {
  height: 42px;
}

&:placeholder {
  color: ${props => props.theme.placeholderColor};
}

&:focus-visible {
  border: 2px solid ${props => props.theme.focusVisibleColor};
}
`;

interface Props {
  value: string;
  onChange: (e: string) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
}

export const MyInput: React.FC <Props> = ({ onChange, onBlur, ...props }) => {
  return (
    <StyledInput
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
      }}
      onBlur={(e) => {
        onBlur(e);
      }}
      {...props}
    />
  );
};
