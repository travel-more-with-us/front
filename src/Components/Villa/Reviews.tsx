import React from 'react';
import styled from 'styled-components';
import { VillaLink } from '../UI/VillaLink';
import { Rating } from './Rating';
import { ReviewsPeople } from './ReviewsPeople';

const ReviewsContainer = styled.div`
width: calc((100% - 16px) / 2);
`;

const ReviewsBlock = styled.div`
display: flex;
justify-content: space-between;
margin: 0 0 16px 0;
`;

const ListRarings = styled.div`
display: flex;
flex-wrap: wrap;
gap: 24px;
`;

const ListRaringItem = styled.div`
width: calc((100% - 24px)/2);
display: flex;
align-items: center;
`;

const RaringName = styled.p`
width: 130px;
margin: 0;
`;

const RaringValue = styled.p`
margin: 0;
width: 20px;
`;

const H3 = styled.h3`
font-weight: 700;
font-size: 32px;
line-height: 120%;
color: #14142A;
`;

export const Reviews: React.FC <any> = ({ villa }) => {
  return (
    <ReviewsContainer>
      <ReviewsBlock>
        <H3>
          Rarings&Reviews
        </H3>
        <VillaLink click={() => {}}>
          Show more
        </VillaLink>
      </ReviewsBlock>
      <ListRarings>
        {villa.rarings.map((raring: any) => (
          <ListRaringItem key={raring.name}>
            <RaringName>
              {raring.name}
            </RaringName>
            <Rating 
              rating={raring.rating}
            />
            <RaringValue>
              {raring.rating}
            </RaringValue>
          </ListRaringItem>
        ))}
      </ListRarings>
      <ReviewsPeople 
        villa={villa}
      />
    </ReviewsContainer>
  );
};

