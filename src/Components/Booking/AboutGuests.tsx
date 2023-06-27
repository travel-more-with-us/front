import React from 'react';
import styled from 'styled-components';
import { VillaLink } from '../UI/VillaLink';

const StyledAboutGuests = styled.div`
border-top: 1px solid #D9DBE9;
border-bottom: 1px solid #D9DBE9;
padding: 16px 0;
display: flex;
flex-direction: column;
gap: 16px;
`;

const Block = styled.div`
display: flex;
justify-content: space-between;
`;

const Title = styled.p`
color: #14142A;
font-size: 18px;
font-family: Nunito;
font-weight: 600;
line-height: 150%;
margin: 0;
`;

const TitleBlock = styled.div`
display: flex;
flex-direction: column;
gap: 2px;
`;

const TxtValue = styled.p`
color: #4E4B66;
font-size: 16px;
line-height: 150%;
margin: 0;
`;

export const AboutGuests = () => {
  return (
    <StyledAboutGuests>
      <Block>
        <TitleBlock>
          <Title>
            Dates
          </Title>
          <TxtValue>
            June 20 - 21
          </TxtValue>
        </TitleBlock>
        <VillaLink click={() => {}}>
          Edit
        </VillaLink>
      </Block>

      <Block>
        <TitleBlock>
          <Title>
            Check in time
          </Title>
          <TxtValue>
            3:00 - 5:00
          </TxtValue>
        </TitleBlock>
        <VillaLink click={() => {}}>
          Edit
        </VillaLink>
      </Block>

      <Block>
        <TitleBlock>
          <Title>
            Guests
          </Title>
          <TxtValue>
            2
          </TxtValue>
        </TitleBlock>
        <VillaLink click={() => {}}>
          Edit
        </VillaLink>
      </Block>
    </StyledAboutGuests>
  );
};
