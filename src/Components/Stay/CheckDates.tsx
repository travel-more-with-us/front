import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { StateInterface } from '../../types/reduxTypes';

const CheckDatesContainer = styled.div`
display: flex;
margin: 0 0 16px 0;

@media screen and (max-width: 768px) {
  flex-wrap: wrap;
}
`;

const Date = styled.div`
width: calc(100% / 3);
border: 1px solid ${props => props.theme.disabledColor};
padding: 10px 0 5px 16px;
box-sizing: border-box;

@media screen and (max-width: 768px) {
  width: 100%;
}
`;

const DateTxt = styled.p`
margin: 0 0 2px 0;
font-weight: 400;
font-size: 14px;
line-height: 150%;
`;

const DateValue = styled.p`
margin: 0;
font-weight: 400;
font-size: 17px;
line-height: 150%;
color: ${props => props.theme.txtColor};
`;

export const CheckDates = () => {
  const dates = useSelector((state: StateInterface) => state.dates);
  const guests = useSelector((state: StateInterface) => state.guests);

  return (
    <CheckDatesContainer>
      <Date>
        <DateTxt>
          Check in
        </DateTxt>
        <DateValue>
          {dates.startDate && dates.startDate.toLocaleDateString()}
        </DateValue>
      </Date>
      <Date>
        <DateTxt>
          Check out
        </DateTxt>
        <DateValue>
          {dates.endDate && dates.endDate.toLocaleDateString()}
        </DateValue>
      </Date>
      <Date>
        <DateTxt>
          Guests
        </DateTxt>
        <DateValue>
          {guests.adults + guests.children} guests
        </DateValue>
      </Date>
    </CheckDatesContainer>
  );
};
