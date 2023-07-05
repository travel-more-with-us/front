import React from 'react';
import { Main } from '../Components/Main/Main';
import { LayoutContainer } from '../Components/Layout/LayoutContainer';
import { useScrollTop } from '../hooksAndHelpers/useScrollTop';

export const Home = () => {
  useScrollTop();
  return (
    <>
      <LayoutContainer>
        <Main />
      </LayoutContainer>
    </>
  );
};
