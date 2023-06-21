import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const CalendarInput = styled.div`
  .react-datepicker-wrapper {
    width: 184px;
  }

  .react-datepicker {
    font-family: Arial, sans-serif;
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
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
      />
    </CalendarInput>
  );
};
