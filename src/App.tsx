import React from 'react';
import { HashRouter } from 'react-router-dom';
import { AppRouter } from './routes/appRouter';
import { Provider } from 'react-redux';
import store from './store';

export const App = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </HashRouter>
  );
};
