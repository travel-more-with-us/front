import React from 'react';
import styled from 'styled-components';
import { SearchInput } from './SearchInput';
import { Calendar } from './Calendar';
import { Guests } from './Guests';
import search from '../../../images/search.svg';
import { Place } from '../../../types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateDates } from '../../../store/actions';

const InputsContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
position: relative;
justify-content: space-between;

@media screen and (max-width: 768px) {
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 10px;
}
`;

const Button = styled.div<any>`
  max-width: 80px;
  width: 10%;
  height: 64px;
  background: ${props => props.theme.primaryColor};
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: not-allowed;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 364px;
  }
`;

const LinkButton = styled(Link)`
  max-width: 80px;
  width: 10%;
  height: 64px;
  background: ${props => props.theme.primaryColor};
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 364px;
  }
`;

interface Props {
  places: Place[];
}

export const Inputs: React.FC <Props> = ({ places }) => {
  const dispatch = useDispatch();
  const dateStart = useSelector((state: any) => state.dates.startDate);
  const dateEnd = useSelector((state: any) => state.dates.endDate);
  const departure = useSelector((state: any) => state.departure);
  
  function setDateStart(date: any) {
    if (dateEnd === null) {
      const updatedDates = {
        startDate: date,
        endDate: new Date(date.getTime() + 24 * 60 * 60 * 1000),
      };
      dispatch(updateDates(updatedDates));
    } else {
      const updatedDates = {
        startDate: date,
      };
      dispatch(updateDates(updatedDates));
    }
    
  }
  
  function setDateEnd(date: any) {
    const updatedDates = {
      endDate: date,
    };
    dispatch(updateDates(updatedDates));
  }

  const currentDay = new Date();
  console.log(departure, 'departure');

  return (
    <InputsContainer>
      <SearchInput places={places} />
      <Calendar 
        setDate={setDateStart}
        date={dateStart}
        disableBefore={currentDay}
      />
      <Calendar 
        setDate={setDateEnd}
        date={dateEnd}
        disableBefore={dateStart ? new Date(dateStart.getTime() + 24 * 60 * 60 * 1000) : new Date()}
      />
      <Guests />
      {departure.ctiy === '' || departure.country === '' ? (
        <Button>
          <img src={search} alt="search" />
        </Button>
      ) : (
        <LinkButton to="/results">
          <img src={search} alt="search" />
        </LinkButton>
      )}
    </InputsContainer>
  );
};
