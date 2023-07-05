import React from 'react';
import { MainStay } from '../Components/Stay/MainStay';
import { LayoutContainer } from '../Components/Layout/LayoutContainer';
import { useScrollTop } from '../hooksAndHelpers/useScrollTop';

export const Stay = () => {
  useScrollTop();
  return (
    <> 
      <LayoutContainer>
        <MainStay />
      </LayoutContainer>
    </>
  );
};
