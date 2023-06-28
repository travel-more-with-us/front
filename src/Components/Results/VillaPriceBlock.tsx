import React from 'react';
import styled from 'styled-components';
import { MyButtonSmall } from '../UI/MyButtonSmall';
import { Link } from 'react-router-dom';

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
color: #4E4B66;
`;

const RoomBlock = styled.div`
  width: calc((100% - 14px) * 0.7);

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const PriceBlock = styled.div`
width: calc((100% - 14px) * 0.3);

@media screen and (max-width: 768px) {
  width: 100%;
}
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

const StyledLink = styled(Link)`
text-decoration: none;
color: ${props => props.theme.txtColor};
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
            <StyledLink to="/villa">
              View Deal
            </StyledLink>
          </MyButtonSmall>
        </div>
      </PriceBlock>
    </StyledVilla>
  );
};
