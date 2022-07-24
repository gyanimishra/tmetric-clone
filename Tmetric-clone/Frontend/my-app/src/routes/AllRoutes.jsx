import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Components/HomePage";
import Support from "../Components/Support";
import Blog from "../Components/Blog";
import Signup from "../Components/SignUp";
import NewProjectForm from "../Components/NewProjectForm";
import Price from "../Components/Price"
import ProjectUpdate from "../Components/ProjectUpdate"
import Login from "../Components/LogIn"
import ProjectBody from "../Components/ProjectBody";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project" element={<ProjectBody />} />
      <Route path="/project/new" element={<NewProjectForm />} />
      <Route path="/project/:id" element={<ProjectUpdate />} />
      <Route path="/support" element={<Support />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/price" element={<Price />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
