import React from 'react';
import styled from 'styled-components';
import bali from '../../images/Bali.png';
import warshaw from '../../images/Warsaw.png';
import bangkok from '../../images/Bangkok.png';
import berlin from '../../images/Berlin.png';
import manchester from '../../images/Manchester.png';
import dubrovnik from '../../images/Dubrovnik.png';
import rio from '../../images/Rio de Janeiro.png';
import antalya from '../../images/Antalya.png';
import { Propositions } from './Propositions';
import { Search } from './Search/Search';

const StyledMain = styled.div`
padding: 0px 0 60px;

@media screen and (max-width: 768px) {
  padding: 100px 0 40px;
}
`;

export const MainBlock = () => {
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
    <StyledMain>
      <Search />
      <Propositions
        places={places}
        header="Looking for the perfect stay?"
        description="Pick a vibe and explore the top destinations"
      />
      <Propositions
        places={places}
        header="Journey to the waves and palm trees"
        description="Pick a vibe and explore the top destinations"
      />
    </StyledMain>
  );
};
