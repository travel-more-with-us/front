import React from 'react';
import styled from 'styled-components';
import { VillaInfoBlock } from './VillaInfoBlock';
import { VillaInterface } from '../../types';

const StyledVilla = styled.div`
border-radius: 16px;
border: 1px solid #D9DBE9;
background: #FFF;
padding: 24px;
box-sizing: border-box;
display: flex;
gap: 24px;

@media screen and (max-width: 768px) {
  flex-direction: column;
}
`;

const Image = styled.img`
max-width: 288px;
width: 100%;
height: 330px;
border-radius: 8px;

@media screen and (max-width: 768px) {
  max-width: unset;
}
`;

const ImageBlock = styled.div`
width: calc((100% - 24px) / 3);

@media screen and (max-width: 768px) {
  width: 100%;
  max-width: unset;
}
`;

interface Props {
  villa: VillaInterface;
}

export const Villa: React.FC <Props> = ({ villa }) => {
  return (
    <StyledVilla>
      <ImageBlock>
        <Image 
          src={villa.images[0]}
          alt="villa"
        />
      </ImageBlock>
      <VillaInfoBlock 
        villa={villa}
      />
    </StyledVilla>
  );
};
