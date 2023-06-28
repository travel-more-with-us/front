import React from 'react';
import styled from 'styled-components';
import { SearchInput } from './SearchInput';
import { Calendar } from './Calendar';
import { Guests } from './Guests';
import search from '../../../images/search.svg';
import { Place } from '../../../types';

const InputsContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
position: relative;
justify-content: space-between;

@media screen and (max-width: 768px) {
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 10px;
}
`;

const Button = styled.button`
max-width: 80px;
width: 10%;
height: 64px;
background: ${props => props.theme.primaryColor};
border-radius: 8px;
border: none;
outline: none;
cursor: pointer;

@media screen and (max-width: 768px) {
  width: 100%;
  max-width: 364px;
}
`;

interface Props {
  places: Place[];
}

export const Inputs: React.FC <Props> = ({ places }) => {
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
