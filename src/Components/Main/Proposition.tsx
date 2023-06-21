import React from 'react';
import styled from 'styled-components';
import { Evaluation } from './Evaluation';
import { Place as PlaceType } from '../../types';

const Place = styled.div`
  width: 288px;
`;

const Image = styled.img`
width: 100%;
object-fit: cover;
height: 300px;
border-radius: 8px;
margin: 0 0 6px 0;
`;

const City = styled.h3`
font-weight: 700;
font-size: 24px;
line-height: 120%;
margin: 0 0 2px 0;
`;

const Country = styled.p`
font-weight: 600;
font-size: 18px;
line-height: 150%;
color: ${props => props.theme.txtColorSecondary};
margin: 0 0 4px 0;
`;

interface Props {
  place: PlaceType;
}

export const Proposition: React.FC <Props> = ({ place }) => {
  return (
    <Place>
      <Image src={place.img} />
      <City>
        {place.city}
      </City>
      <Country>
        {place.country}
      </Country>
      <Evaluation
        place={place}
      />
    </Place>
  );
};
