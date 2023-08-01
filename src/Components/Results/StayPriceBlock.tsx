import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useGetCoefficient } from '../../hooksAndHelpers/useGetCoefficient';
import { useSelector } from 'react-redux';

const StyledVilla = styled.div`
display: flex;
gap: 14px;

@media screen and (max-width: 768px) {
  flex-direction: column;
}
`;

const Room = styled.p`
font-size: 16px;
line-height: 150%;
margin: 0 0 2px 0;
`;

const List = styled.ul`
list-style: disc;
margin: 0;
padding: 0 16px;
color: ${props => props.theme.txtFormColor};
`;

const RoomBlock = styled.div`
  width: calc((100% - 14px) * 0.6);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const PriceBlock = styled.div`
width: calc((100% - 14px) * 0.4);
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;

@media screen and (max-width: 768px) {
  width: 100%;
}
`;

const Price = styled.p`
font-size: 32px;
font-weight: 700;
line-height: 120%;
margin: 0;
`;

const PerNight = styled.p`
font-size: 16px;
line-height: 150%;
margin: 0 0 16px 0;
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: ${props => props.theme.txtColor};
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

const StyledButton = styled.button`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.txtColor};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 132px;
  height: 48px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: Nunito;

  &:hover {
  background-color: ${props => props.theme.hoverColor};
  }

  &:active {
  background-color: ${props => props.theme.focusedColor};

  }
`;

interface Props {
  price: number;
  duration: number;
  adults: number;
  stayId: number;
}

export const StayPriceBlock: React.FC <Props> = ({ price, duration, adults, stayId }) => {
  const coefficient = useGetCoefficient();
  const guests = useSelector((state: any) => state.guests);


  return (
    <StyledVilla>
      <RoomBlock>
        <Room>
          {guests.rooms === 1 ? `room ${guests.rooms}` : `rooms ${guests.rooms}`}
        </Room>
        <List>
          <li>
            Sleeps {guests.adults + guests.children}
          </li>
        </List>
      </RoomBlock>
      <PriceBlock>
        <Price>
          € {price * coefficient} 
        </Price>
        <PerNight>
          {`/Per ${duration === 1 || duration === 0 ? 'night' : `${duration} nights`}, ${adults === 1 ? '1 Adult' : `${adults} Adults`}`}
        </PerNight>
        <div>
          <StyledButton onClick={() => {}}>
            <StyledLink to={`/stay/${stayId.toString()}`}>
              View Deal
            </StyledLink>
          </StyledButton>
        </div>
      </PriceBlock>
    </StyledVilla>
  );
};
