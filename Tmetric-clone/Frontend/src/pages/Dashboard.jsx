import React from "react";
import ProjectBody from "../components/ProjectBody";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  const [add, showAdd]= React.useState(false)
  return <div>
    <SideBar showAdd={showAdd} add={add}/>
    <ProjectBody/>
  </div>;
};

export default Dashboard;
