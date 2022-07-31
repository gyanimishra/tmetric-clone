import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import { HomePage } from "../pages/HomePage";
import Support from "../pages/Support";
import NewProjectForm from "../pages/NewProjectForm";
import ProjectUpdate from "../pages/ProjectUpdate";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Blog from "../pages/Blog";
import Price from "../pages/Price";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project" element={<Dashboard />} />
      <Route path="/project/new" element={<NewProjectForm />} />
      <Route path="/project/:id" element={<ProjectUpdate />} />
      <Route path="/support" element={<Support />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/price" element={<Price />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
