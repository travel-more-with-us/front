import React from 'react';
import styled from 'styled-components';
import { StayLink } from '../UI/StayLink';
import { Rating } from './Rating';
import { ReviewsPeople } from './ReviewsPeople';
import { RatingInterface, StayInterface } from '../../types';

const ReviewsContainer = styled.div`
width: calc((100% - 16px) / 2);

@media screen and (max-width: 768px) {
  width: 100%;
}
`;

const ReviewsBlock = styled.div`
display: flex;
justify-content: space-between;
margin: 0 0 16px 0;

@media screen and (max-width: 768px) {
  flex-wrap: wrap;
}
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

@media screen and (max-width: 768px) {
  flex-wrap: wrap;
}
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
color: ${props => props.theme.txtColor};
margin: 0;
`;

interface Props {
  stay: StayInterface;
}

export const Reviews: React.FC <Props> = ({ stay }) => {
  return (
    <ReviewsContainer>
      <ReviewsBlock>
        <H3>
          Rarings&Reviews
        </H3>
        <StayLink click={() => {}}>
          Show more
        </StayLink>
      </ReviewsBlock>
      <ListRarings>
        {stay.ratings.map((rating: RatingInterface) => (
          <ListRaringItem key={rating.name}>
            <RaringName>
              {rating.name}
            </RaringName>
            <Rating 
              rating={rating.rating}
            />
            <RaringValue>
              {rating.rating}
            </RaringValue>
          </ListRaringItem>
        ))}
      </ListRarings>
      <ReviewsPeople 
        stay={stay}
      />
    </ReviewsContainer>
  );
};

