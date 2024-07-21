import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/main';
import { SecondPage } from '../pages/second';

const RoutesSystem: React.FC = () => {
  return (
    <Routes>
        <Route
          path="/"
          element={
              <MainPage />
          }
        />
        <Route
          path="/second"
          element={
              <SecondPage />
          }
        />
    </Routes>
  );
};

export default RoutesSystem;
