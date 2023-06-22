import React from 'react';
import styled from 'styled-components';
import { VillaInfoBlock } from './VillaInfoBlock';

const StyledVilla = styled.div`
border-radius: 16px;
border: 1px solid #D9DBE9;
background: #FFF;
padding: 24px;
box-sizing: border-box;
display: flex;
gap: 24px;
`;

const Image = styled.img`
max-width: 288px;
width: 100%;
height: 330px;
border-radius: 8px;
`;

const ImageBlock = styled.div`
width: calc((100% - 24px) / 3);
`;

export const Villa: React.FC <any> = ({ villa }) => {
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
      {/* <InfoBlock>
        <NameBlock>
          <Name>
            {villa.name}
          </Name>
          <img 
            src={like}
            alt="like"
          />
        </NameBlock>
        <div>
          <Stars 
            count={villa.rating}
          />
          <VillaLink>
            See all {villa.reviewsList.length} reviews
          </VillaLink>
        </div>
        <div>
          show on map
        </div>
        <div>
          {villa.price}
        </div>
        <div>
          deluxe double ...
        </div>
        <div>
          <div>
            list
          </div>
          <div>
            button
          </div>
        </div>
      </InfoBlock> */}
    </StyledVilla>
  );
};
