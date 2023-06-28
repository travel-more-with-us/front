import React from 'react';
import styled from 'styled-components';
import { VillaLink } from '../UI/VillaLink';
import { Stars } from '../UI/Stars';
import like from '../../images/like.svg';
import { Oval } from '../UI/Oval';
import { VillaPriceBlock } from './VillaPriceBlock';
import { VillaInterface } from '../../types';

const InfoBlock = styled.div`
width: calc((100% - 24px) - ((100% - 24px) / 3));

@media screen and (max-width: 768px) {
  width: 100%;
}
`;

const Name = styled.div`
font-size: 32px;
font-weight: 700;
line-height: 120%;
`;

const NameBlock = styled.div`
display: flex;
justify-content: space-between;
`;

const EvaluationBlock = styled.div`
display: flex;
gap: 16px;
margin: 0 0 8px 0;

@media screen and (max-width: 768px) {
  justify-content: space-between;
}
`;

const LocationBlock = styled.div`
display: flex;
align-items: center;
margin: 0 0 70px 0;
`;

const ShowMap = styled.span`
font-size: 16px;
font-family: Nunito;
text-decoration-line: underline;
margin: 0 8px 0 0;
`;

const Miles = styled.span`
font-size: 16px;
line-height: 150%;
margin: 0 8px 0 0;
`;

interface Props {
  villa: VillaInterface;
}

export const VillaInfoBlock: React.FC <Props> = ({ villa }) => {
  return (
    <InfoBlock>
      <NameBlock>
        <Name>
          {villa.name}
        </Name>
        <img 
          src={like}
          alt="like"
        />
      </NameBlock>
      <EvaluationBlock>
        <Stars 
          count={villa.rating}
        />
        <VillaLink click={() => {}}>
          See all {villa.reviewsList.length} reviews
        </VillaLink>
      </EvaluationBlock>
      <LocationBlock>
        <ShowMap>
          show on map
        </ShowMap>
        <Oval />
        <Miles>
          3 miles from center
        </Miles>
        <Oval />
        <span>
          beach nearby
        </span>
      </LocationBlock>
      <VillaPriceBlock 
      />
    </InfoBlock>
  );
};
