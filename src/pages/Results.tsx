import React from 'react';
import { ResultsMain } from '../Components/Results/ResultsMain';
import { LayoutContainer } from '../Components/Layout/LayoutContainer';
import { useScrollTop } from '../hooks/useScrollTop';


export const Results = () => {
  useScrollTop();
  return (
    <>
      <LayoutContainer>
        <ResultsMain />
      </LayoutContainer>
    </>
  );
};
