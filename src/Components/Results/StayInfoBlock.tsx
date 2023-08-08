import React from 'react';
import styled from 'styled-components';
import { StayLink } from '../UI/StayLink';
import { Stars } from '../UI/Stars';
import { StayPriceBlock } from './StayPriceBlock';
import { StayInterface } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { StateInterface } from '../../types/reduxTypes';
import { updateProperties } from '../../store/actions';

const InfoBlock = styled.div`
width: calc((100% - 24px) - ((100% - 24px) / 3));
display: flex;
flex-direction: column;
justify-content: space-between;

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

const Like = styled.button`
border: none;
outline: none;
background: transparent;
cursor: pointer;
`;

interface Props {
  stay: StayInterface;
  duration: number;
  adults: number;
}

export const StayInfoBlock: React.FC <Props> = ({ stay, duration, adults }) => {
  const dispatch = useDispatch();
  const properties = useSelector((state: StateInterface) => state.properties);
  const isPropertyLiked = properties.some((property: StayInterface) => property.id === stay.id);

  function likeOrDislikeThisProperty(stay: StayInterface) {
    let updatedProperties = [];
    if (isPropertyLiked) {
      updatedProperties = properties.filter((property: StayInterface) => property.id !== stay.id);
    } else {
      updatedProperties = [...properties, stay];
    }
    dispatch(updateProperties(updatedProperties));
  }

  return (
    <InfoBlock>
      <NameBlock>
        <Name>
          {stay.name}
        </Name>
        <Like onClick={(e) => {
          likeOrDislikeThisProperty(stay);
        }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill={isPropertyLiked ? '#29E3AB' : 'none'} xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_705_2171)">
              <path d="M9.99984 5.33325C5.94975 5.33325 2.6665 8.61652 2.6665 12.6666C2.6665 19.9999 11.3332 26.6666 15.9998 28.2174C20.6665 26.6666 29.3332 19.9999 29.3332 12.6666C29.3332 8.61652 26.0499 5.33325 21.9998 5.33325C19.5196 5.33325 17.327 6.56452 15.9998 8.44912C14.6727 6.56452 12.48 5.33325 9.99984 5.33325Z" stroke="#14142A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_705_2171">
                <rect width="32" height="32" fill="#fff"/>
              </clipPath>
            </defs>
          </svg>
        </Like>
      </NameBlock>
      <EvaluationBlock>
        <Stars 
          count={stay.rating}
        />
        <StayLink click={() => {}}>
          {/* See all {stay.reviewsList.length} reviews */}
        </StayLink>
      </EvaluationBlock>
      <StayPriceBlock
        price={stay.price}
        duration={duration}
        adults={adults}
        stayId={stay.id}
      />
    </InfoBlock>
  );
};
