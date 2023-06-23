import React from 'react';
import styled from 'styled-components';
import { AboutBlock } from './AboutBlock';
import { PriceBlock } from './PriceBlock';

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
