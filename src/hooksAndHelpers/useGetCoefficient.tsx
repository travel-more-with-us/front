/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useGetDuration } from './useGetDuration';
import { useSelector } from 'react-redux';
import { StateInterface } from '../types/reduxTypes';

export const useGetCoefficient = () => {
  const guests = useSelector((state: StateInterface) => state.guests);
  const dates = useSelector((state: StateInterface) => state.dates);
  const daysDifference = useGetDuration(dates.startDate, dates.endDate);


  const coef = React.useMemo(() => {
    const totalGuests = guests.adults + guests.children;
    const additional = (totalGuests - (guests.rooms * 2)) * 0.15;
    const newCoefficient = daysDifference && (daysDifference * guests.rooms) + additional;
  
    return newCoefficient || 1;
  }, [guests, dates]);

  return coef;
};