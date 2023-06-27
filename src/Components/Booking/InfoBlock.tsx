import React from 'react';
import styled from 'styled-components';
import { DestinationInfo } from './DestinationInfo';
import { AboutGuests } from './AboutGuests';
import { AboutPrice } from './AboutPrice';

const StyledInfoBlock = styled.div`
 margin: 0;
 width: 50%;
`;

export const InfoBlock: React.FC <any> = ({ villa }) => {
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
