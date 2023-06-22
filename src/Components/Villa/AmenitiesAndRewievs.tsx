import React from 'react';
import styled from 'styled-components';
import { Amenities } from './Amenities';
import { Reviews } from './Reviews';
import { Separator } from '../UI/Separator';

interface Props {
  villa: any;
}

const StyledAmenitiesAndRewievs = styled.div`
padding: 56px 0;
border-bottom: 1px solid #D9DBE9;
`;

const Block = styled.div`
display: flex;
gap: 8px;
margin: 40px;
`;

export const AmenitiesAndRewievs: React.FC <Props> = ({ villa }) => {
  return (
    <StyledAmenitiesAndRewievs>
      <Block>
        <Amenities 
          villa={villa}
        />
        <Separator />
        <Reviews 
          villa={villa}
        />
      </Block>
    </StyledAmenitiesAndRewievs>
  );
};
