import React from 'react';
import { useGetDuration } from './useGetDuration';
import { useSelector } from 'react-redux';

export const useGetCoefficient = () => {
  const guests = useSelector((state: any) => state.guests);
  const dates = useSelector((state: any) => state.dates);
  const daysDifference = useGetDuration(dates.startDate, dates.endDate);


  const coef = React.useMemo(() => {
    const totalGuests = guests.adults + guests.children;
    const additional = (totalGuests - (guests.rooms * 2)) * 0.15;
    const newCoefficient = (daysDifference * guests.rooms) + additional;
  
    return newCoefficient || 1;
  }, [guests, dates]);

  return coef;
};