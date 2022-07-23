import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Components/HomePage";
import Support from "../Components/Support";
import Blog from "../Components/Blog";
import Signin from "../Components/Signin";
import Signup from "../Components/SignUp";
import ProjectBody from "../Components/ProjectBody";
import NewProjectForm from "../Components/NewProjectForm";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project" element={<ProjectBody />} />
      <Route path="/project/new" element={<NewProjectForm />} />
      <Route path="/support" element={<Support />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;
