import React from 'react';
import styled from 'styled-components';
import { MyButtonSmall } from '../UI/MyButtonSmall';
import { Link } from 'react-router-dom';
import { useGetCoefficient } from '../../hooksAndHelpers/useGetCoefficient';

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
`;

interface Props {
  price: number;
  duration: number;
  adults: number;
  stayId: number;
}

export const StayPriceBlock: React.FC <Props> = ({ price, duration, adults, stayId }) => {
  const coefficient = useGetCoefficient();

  return (
    <StyledVilla>
      <RoomBlock>
        <Room>
          Deluxe Double or Twin Room
        </Room>
        <List>
          <li>
          Sleeps 6
          </li>
          <li>
          2 bedroom
          </li>
          <li>
          2 bathroom
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
          <MyButtonSmall onClick={() => {}}>
            <StyledLink to={`/stay/${stayId.toString()}`}>
              View Deal
            </StyledLink>
          </MyButtonSmall>
        </div>
      </PriceBlock>
    </StyledVilla>
  );
};
