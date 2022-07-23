import React from "react";
import NewProjectForm from "../Components/NewProjectForm";
import ProjectBody from "../Components/ProjectBody";
import SideBar from "../Components/SideBar";

const Dashboard = () => {
  return (
    <div>
      <SideBar/>
      <ProjectBody />
      {/* <NewProjectForm/> */}
    </div>
  );
};

export default Dashboard;
