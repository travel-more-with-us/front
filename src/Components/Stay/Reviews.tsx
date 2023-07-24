import React from 'react';
import styled from 'styled-components';
import { StayLink } from '../UI/StayLink';
import { ReviewsPeople } from './ReviewsPeople';
import { StayInterface } from '../../types';
import { ListRating } from './ListRating';

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
          Ratings&Reviews
        </H3>
        <StayLink click={() => {}}>
          Show more
        </StayLink>
      </ReviewsBlock>
      <ListRating 
        stay={stay}
      />
      <ReviewsPeople 
        stay={stay}
      />
    </ReviewsContainer>
  );
};

