import React from 'react';
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

  .react-datepicker {
    font-family: Nunito, sans-serif;
    width: 100%;

    &-popper {
      @media screen and (max-width: 768px) {
        max-width: 364px;
        width: 100%;
      }
    }

    &__header {
      background: #fff;
    }

    &-wrapper {

      @media screen and (max-width: 768px) {
        max-width: 364px;
        width: 100%;
      }
    }

    &__day {
      border-radius: 8px;
      border: 1px solid ${props => props.theme.disabledColor};
      background: #FFF;
      width: 50px;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      font-weight: 600;

      @media screen and (max-width: 768px) {
        width: 24px;
        height: 24px;
        line-height: 24px;
      }

      &--selected {
        background-color: ${props => props.theme.primaryColor};
        color: white;
      }

      &:hover {
        border: 0.2px solid ${props => props.theme.hoverColor};
        background: ${props => props.theme.hoverColor};
      }

      &-names {
        color: #888;
        background: #ffffff;
      }

      &-name {
        color: #888;
        font-size: 18px;
        font-weight: 600;
      }
    }

    &__current-month {
      color: ${props => props.theme.txtColor};
      background: #fff;
      font-size: 18px;
      font-weight: 600;
      margin: 0 0 24px 0;
    }

    &__input-container {
      position: relative;

      input {
        width: 100%;
        height: 64px;
        box-sizing: border-box;
        padding: 10px;
        font-size: 16px;
        background: #FFFFFF;
        border: 2px solid ${props => props.theme.disabledColor};
        border-radius: 8px;
        background: #FFFFFF url(${calendar}) no-repeat left 5px center;
        background-position: 16px center;
        padding: 0 0 0 56px;
  
        &:focus-visible {
          outline: 3px solid ${props => props.theme.primaryColor};
          outline-offset: -2px;
        }
  
        &:placeholder {
          color: ${props => props.theme.placeholderColor};
        }
      }
    }
  }
`;

interface Props {
  date: Date | null;
  disableBefore: Date;
  setDate: (date: Date) => void;
}

export const Calendar: React.FC <Props> = ({ setDate, date, disableBefore }) => {
  const handleDateChange = (date: Date) => {
    setDate(date);
  };

  const highlightToday: any = {
    borderColor: '#00ff00',
    borderWidth: '2px',
  };

  return (
    <CalendarInput>
      <DatePicker
        selected={date ? date : null}
        onChange={handleDateChange}
        dateFormat="d MMMM"
        placeholderText="Select a date"
        highlightDates={[highlightToday]}
        minDate={disableBefore}
      />
    </CalendarInput>
  );
};
