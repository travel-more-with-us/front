import React from 'react';
import styled from 'styled-components';
import { DestinationInfo } from './DestinationInfo';
import { AboutGuests } from './AboutGuests';
import { AboutPrice } from './AboutPrice';
import { VillaInterface } from '../../types';

const StyledInfoBlock = styled.div`
 margin: 0;
 width: 50%;
`;

interface Props {
  villa: VillaInterface;
}

export const InfoBlock: React.FC <Props> = ({ villa }) => {
  return (
    <StyledInfoBlock>
      <DestinationInfo 
        villa={villa}
      />
      <AboutGuests />
      <AboutPrice />
    </StyledInfoBlock>
  );
};
