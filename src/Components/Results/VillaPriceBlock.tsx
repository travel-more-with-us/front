import React from 'react';
import styled from 'styled-components';
import { MyButtonSmall } from '../UI/MyButtonSmall';

const StyledVilla = styled.div`
display: flex;
gap: 14px;
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
color: #4E4B66;
`;

const RoomBlock = styled.div`
  width: calc((100% - 14px) * 0.7);
`;

const PriceBlock = styled.div`
width: calc((100% - 14px) * 0.3);
`;

const Price = styled.p`
font-size: 56px;
font-weight: 700;
line-height: 120%;
margin: 0;
`;

const PerNight = styled.p`
font-size: 16px;
line-height: 150%;
margin: 0 0 16px 0;
`;

export const VillaPriceBlock = () => {
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
          € 600 
        </Price>
        <PerNight>
          /Per night, 2 adults
        </PerNight>
        <div>
          <MyButtonSmall onClick={() => {}}>
            View Deal
          </MyButtonSmall>
        </div>
      </PriceBlock>
    </StyledVilla>
  );
};
