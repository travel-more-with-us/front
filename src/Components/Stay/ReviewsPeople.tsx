/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Comment } from './Comment';
import { ReviewListItemInterface, StayInterface } from '../../types';
import axios from 'axios';
import { baseUrl } from '../../api';
import { Loading } from '../Loading/Loading';
import { useFetching } from '../../hooksAndHelpers/useFetching';

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
color: ${props => props.theme.txtColorSecondary};
margin: 0;
`;

interface Props {
  stay: StayInterface;
}

export const ReviewsPeople: React.FC <Props> = ({ stay }) => {
  const [reviews, reviewsLoading, reviewsError] = useFetching(baseUrl + `reviews?${stay.id}`);

  return (
    <>
      {reviewsLoading ? (
        <Loading />
      ) : (
        <ReviewsPeopleBlock>
          {reviews.map((listItem: ReviewListItemInterface) => (
            <Person key={listItem.text}>
              <PersonBlock>
                <PersonImage 
                  src={baseUrl + listItem.img}
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
      )}
    </>
  );
};
