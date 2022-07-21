import React, { useRef } from "react";
import styles from "../styles/newprojectform.module.css";
import { FiArrowLeft } from "react-icons/fi";

const NewProjectForm = () => {
  const ref = useRef([]);
  return (
    <div>
      <div>
        <h1>
          <FiArrowLeft />
          NewProject
        </h1>
        <div>
          <div>
            <button>General</button>
            <button>Billing</button>
            <button>Budget</button>
            <button>Work types</button>
            <button>Team</button>
          </div>
          <div>
            <div>
              <h1>
                General <span>Active</span>
              </h1>
            </div>
            <div>
              <form>
                <div>
                  <div>
                    <p>Project name</p>
                    <input type="text" placeholder="Enter project name" />
                  </div>
                  <div>
                    <p>Project Code</p>
                    <input type="text" placeholder="PR-01" />
                  </div>
                </div>
                <div>
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
                    
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProjectForm;
