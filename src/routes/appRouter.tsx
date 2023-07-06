import React from 'react';
import { Home } from '../pages/Home';
import { Results } from '../pages/Results';
import { Booking } from '../pages/Booking';
import { Stay } from '../pages/Stay';
import { Route, Routes } from 'react-router-dom';
import { ProfilePage } from '../pages/ProfilePage';

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
      path: '/booking/:stayId',
      element: <Booking />
    },
    {
      path: '/stay/:stayId',
      element: <Stay />,
    },
    {
      path: '/profile',
      element: <ProfilePage />
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
