import React from 'react';
import styled from 'styled-components';
import { Comment } from './Comment';
import { ReviewListItemInterface, VillaInterface } from '../../types';

const ReviewsPeopleBlock = styled.div`
display: flex;
justify-content: space-between;
gap: 20px;
margin: 36px 0 0 0;
`;

const PersonBlock = styled.div`
display: flex;
gap: 16px;
margin: 0 0 24px 0;
`;

const Person = styled.div`
width: calc((100% - 16px) / 2);
`;

const PersonImage = styled.img`
border-radius: 50%;
width: 50px;
height: 50px;
`;

const Author = styled.p`
margin: 0 0 2px 0;
font-weight: 400;
line-height: 27px;
font-size: 18px;
`;

const Date = styled.p`
color: #6E7191;
margin: 0;
`;

interface Props {
  villa: VillaInterface;
}

export const ReviewsPeople: React.FC <Props> = ({ villa }) => {
  return (
    <ReviewsPeopleBlock>
      {villa.reviewsList.map((listItem: ReviewListItemInterface) => (
        <Person key={listItem.text}>
          <PersonBlock>
            <PersonImage 
              src={listItem.img}
              alt="person"
            />
            <div>
              <Author>
                {listItem.author}
              </Author>
              <Date>
                {listItem.date}
              </Date>
            </div>
          </PersonBlock>
          <Comment 
            listItem={listItem}
          />
        </Person>
      ))}
    </ReviewsPeopleBlock>
  );
};
