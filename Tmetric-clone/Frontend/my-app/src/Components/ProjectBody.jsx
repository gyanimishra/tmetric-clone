import React from "react";
import styles from "../styles/projectbody.module.css";

const ProjectBody = () => {
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
                <label className={styles.switch}>
                  <input type="checkbox" checked />
                  <span ></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBody;
