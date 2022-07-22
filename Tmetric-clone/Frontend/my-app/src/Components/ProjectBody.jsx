import React, { useState } from "react";
import styles from "../styles/projectbody.module.css";
import { IoIosSearch } from "react-icons/io";
import { TiArrowUp } from "react-icons/ti";
import { TiArrowUnsorted } from "react-icons/ti";

import { useNavigate } from "react-router-dom";
import Project from "./Project";

const ProjectBody = () => {
  const [options,setOptions]= useState(false)
  let arr = [
    { name: "masai", status: true, code: "lms1", team: "no team" },
    { name: "masai1", status: false, code: "lms2", team: "no team" },
    { name: "m2", status: true, code: "lms3", team: "no team" },
    { name: "masai3", status: false, code: "lms4", team: "no team" },
    { name: "masai4", status: true, code: "lms5", team: "no team" },
  ];
  const navigate = useNavigate();

  const [text, setText] = useState("");
  let newArray = arr.filter((el) => {
    if (el.name.toLowerCase().includes(text.toLowerCase())) {
      return el;
    }
  });
  const handleChnage = (e) => {
    setText(e.target.value);
    newArray = arr.filter((el) => {
      if (el.name.toLowerCase().includes(text.toLowerCase())) {
        return el;
      }
    });
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <div className={styles.project_title}>
          <h2>Projects</h2>
        </div>
        <div className={styles.filter_container}>
          <div>
            <select>
              <option>Client: All</option>
            </select>
          </div>
          <div>
            <select>
              <option>Status: Active and Done</option>
              <option>Active and Done </option>
              <option>Active</option>
              <option>Done</option>
            </select>
          </div>

          <div>
            <select>
              <option>Billing: Any</option>
              <option>Non-Billable</option>
              <option>Time & Materials</option>
            </select>
          </div>
          <div>
            <select>
              <option>Budget: Any</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div className={styles.content_container}>
          <div className={styles.content_top_div}>
            <div className={styles.content_top_div_left_div}>
              <div>
                <button
                  onClick={() => {
                    navigate("new");
                  }}
                >
                  + New Project
                </button>
              </div>
              <div className={styles.toggle_div}>
                <input
                  type="checkbox"
                  id="switch"
                  className={styles.checkbox}
                />
                <label htmlFor="switch" className={styles.toggle}></label>
                <p>Group by client</p>
              </div>
            </div>
            <div className={styles.content_top_div_right_div}>
              <div>
                <h4>{newArray.length} Projects </h4>
              </div>
              <div className={styles.content_top_div_right_div_input}>
                <IoIosSearch />
                <input
                  type="text"
                  placeholder="Search"
                  onChange={handleChnage}
                />
              </div>
            </div>
          </div>
          <div className={styles.content_header_div}>
            <div>
              <input type="checkbox" />
              <TiArrowUp />
              <p>PROJECT</p>
            </div>
            <div>
              <TiArrowUnsorted />
              <p>CODE</p>
            </div>
            <div>
              <p>TEAM</p>
            </div>
            <div></div>
          </div>
          {newArray.map((el, index) => (
            <Project key={index} {...el} options={options} setOptions={setOptions} index={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBody;
