import React from 'react';
import styled from 'styled-components';
import { DestinationInfo } from './DestinationInfo';
import { AboutGuests } from './AboutGuests';
import { AboutPrice } from './AboutPrice';
import { StayInterface } from '../../types';

const StyledInfoBlock = styled.div`
 margin: 0;
 width: 50%;

 @media screen and (max-width: 768px) {
  width: 100%;
}
`;

interface Props {
  stay: StayInterface;
}

export const InfoBlock: React.FC <Props> = ({ stay }) => {
  return (
    <StyledInfoBlock>
      <DestinationInfo 
        stay={stay}
      />
      <AboutGuests />
      <AboutPrice 
        stay={stay}
      />
    </StyledInfoBlock>
  );
};
