import React from 'react';
import styled from 'styled-components';
import { StayLink } from '../UI/StayLink';
import { Separator } from '../UI/Separator';
import { Guideline } from '../../types';

const StyledGuideLines = styled.div`
padding: 60px 0 0 0;
`;

const H3 = styled.h3`
font-size: 32px;
font-family: Nunito;
font-weight: 700;
line-height: 120%;
margin: 0 0 16px 0;
`;

const Block = styled.div`
display: flex;

@media screen and (max-width: 768px) {
  flex-wrap: wrap;
  gap: 24px;
}
`;

const Guide = styled.div`
padding: 0 20px;

@media screen and (max-width: 768px) {
  width: 100%;
}
`;

const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 0 8px 0;
`;

const Name = styled.p`
margin: 0;
font-size: 20px;
font-family: Nunito;
font-weight: 700;
line-height: 150%;
`;

const Description = styled.div`
font-size: 16px;
font-family: Nunito;
line-height: 150%;
`;

export const GuestGuidlines = () => {
  const guidelines = [
    {
      name: 'House rules',
      description: 'Check-in and Check-out times - Check-in: after 2:00 PM - Check-out: before 11:00 AM Smoking policy - Smoking is prohibited inside the premises - Smoking is allowed in designated areas in the courtyard or on the balcony Pet policy - Prior approval is required for accommodating pets - Additional fees apply for pet-friendly stays',
    },
    {
      name: 'Safety & property',
      description: 'Safety procedures - Keep doors and windows closed when not present - Store valuable items in a secure location - Do not disclose confidential information about your stay Responsibility for property - Guests are fully responsible for any damage or loss of property caused due to negligence or misuse'
    },
    {
      name: 'Cancellation policy',
      description: 'Cancellation terms - Free cancellation up to 48 hours before arrival - 50% refund for cancellations less than 48 hours before arrival Booking flexibility - Changes and modifications to reservations are subject to availability and specified terms'
    }
  ];
  return (
    <StyledGuideLines>
      <H3>
        Guest guidelines
      </H3>
      <Block>
        {guidelines.map((guide: Guideline, index: number) => (
          <React.Fragment key={guide.name}>
            <Guide>
              <Header>
                <Name>
                  {guide.name}
                </Name>
                {/* <StayLink click={() => {}}>
                  Show more
                </StayLink> */}
              </Header>
              <Description>
                {guide.description}
              </Description>
            </Guide>
            {index !== guidelines.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </Block>
    </StyledGuideLines>
  );
};
