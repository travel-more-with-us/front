import React from 'react';
import { MainBooking } from '../Components/Booking/MainBooking';
import { LayoutContainer } from '../Components/Layout/LayoutContainer';
import { useScrollTop } from '../hooksAndHelpers/useScrollTop';

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
