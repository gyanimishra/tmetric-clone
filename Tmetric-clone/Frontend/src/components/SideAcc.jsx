import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { GoGraph } from "react-icons/go";
import { GrEmptyCircle, GrIntegration } from "react-icons/gr";
import { AiFillFolder } from "react-icons/ai";
import { BiBuildings, BiAlarmOff, BiUserCircle } from "react-icons/bi";
import { RiPagesLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { SiMicrosoftteams } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout_app } from "../redux/auth/actions";

export default function SideAcc({showAdd}) {
  const name = JSON.parse(localStorage.getItem("name"));
  const dispatch = useDispatch();
  

  const handlelogout = () => {
    dispatch(logout_app())
    showAdd((prev)=>showAdd(!prev))
  };
  return (
    <div>
      <Accordion style={{ backgroundColor: "#f6f7f8" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{ fontWeight: "600", fontSize: "15px", marginLeft: "10px" }}
          >
            Analyze
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p style={{ marginBottom: "20px", marginLeft: "15px" }}>
            <GoGraph /> Reports
          </p>
          <p style={{ marginLeft: "15px" }}>
            <GrEmptyCircle /> Activity
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: "#f6f7f8" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            style={{ fontWeight: "600", fontSize: "15px", marginLeft: "10px" }}
          >
            Manage
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p style={{ marginBottom: "20px", marginLeft: "15px" }}>
            <AiFillFolder /> Project
          </p>
          <p style={{ marginBottom: "20px", marginLeft: "15px" }}>
            <BiBuildings /> Clients
          </p>
          <p style={{ marginBottom: "20px", marginLeft: "15px" }}>
            <RiPagesLine /> Invoices
          </p>
          <p style={{ marginBottom: "20px", marginLeft: "15px" }}>
            <BiAlarmOff /> Time Off
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: "#f6f7f8" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            style={{ fontWeight: "600", fontSize: "15px", marginLeft: "10px" }}
          >
            Workspace
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p style={{ marginBottom: "20px", marginLeft: "15px" }}>
            <FiSettings /> settings
          </p>
          <p style={{ marginBottom: "20px", marginLeft: "15px" }}>
            <BiUserCircle /> Members
          </p>
          <p style={{ marginBottom: "20px", marginLeft: "15px" }}>
            <SiMicrosoftteams /> Teams
          </p>
          <p style={{ marginBottom: "20px", marginLeft: "15px" }}>
            <GrIntegration /> Integrations
          </p>
          <p style={{ marginLeft: "15px" }}>
            <MdSubscriptions /> Subsciption
          </p>
        </AccordionDetails>
      </Accordion>
      <div>
        <div style={{ display: "flex", gap: 10, marginTop: "140%" }}>
          <hr></hr>
          <div>
            <img
              src="https://th.bing.com/th/id/R.6afc61b50aabe45a2e6c68eae2c217ba?rik=L2W0YWncfjZBVA&riu=http%3a%2f%2fwww.shutterstock.com%2fblog%2fwp-content%2fuploads%2fsites%2f5%2f2016%2f03%2ffall-trees-road-1.jpg&ehk=KA%2bzFrmYoWsdK4k7v%2fgfNkd1T2rdnNtpF5ICdLIxAeM%3d&risl=&pid=ImgRaw&r=0"
              alt=""
              style={{ width: 60, height: 60, borderRadius: "50%" }}
            />
          </div>
          <div style={{ textAlign: "left", color: "grey" }}>
            <p>My Company</p>
            <p style={{ fontSize: "20px", color: "black" }}>{name}</p>
          </div>
        </div>
        <div>
          <button onClick={handlelogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
