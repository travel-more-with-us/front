import React from 'react';
import styled from 'styled-components';
import { Rating } from './Rating';

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

const RatingName = styled.p`
width: 130px;
margin: 0;
`;

const RatingValue = styled.p`
margin: 0;
width: 20px;
`;

export const ListRating: React.FC <any> = ({ stay }) => {
  return (
    <ListRarings>
      <ListRaringItem>
        <RatingName>
          Accuracy
        </RatingName>
        <Rating 
          rating={stay.accuracy}
        />
        <RatingValue>
          {stay.accuracy.toFixed(1)}
        </RatingValue>
      </ListRaringItem>
      <ListRaringItem>
        <RatingName>
          Value
        </RatingName>
        <Rating 
          rating={stay.value}
        />
        <RatingValue>
          {stay.value.toFixed(1)}
        </RatingValue>
      </ListRaringItem>
      <ListRaringItem>
        <RatingName>
          Location
        </RatingName>
        <Rating 
          rating={stay.location}
        />
        <RatingValue>
          {stay.location.toFixed(1)}
        </RatingValue>
      </ListRaringItem>
      <ListRaringItem>
        <RatingName>
          Cleanliness
        </RatingName>
        <Rating 
          rating={stay.cleanliness}
        />
        <RatingValue>
          {stay.cleanliness.toFixed(1)}
        </RatingValue>
      </ListRaringItem>
      <ListRaringItem>
        <RatingName>
          Check in
        </RatingName>
        <Rating 
          rating={stay.checkIn}
        />
        <RatingValue>
          {stay.checkIn.toFixed(1)}
        </RatingValue>
      </ListRaringItem>
      <ListRaringItem>
        <RatingName>
          Communication
        </RatingName>
        <Rating 
          rating={stay.communication}
        />
        <RatingValue>
          {stay.communication.toFixed(1)}
        </RatingValue>
      </ListRaringItem>
    </ListRarings>
  );
};
