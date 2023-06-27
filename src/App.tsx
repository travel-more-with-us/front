import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Villa } from './pages/Villa';
import { Results } from './pages/Results';
import { Booking } from './pages/Booking';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path='/villa' element={<Villa />}>
        </Route>
        <Route path="/results" element={<Results />}>
        </Route>
        <Route path="/booking" element={<Booking />}>
        </Route>
      </Routes>
    </>
  );
};
