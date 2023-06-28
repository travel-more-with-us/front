import React from 'react';
import { HashRouter } from 'react-router-dom';
import { AppRouter } from './routes/appRouter';

export const App = () => {
  return (
    <HashRouter>
      <AppRouter />
    </HashRouter>
  );
};
