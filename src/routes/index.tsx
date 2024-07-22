import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/mainPage';
import { OptionsPage } from '../pages/optionsPage';
import { ThirdPage } from '../pages/ThirdPage';

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
          path="/OqFaremos?"
          element={
              <OptionsPage />
          }
        />
         <Route
          path="/Beleza!"
          element={
              <ThirdPage />
          }
        />
    </Routes>
  );
};

export default RoutesSystem;
