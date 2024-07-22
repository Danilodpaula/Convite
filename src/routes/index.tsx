import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/mainPage";
import { PressPage } from "../pages/PressPage";

const RoutesSystem: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PressPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
};

export default RoutesSystem;
