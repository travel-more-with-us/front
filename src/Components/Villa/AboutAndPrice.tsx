import React from 'react';
import styled from 'styled-components';
import { AboutBlock } from './AboutBlock';
import { PriceBlock } from './PriceBlock';

const StyledAbout = styled.div`
padding: 40px 0 0 0;
`;

const Block = styled.div`
display: flex;
gap: 24px;
`;



interface Props {
  villa: any;
}

export const AboutAndPrice: React.FC <Props> = ({ villa }) => {
  
  return (
    <StyledAbout>
      <Block>
        <AboutBlock 
          villa={villa}
        />
        <PriceBlock />
      </Block>
    </StyledAbout>
  );
};
