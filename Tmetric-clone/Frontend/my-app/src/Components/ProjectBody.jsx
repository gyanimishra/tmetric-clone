import React from "react";
import styles from "../styles/projectbody.module.css";
import { IoIosSearch } from "react-icons/io";
import { TiArrowUp } from "react-icons/ti";
import { TiArrowUnsorted } from "react-icons/ti";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiFolderOpenFill } from "react-icons/ri";

const ProjectBody = () => {
  let arr = [
    { name: "masai", status: true, code: "lms1", team: "no team" },
    { name: "masai1", status: false, code: "lms2", team: "no team" },
    { name: "masai2", status: true, code: "lms3", team: "no team" },
    { name: "masai3", status: false, code: "lms4", team: "no team" },
    { name: "masai4", status: true, code: "lms5", team: "no team" },
  ];
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
                <button> + New Project</button>
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
                <h4>{arr.length} Projects </h4>
              </div>
              <div className={styles.content_top_div_right_div_input} >
                <IoIosSearch />
                <input type="text"  placeholder="Search"/>
              </div>
            </div>
          </div>
          <div className={styles.content_header_div}>
            <div>
              <input type="checkbox" name="" id="" />
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
          </div>
          <div className={styles.content_summury_div}>
            <div>
              <input type="checkbox" name="" id="" />
              <MdKeyboardArrowDown />
              <h5>No client(no. of project)</h5>
            </div>
          </div>
          {arr.map((el, index) => (
            <div key={index} className={styles.project_div}>
              <div>
                <input type="checkbox" name="" id="" />
                <RiFolderOpenFill />
                <p>{el.name}</p>
                {el.status && <span>done</span>}
              </div>
              <div>
                <p>{el.code}</p>
              </div>
              <div>
                <p>No team</p>
              </div>
              <div>
                <h2>...</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBody;
