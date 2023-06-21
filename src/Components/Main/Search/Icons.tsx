import React from 'react';
import styled from 'styled-components';
import stays from '../../../images/city.svg';
import flights from '../../../images/flight.svg';
import cars from '../../../images/car.svg';
import cruises from '../../../images/cruise.svg';
import journey from '../../../images/jorney.svg';
import tours from '../../../images/tours.svg';

const StyledIcons = styled.div`
display: flex;
width: 100%;
gap: 20px;
`;

const Icon = styled.div`
width: 132px;
height: 48px;
background: #fff;
border: 2px solid #29E3AB;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;

&:hover {
  background: #B4FDD3;
  border: 
}

`;

export const Icons = () => {
  const icons = [
    {
      img: stays,
      name: 'Stays',
    },
    {
      img: flights,
      name: 'Flights',
    },
    {
      img: cars,
      name: 'Cars',
    },
    {
      img: cruises,
      name: 'Cruisers',
    },
    {
      img: journey,
      name: 'Journey',
    },
    {
      img: tours,
      name: 'Tours',
    },
  ];

  return (
    <StyledIcons>
      {icons.map(icon => (
        <Icon key={icon.name}>
          <img
            src={icon.img}
            alt=""
          />
          <p>
            {icon.name}
          </p>
        </Icon>
      ))}
    </StyledIcons>
  );
};
