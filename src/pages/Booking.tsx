import React from 'react';
import { MainBooking } from '../Components/Booking/MainBooking';
import { LayoutContainer } from '../Components/Layout/LayoutContainer';
import { useScrollTop } from '../hooks/useScrollTop';

export const Booking = () => {
  useScrollTop();
  return (
    <>
      <LayoutContainer>
        <MainBooking />
      </LayoutContainer>
    </>
  );
};
