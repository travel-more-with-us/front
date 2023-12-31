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
flex-wrap: wrap;
width: 100%;
gap: 20px;

@media screen and (max-width: 768px) {
  justify-content: center;
}
`;

const Icon = styled.div<IconProps>`
width: 132px;
height: 48px;
background: #fff;
border: ${props => props.active ? '2px solid #0E966D' : `2px solid ${props.theme.disabledColor}`};
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
gap: 8px;

@media screen and (max-width: 425px) {
  width: 100%;
}

&:hover {
  background: ${props => props.theme.hoverColor};
  border: 2px solid #0E966D;
}
`;

const IconName = styled.p`
margin: 0;
`;

interface IconProps {
  active: boolean;
}

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
  const [activeIcon, setActiveIcon] = React.useState(icons[0].name);

  return (
    <StyledIcons>
      {icons.map(icon => (
        <Icon 
          key={icon.name} 
          active={activeIcon === icon.name}
          onClick={() => {
            setActiveIcon(icon.name);
          }}
        >
          <img
            src={icon.img}
            alt=""
          />
          <IconName>
            {icon.name}
          </IconName>
        </Icon>
      ))}
    </StyledIcons>
  );
};
