import React from 'react';
import { Header } from '../Components/Header/Header';
import { Footer } from '../Components/Footer/Footer';
import { SearchedResults } from '../Components/Results/SearchedResults';

export const Results = () => {
  return (
    <>
      <Header />
      <SearchedResults />
      <Footer />
    </>
  );
};
