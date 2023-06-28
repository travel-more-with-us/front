import React from 'react';
import { MainVilla } from '../Components/Villa/MainVilla';
import { LayoutContainer } from '../Components/Layout/LayoutContainer';
import { useScrollTop } from '../helpers/useScrollTop';

export const Villa = () => {
  useScrollTop();
  return (
    <> 
      <LayoutContainer>
        <MainVilla />
      </LayoutContainer>
    </>
  );
};
