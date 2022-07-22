
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/project" element={<Dashboard />} />
    </Routes>
  );
};

export default AllRoutes;
