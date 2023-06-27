import React from 'react';
import styled from 'styled-components';
import { Stars } from '../UI/Stars';

const Rewievs = styled.span`
margin: 0 8px 0 8px;
`;

const H1 = styled.h1`
color: #14142A;
font-size: 32px;
font-weight: 700;
line-height: 120%;
margin: 0 0 16px 0;
`;

const BookingId = styled.p`
color: #14142A;
font-size: 18px;
font-weight: 600;
line-height: 150%;
margin: 0 0 8px 0;
`;

const StayName = styled.p`
color: #14142A;
font-size: 18px;
font-weight: 600;
line-height: 150%;
margin: 0;
`;

const Address = styled.p`
color: #4E4B66;
font-size: 16px;
line-height: 150%;
margin: 0 0 4px 0;
`;

const RatingBlock = styled.div`
display: flex;
gap: 16px;
margin: 0 0 16px 0;
`;

export const DestinationInfo: React.FC <any> = ({ villa }) => {
  return (
    <>
      <H1>
        Booking summary
      </H1>
      <BookingId>
        Booking ID #1245609 from 06/20/2023
      </BookingId>
      <StayName>
        {villa.name}
      </StayName>
      <Address>
        <span>
          {villa.street}
        </span>
        <span>
          {villa.city}
        </span>
        <span>
          {villa.country}
        </span>
      </Address>
      <RatingBlock>
        <Stars count={villa.rating} />
        <Rewievs>
          {`${villa.rewievs} rewievs`}
        </Rewievs>
      </RatingBlock>
    </>
  );
};
