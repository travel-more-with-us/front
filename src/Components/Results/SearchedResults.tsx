import React from 'react';
import styled from 'styled-components';
import { Container } from '../Layout/Container';
import bali from '../../images/Bali.png';
import warshaw from '../../images/Warsaw.png';
import bangkok from '../../images/Bangkok.png';
import berlin from '../../images/Berlin.png';
import manchester from '../../images/Manchester.png';
import dubrovnik from '../../images/Dubrovnik.png';
import rio from '../../images/Rio de Janeiro.png';
import antalya from '../../images/Antalya.png';
import { Inputs } from '../Main/Search/Inputs';
import { Filters } from './Filters';
import { ResultHeader } from './ResultHeader';
import { VillasList } from './VillasList';

const StyledResults = styled.main`
padding: 32px 0 80px;
background: #fff;
`;

const Block = styled.div`
display: flex;
gap: 24px;

@media screen and (max-width: 768px) {
  flex-direction: column;
}
`;

const InputsContainer = styled.div`
margin: 0 0 24px 0;
`;

export const SearchedResults = () => {
  const places = [
    {
      img: antalya,
      country: 'Turkey',
      city: 'Antalya',
      rewievs: 184,
      rating: 5,
    },
    {
      img: bali,
      country: 'Indonesia',
      city: 'Bali',
      rewievs: 205,
      rating: 5,
    },
    {
      img: bangkok,
      country: 'Thailand',
      city: 'Bangkok',
      rewievs: 345,
      rating: 5,
    },
    {
      img: manchester,
      country: 'United Kingdom',
      city: 'Manchester',
      rewievs: 124,
      rating: 4,
    },
    {
      img: warshaw,
      country: 'Poland',
      city: 'Warsaw',
      rewievs: 65,
      rating: 5,
    },
    {
      img: berlin,
      country: 'Germany',
      city: 'Berlin',
      rewievs: 104,
      rating: 4,
    },
    {
      img: dubrovnik,
      country: 'Croatia',
      city: 'Dubrovnik',
      rewievs: 118,
      rating: 5,
    },
    {
      img: rio,
      country: 'Brazil',
      city: 'Rio de Janeiro',
      rewievs: 143,
      rating: 5,
    },
  ];
  return (
    <StyledResults>
      <Container>
        <ResultHeader />
        <InputsContainer>
          <Inputs 
            places={places}
          />
        </InputsContainer>
        <Block>
          <Filters />
          <VillasList />
        </Block>
      </Container>
    </StyledResults>
  );
};
