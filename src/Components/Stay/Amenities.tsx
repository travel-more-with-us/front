/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { AmenityInterface, StayInterface } from '../../types';
import { baseUrl } from '../../api';
import { Loading } from '../Loading/Loading';
import { useFetching } from '../../hooksAndHelpers/useFetching';

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
color: ${props => props.theme.txtColor};
margin: 0;
`;

const Name = styled.span`
word-wrap: break-word;
display: block;
`;

interface Props {
  stay: StayInterface;
}

export const Amenities: React.FC <Props> = ({ stay }) => {
  const [amenities, amenititesLoading, amenitiesError] = useFetching(baseUrl + 'amenities');

  const filteredAmenities = React.useMemo(() => {
    if (!amenititesLoading && !amenitiesError) {
      return amenities.filter((amenity: any) => {
        if (stay.amenities.some((el: any) => el === amenity.id)) {
          return amenity;
        }
  
        return null;
      });
    }
  }, [amenities, stay.amenities]);

  return (
    <AmenitiesContainer>
      <AmenitiesBlock>
        <H3>
          Top amenities
        </H3>
      </AmenitiesBlock>
      {amenititesLoading ? (
        <Loading />
      ) : (
        <List>
          {filteredAmenities.map((amenity: AmenityInterface) => (
            <ListItem key={amenity.name}>
              <img 
                src={baseUrl + amenity.img}
                alt={amenity.name}
              />
              <Name>
                {amenity.name}
              </Name>
            </ListItem>
          ))}
        </List>
      )}
    </AmenitiesContainer>
  );
};
