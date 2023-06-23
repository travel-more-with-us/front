import React from 'react';
import styled from 'styled-components';
import { VillaLink } from '../UI/VillaLink';

const AmenitiesContainer = styled.div`
width: calc((100% - 16px) / 2);

@media screen and (max-width: 768px) {
  width: 100%;
}
`;

const AmenitiesBlock = styled.div`
display: flex;
justify-content: space-between;
margin: 0 0 24px 0;
`;

const List = styled.div`
display: flex;
flex-wrap: wrap;
gap: 24px;
`;

const ListItem = styled.div`
width: calc((100% - 24px)/2);
display: flex;
gap: 16px;
align-items: center;

@media screen and (max-width: 768px) {
  flex-wrap: wrap;
}
`;

const H3 = styled.h3`
font-weight: 700;
font-size: 32px;
line-height: 120%;
color: #14142A;
margin: 0;
`;

const Name = styled.span`
word-wrap: break-word;
display: block;
`;

export const Amenities: React.FC <any> = ({ villa }) => {
  return (
    <AmenitiesContainer>
      <AmenitiesBlock>
        <H3>
          Top amenities
        </H3>
        <VillaLink click={() => {}}>
          Show more
        </VillaLink>
      </AmenitiesBlock>
      <List>
        {villa.amenities.map((amenity: any) => (
          <ListItem key={amenity.name}>
            <img 
              src={amenity.img}
              alt={amenity.name}
            />
            <Name>
              {amenity.name}
            </Name>
          </ListItem>
        ))}
      </List>
    </AmenitiesContainer>
  );
};
