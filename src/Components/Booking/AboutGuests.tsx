import React from 'react';
import styled from 'styled-components';
import { StayLink } from '../UI/StayLink';

const StyledAboutGuests = styled.div`
border-top: 1px solid ${props => props.theme.disabledColor};
border-bottom: 1px solid ${props => props.theme.disabledColor};
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
color: ${props => props.theme.txtColor};
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
color: ${props => props.theme.txtFormColor};
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
        <StayLink click={() => {}}>
          Edit
        </StayLink>
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
        <StayLink click={() => {}}>
          Edit
        </StayLink>
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
        <StayLink click={() => {}}>
          Edit
        </StayLink>
      </Block>
    </StyledAboutGuests>
  );
};
