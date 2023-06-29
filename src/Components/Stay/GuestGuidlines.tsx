import React from 'react';
import styled from 'styled-components';
import { StayLink } from '../UI/StayLink';
import { Separator } from '../UI/Separator';
import { Guideline, StayInterface } from '../../types';

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

interface Props {
  stay: StayInterface;
}

export const GuestGuidlines: React.FC <Props> = ({ stay }) => {
  return (
    <StyledGuideLines>
      <H3>
        Guest guidelines
      </H3>
      <Block>
        {stay.guidelines.map((guide: Guideline, index: number) => (
          <React.Fragment key={guide.name}>
            <Guide>
              <Header>
                <Name>
                  {guide.name}
                </Name>
                <StayLink click={() => {}}>
                  Show more
                </StayLink>
              </Header>
              <Description>
                {guide.description}
              </Description>
            </Guide>
            {index !== stay.guidelines.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </Block>
    </StyledGuideLines>
  );
};
