import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

interface Props {
  children: React.ReactNode;
}

export const LayoutContainer: React.FC <Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
