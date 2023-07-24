import React from 'react';
import styled from 'styled-components';
import { Evaluation } from './Evaluation';
import { Place as PlaceType } from '../../types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateDeparture } from '../../store/actions';
import { baseUrl } from '../../api';

const Place = styled.div`
  width: 288px;
`;

const Image = styled.img<any>`
width: 100%;
object-fit: cover;
height: 300px;
border-radius: 8px;
margin: 0 0 6px 0;
opacity: ${props => (props.loaded ? 1 : 0)};
transition: opacity 0.5s ease-in-out;
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
  const [loaded, setLoaded] = React.useState(false);

  function selectTheLocation(place: any) {
    const departure = {
      country: place.country,
      city: place.city,
    };

    dispatch(updateDeparture(departure));
  }

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <Place>
      <Link 
        to="/results" 
        onClick={(e) => {
          selectTheLocation(place);
        }}
      >
        <Image 
          src={`${baseUrl}${place.img}`}
          onLoad={handleImageLoad}
          loaded={loaded} 
        />
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
