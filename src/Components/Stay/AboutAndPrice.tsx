import React from 'react';
import styled from 'styled-components';
import { AboutBlock } from './AboutBlock';
import { PriceBlock } from './PriceBlock';
import { StayInterface } from '../../types';

const StyledAbout = styled.div`
padding: 40px 0 0 0;

@media screen and (max-width: 1290px) {
  padding: 100px 0 0 0;
}
`;

const Block = styled.div`
display: flex;
justify-content: space-between;
gap: 24px;

@media screen and (max-width: 768px) {
  flex-wrap: wrap;
}
`;



interface Props {
  stay: StayInterface;
}

export const AboutAndPrice: React.FC <Props> = ({ stay }) => {
  
  return (
    <StyledAbout>
      <Block>
        <AboutBlock 
          stay={stay}
        />
        <PriceBlock 
          stay={stay}
        />
      </Block>
    </StyledAbout>
  );
};
