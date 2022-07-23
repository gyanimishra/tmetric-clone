import React, { useRef } from "react";
import styles from "../styles/newprojectform.module.css";
import { FiArrowLeft } from "react-icons/fi";

const NewProjectForm = () => {
  const ref = useRef([]);

  return (
    <div className={styles.main_container_form}>
      <div className={styles.form_top_div}>
        
          <FiArrowLeft  fontSize={"30px"}/>
        
        <h1>New Project</h1>
      </div>
      <div className={styles.form_content_div}>
        <div className={styles.form_content_btn_div}>
          <button>General</button>
          <button>Billing</button>
          <button>Budget</button>
          <button>Work types</button>
          <button>Team</button>
        </div>
        <div className={styles.form_content_data_div}>
          <div className={styles.form_content_data_general}>
            <h2>
              General <span> Active</span>
            </h2>
          </div>
          <div>
            <form>
              <div className={styles.form_content_data_div1}>
                <div>
                  <p>Project name</p>
                  <input className= {styles.projectnameInput}type="text" placeholder="Enter project name" />
                </div>
                <div>
                  <p>Project Code</p>
                  <input type="text" placeholder="PR-01" />
                </div>
              </div>

              <div className={styles.form_content_data_div1}>
                <div>
                  <p>Client</p>
                  <select>
                    <option value=""> Select Client</option>
                  </select>
                </div>
                <div>
                  <input type="file" />
                </div>
              </div>

              <div>
                <p>Notes</p>
                <textarea placeholder="Additional information on the project"></textarea>
              </div>

              <div>
                <div>
                  <h2>Billing</h2>
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
                  <p>
                    To set uo billing options for the project,mark it as
                    billable
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <h2>Budget</h2>
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
                  <p>
                    To add a budget to the project,you need to enable the
                    section
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <h2>Work types</h2>
                </div>
                <div>
                  <p>
                    There are no work types in the workspace, You should{" "}
                    <span>create a work type.</span>
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <h2>Team</h2>
                </div>
                <div>
                  <button>+ Add members to project team</button>
                </div>
              </div>

              <div>
                <p>
                  It's a public project. Time can be recorded by every member.
                  All workspace members will see the project in their reports.
                  Add team members to restrict project visibility.
                </p>
              </div>

              <div>
                <p>Press Ctrl+Enter to save changes</p>
                <div>
                  <button type="submit">Save</button>
                  <button>Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProjectForm;
