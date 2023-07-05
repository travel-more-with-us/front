import React from 'react';
import styled from 'styled-components';
import { Evaluation } from './Evaluation';
import { Place as PlaceType } from '../../types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateDeparture } from '../../store/actions';

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

const City = styled(Link)`
font-weight: 700;
font-size: 24px;
line-height: 120%;
margin: 0 0 2px 0;
color: ${props => props.theme.txtColor};
text-decoration: none;
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
  const dispatch = useDispatch();

  function selectTheLocation(place: PlaceType) {
    const departure = {
      country: place.country,
      city: place.city,
    };

    dispatch(updateDeparture(departure));
  }

  return (
    <Place>
      <Link 
        to="/results" 
        onClick={(e) => {
          selectTheLocation(place);
        }}
      >
        <Image src={place.img} />
      </Link>
      <City 
        to="/results"
        onClick={(e) => {
          selectTheLocation(place);
        }}
      >
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
