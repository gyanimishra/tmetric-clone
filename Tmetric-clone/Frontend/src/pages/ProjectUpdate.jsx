import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/newprojectform.module.css";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { get_projects1, toggle_status } from "../redux/project/actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const NewProjectForm = () => {
  const ref = useRef([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlebtn = (index) => {
    ref.current[index].scrollIntoView();
  };

  const [formData, setFormData] = useState({});
  const [showSave, setShowSave] = useState(false);

  const checkShowSave = () => {
    if (formData.name || formData.code || formData.notes) {
      setShowSave(true);
    } else {
      setShowSave(false);
    }
  };
  const params = useParams();

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(toggle_status(formData,params.id));
    navigate("/project")
  };

  useEffect(() => {
    dispatch(get_projects1(params.id, setFormData));
  }, [dispatch, params.id]);
  return (
    <div className={styles.main_container_form}>
      <div className={styles.form_top_div}>
        <FiArrowLeft onClick={() => navigate("/project")} fontSize={"30px"} />

        <h1>New Project</h1>
      </div>
      <div className={styles.form_content_div}>
        <div className={styles.form_content_btn_div}>
          <button
            onClick={() => {
              handlebtn(0);
            }}
          >
            General
          </button>
          <button
            onClick={() => {
              handlebtn(1);
            }}
          >
            Billing
          </button>
          <button
            onClick={() => {
              handlebtn(2);
            }}
          >
            Budget
          </button>
          <button
            onClick={() => {
              handlebtn(3);
            }}
          >
            Work types
          </button>
          <button
            onClick={() => {
              handlebtn(4);
            }}
          >
            Team
          </button>
        </div>
        <div className={styles.form_content_data_div}>
          <div
            className={styles.form_content_data_general}
            ref={(el) => (ref.current[0] = el)}
          >
            <h2>
              General <span> Active</span>
            </h2>
          </div>
          <div>
            <form onSubmit={handleForm}>
              <div className={styles.form_content_data_div1}>
                <div>
                  <p>Project name</p>
                  <input
                    className={styles.projectnameInput}
                    type="text"
                    placeholder="Enter project name"
                    required
                    name={"name"}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onKeyUp={checkShowSave}
                    defaultValue={formData.name}
                  />
                </div>
                <div>
                  <p>Project Code</p>
                  <input
                    className={styles.projectprInput}
                    type="text"
                    placeholder="PR-01"
                    name={"code"}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onKeyUp={checkShowSave}
                    required
                    defaultValue={formData.code}
                  />
                </div>
              </div>

              <div className={styles.form_content_data_div2}>
                <div>
                  <p>Client</p>
                  <select>
                    <option value=""> Select Client</option>
                    <option value=""> No client</option>
                  </select>
                </div>
                <div>
                  <p>Project image</p>
                  <input type="file" />
                </div>
              </div>

              <div className={styles.form_content_data_div3}>
                <p>Notes</p>
                <textarea
                  placeholder="Additional information on the project"
                  name={"notes"}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  onKeyUp={checkShowSave}
                  defaultValue={formData.notes}
                ></textarea>
              </div>

              <div
                className={styles.form_content_data_bilinng_div}
                ref={(el) => (ref.current[1] = el)}
              >
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

              <div
                className={styles.form_content_data_bilinng_div}
                ref={(el) => (ref.current[2] = el)}
              >
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

              <div
                className={styles.form_content_data_bilinng_div}
                ref={(el) => (ref.current[3] = el)}
              >
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

              <div
                className={styles.form_content_data_team_div}
                ref={(el) => (ref.current[4] = el)}
              >
                <div>
                  <h2>Team</h2>
                </div>
                <div>
                  <button>+ Add members to project team</button>
                </div>
              </div>

              <div className={styles.form_content_data_end_div}>
                <p>
                  <b>It's a public project.</b> Time can be recorded by every
                  member. All workspace members will see the project in their
                  reports. <b> Add team members </b> to restrict project
                  visibility.
                </p>
              </div>

              {showSave && (
                <div className={styles.form_content_data_save_div}>
                  <p>Press Ctrl+Enter to save changes</p>
                  <div>
                    <button type="submit">Save</button>
                    <button
                      type="button"
                      onClick={() => {
                        navigate("/project");
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
              <div className={styles.empty_div}></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProjectForm;