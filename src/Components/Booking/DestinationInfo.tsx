import React from 'react';
import styled from 'styled-components';
import { Stars } from '../UI/Stars';
import { StayInterface } from '../../types';
import { useSelector } from 'react-redux';

const Rewievs = styled.span`
margin: 0 8px 0 8px;
`;

const H1 = styled.h1`
color: ${props => props.theme.txtColor};
font-size: 32px;
font-weight: 700;
line-height: 120%;
margin: 0 0 16px 0;
`;

const BookingId = styled.p`
color: ${props => props.theme.txtColor};
font-size: 18px;
font-weight: 600;
line-height: 150%;
margin: 0 0 8px 0;
`;

const StayName = styled.p`
color: ${props => props.theme.txtColor};
font-size: 18px;
font-weight: 600;
line-height: 150%;
margin: 0;
`;

const Address = styled.p`
color: ${props => props.theme.txtFormColor};
font-size: 16px;
line-height: 150%;
margin: 0 0 4px 0;
`;

const RatingBlock = styled.div`
display: flex;
gap: 16px;
margin: 0 0 16px 0;
`;

interface Props {
  stay: StayInterface;
}

export const DestinationInfo: React.FC <Props> = ({ stay }) => {
  const dates = useSelector((state: any) => state.dates);
  return (
    <>
      <H1>
        Booking summary
      </H1>
      <BookingId>
        Booking ID #1245609 from {dates.startDate.toLocaleDateString()}
      </BookingId>
      <StayName>
        {stay.name}
      </StayName>
      <Address>
        <span>
          {`${stay.street}, ${stay.city}, ${stay.country}`}
        </span>
      </Address>
      <RatingBlock>
        <Stars count={stay.rating} />
        <Rewievs>
          {`${stay.reviews} rewievs`}
        </Rewievs>
      </RatingBlock>
    </>
  );
};
