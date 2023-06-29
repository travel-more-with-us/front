import React from 'react';
import styled from 'styled-components';
import { Amenities } from './Amenities';
import { Reviews } from './Reviews';
import { Separator } from '../UI/Separator';
import { StayInterface } from '../../types';

const StyledAmenitiesAndRewievs = styled.div`
padding: 56px 0;
border-bottom: 1px solid ${props => props.theme.disabledColor};
`;

const Block = styled.div`
display: flex;
gap: 8px;
margin: 40px;

@media screen and (max-width: 768px) {
  flex-wrap: wrap;
  gap: 24px;
}
`;

interface Props {
  stay: StayInterface;
}

export const AmenitiesAndRewievs: React.FC <Props> = ({ stay }) => {
  return (
    <StyledAmenitiesAndRewievs>
      <Block>
        <Amenities 
          stay={stay}
        />
        <Separator />
        <Reviews 
          stay={stay}
        />
      </Block>
    </StyledAmenitiesAndRewievs>
  );
};
