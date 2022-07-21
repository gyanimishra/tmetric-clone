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
    <div>
      <div>
        <div>
          <h2>Projects</h2>
        </div>
        <div>
          <select>
            <option>Client: All</option>
          </select>
          <select>
            <option>Status: Active and Done</option>
            <option>Active and Done </option>
            <option>Active</option>
            <option>Done</option>
          </select>
          <select>
            <option>Billing: Any</option>
            <option>Non-Billable</option>
            <option>Time & Materials</option>
          </select>
          <select>
            <option>Budget: Any</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <div>
            <div>
              <div>
                <button> +New Project</button>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="switch"
                  className={styles.checkbox}
                />
                <label htmlFor="switch" className={styles.toggle}></label>
              </div>
            </div>
            <div>
              <div>
                <h4>no. of project </h4>
              </div>
              <div>
                <IoIosSearch />
                <input type="text" />
              </div>
            </div>
          </div>
          <div>
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
          <div>
            <div>
              <input type="checkbox" name="" id="" />
              <MdKeyboardArrowDown />
              <h5>No client(no. of project)</h5>
            </div>
          </div>
          {arr.map((el, index) => (
            <div key={index}>
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
