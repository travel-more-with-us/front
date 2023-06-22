import React from 'react';
import styled from 'styled-components';

const CheckDatesContainer = styled.div`
display: flex;
margin: 0 0 16px 0;
`;

const Date = styled.div`
width: calc(100% / 3);
border: 1px solid #D9DBE9;
padding: 10px 0 5px 16px;
box-sizing: border-box;
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
  return (
    <CheckDatesContainer>
      <Date>
        <DateTxt>
          Check in
        </DateTxt>
        <DateValue>
          21.06.2023
        </DateValue>
      </Date>
      <Date>
        <DateTxt>
          Check out
        </DateTxt>
        <DateValue>
          23.06.2023
        </DateValue>
      </Date>
      <Date>
        <DateTxt>
          Guests
        </DateTxt>
        <DateValue>
          2 guests
        </DateValue>
      </Date>
    </CheckDatesContainer>
  );
};
