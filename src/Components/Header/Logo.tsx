import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { MySelect } from '../UI/MySelect';
import stays from '../../images/city.svg';
import flights from '../../images/flight.svg';
import cars from '../../images/car.svg';
import cruises from '../../images/cruise.svg';
import journey from '../../images/jorney.svg';
import tours from '../../images/tours.svg';

const StyledLogo = styled.div`
display: flex;
gap: 40px;

`;

const LogoBlock = styled(Link)`
display: flex;
gap: 8px;
align-items: center;
justify-content: center;
font-weight: 700;
font-size: 24px;
line-height: 120%;
text-decoration: none;
`;

const Image = styled.img`
width: 40px;
heigh: 40px;
`;

const Text = styled.p`
margin: 0;
font-weight: 700;
font-size: 24px;
line-height: 120%;
color: #14142A;
`;

const SelectBlock = styled.div`
display: flex;
align-items: center;
`;

export const Logo = () => {
  const options = [
    { label: 'Stays', icon: stays },
    { label: 'Flights', icon: flights },
    { label: 'Cars', icon: cars },
    { label: 'Cruises', icon: cruises },
    { label: 'Journey', icon: journey },
    { label: 'Tours', icon: tours },
  ];

  return (
    <StyledLogo>
      <LogoBlock to="/">
        <Image src={logo} />
        <Text>
          Travel More
        </Text>
      </LogoBlock>
      <SelectBlock>
        <MySelect
          options={options}
          defaultField="Discover"
          arrow={true}
        />
      </SelectBlock>
    </StyledLogo>
  );
};
