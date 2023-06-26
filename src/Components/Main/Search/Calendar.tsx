import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import calendar from '../../../images/calendar.svg';

const CalendarInput = styled.div`
  width: 18%;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    max-width: 364px;
  }

  .react-datepicker-wrapper {
    max-width: 184px;

    @media screen and (max-width: 768px) {
      max-width: 364px;
      width: 100%;
    }
  }

  .react-datepicker {
    font-family: Nunito, sans-serif;
  }



  .react-datepicker__day {
    border-radius: 8px;
    border: 1px solid #D9DBE9;
    background: #FFF;

    &:hover {
      border: 0.2px solid #B4FDD3;
      background: #B4FDD3;
    }

    &--selected {
      background-color: #29E3AB;
      color: white;
    }
  }

  .react-datepicker__input-container {
    position: relative;

    input {
      width: 100%;
      height: 64px;
      box-sizing: border-box;
      padding: 10px;
      font-size: 16px;
      background: #FFFFFF;
      border: 2px solid #D9DBE9;
      border-radius: 8px;
      background: #FFFFFF url(${calendar}) no-repeat left 5px center;
      padding: 0 0 0 40px;

      &:focus-visible {
        outline: 3px solid #29E3AB;
        outline-offset: -2px;
      }

      &:placeholder {
        color: ${props => props.theme.placeholderColor};
      }
    }
  }
`;

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  return (
    <CalendarInput>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="d MMMM"
        placeholderText="Select a date"
      />
    </CalendarInput>
  );
};