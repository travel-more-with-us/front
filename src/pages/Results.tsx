import React from 'react';
import { SearchedResults } from '../Components/Results/SearchedResults';
import { LayoutContainer } from '../Components/Layout/LayoutContainer';
import { useScrollTop } from '../helpers/useScrollTop';


export const Results = () => {
  useScrollTop();
  return (
    <>
      <LayoutContainer>
        <SearchedResults />
      </LayoutContainer>
    </>
  );
};
