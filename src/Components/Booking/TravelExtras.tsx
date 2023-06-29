import React from 'react';
import styled from 'styled-components';
import { Separator } from '../UI/Separator';
import offers from '../../images/offers.png';

const StyledExtras = styled.div`
padding: 56px 0;
display: flex;
justify-content: space-between;
gap: 24px;
`;

const ExtrasBlock = styled.div`
margin: 0 0 24px 0;
`;

const ExtrasHeader = styled.h2`
color: ${props => props.theme.txtColor};
font-size: 32px;
font-weight: 700;
line-height: 120%;
margin: 0;
`;

const Description = styled.p`
color: ${props => props.theme.txtFormColor};
font-size: 16px;
line-height: 150%;
margin: 0;
`;

const OptionBlock = styled.div`
display: flex;
justify-content: space-between;
`;

const InfoBlock = styled.div`
width: calc((100% - 50px) / 2);
`;

const Offers = styled.div`
width: calc((100% - 50px) / 2);
`;

const OptionHeader = styled.p`
font-size: 20px;
font-weight: 700;
line-height: 150%;
margin: 0;
`;

const OptionDescription = styled.p`
color: ${props => props.theme.txtFormColor};
font-size: 16px;
line-height: 150%;
margin: 0;
`;

const Options = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
`;

const Button = styled.button`
display: flex;
width: 132px;
height: 48px;
padding: 10px 16px;
justify-content: center;
align-items: center;
border-radius: 8px;
border: 2px solid #D9DBE;
outline: none;
background: transparent;
`;

const Image = styled.img`
width: 100%;
`;

export const TravelExtras = () => {
  const options = [
    {
      header: 'Flight Tickets',
      description: 'Find the Best Flight Deals'
    },
    {
      header: 'Car Rental',
      description: 'Discover Car Rental Options'
    },
    {
      header: 'Airport Transfer',
      description: 'Explore Airport Transfer Services'
    }
  ];

  return (
    <StyledExtras>
      <InfoBlock>
        <ExtrasBlock>
          <ExtrasHeader>
            Travel Extras
          </ExtrasHeader>
          <Description>
            Enhance Your Stay with Flight Tickets, Car Rental, and Airport Transfer
          </Description>
        </ExtrasBlock>
        <Options>
          {options.map(option => (
            <OptionBlock key={option.header}>
              <div>
                <OptionHeader>
                  {option.header}
                </OptionHeader>
                <OptionDescription>
                  {option.description}
                </OptionDescription>
              </div>
              <div>
                <Button>
                  Add
                </Button>
              </div>
            </OptionBlock>
          ))}
        </Options>
      </InfoBlock>
      <Separator />
      <Offers>
        <Image 
          src={offers}
          alt='offers'
        />
      </Offers>
    </StyledExtras>
  );
};
