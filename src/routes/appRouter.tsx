import React from 'react';
import { Home } from '../pages/Home';
import { Results } from '../pages/Results';
import { Booking } from '../pages/Booking';
import { Stay } from '../pages/Stay';
import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  const routes = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/results',
      element: <Results />,
    },
    {
      path: '/booking',
      element: <Booking />
    },
    {
      path: '/stay',
      element: <Stay />,
    }
  ];
  return (
    <Routes>
      {routes.map(route => (
        <Route path={route.path} element={route.element} key={route.path}>
        </Route>
      ))}
    </Routes>
  );
};
