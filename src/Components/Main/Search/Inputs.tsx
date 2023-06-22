import React from 'react';
import styled from 'styled-components';
import { SearchInput } from './SearchInput';
import { Calendar } from './Calendar';
import { Guests } from './Guests';
import search from '../../../images/search.svg';

const InputsContainer = styled.div`
display: flex;
width: 100%;
gap: 20px;
position: relative;
`;

const Button = styled.button`
width: 80px;
height: 64px;
background: ${props => props.theme.primaryColor};
border-radius: 8px;
border: none;
outline: none;
cursor: pointer;
`;

export const Inputs: React.FC <any> = ({ places }) => {
  return (
    <InputsContainer>
      <SearchInput places={places} />
      <Calendar />
      <Calendar />
      <Guests />
      <Button>
        <img 
          src={search}
          alt="search"
        />
      </Button>
    </InputsContainer>
  );
};
