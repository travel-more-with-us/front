import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
// import { Villa } from './pages/Villa';
// import { Results } from './pages/Results';

export const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />}>
        </Route>
        <Route path='/villa' element={<Villa />}>
        </Route>
        <Route path="/results" element={<Results />}>
        </Route> */}
        <Route path='/' element={<div>
          asdfasdfasdfsdf 111111
        </div>}>

        </Route>
      </Routes>
      <div>
        dfgfxasdfxcx
      </div>
    </>
  );
};
