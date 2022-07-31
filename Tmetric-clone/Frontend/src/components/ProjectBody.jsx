import React, { useEffect, useState } from "react";
import styles from "../styles/projectbody.module.css";
import { IoIosSearch } from "react-icons/io";
import { TiArrowUp } from "react-icons/ti";
import { TiArrowUnsorted } from "react-icons/ti";

import { useNavigate, Navigate } from "react-router-dom";
import Project from "./Project";
import { get_projects, get_projects2 } from "../redux/project/actions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./Loader";

const ProjectBody = () => {
  const [options, setOptions] = useState(false);

  const navigate = useNavigate();
  
  const {
    data: arr,
    isLoading
  } = useSelector((state) => state.project);
  const auth = JSON.parse(localStorage.getItem("auth"))

  const dispatch = useDispatch();

  const [text, setText] = useState("");

  let newArray = arr?.filter((el) => {
    if (el.name.toLowerCase().includes(text.toLowerCase())) {
      return el;
    }
    return false;
  });

  const handleChnage = (e) => {
    setText(e.target.value);
    newArray = arr?.filter((el) => {
      if (el.name.toLowerCase().includes(text.toLowerCase())) {
        return el;
      }
      return false;
    });
  };
  const profileId = JSON.parse(localStorage.getItem("userId"))

  useEffect(() => {
    dispatch(get_projects(profileId));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }
  if (!auth && !profileId) {
    return <Navigate to="/login" />;
  }
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
            <select
              onChange={(e) => {
                dispatch(get_projects2(e.target.value));
              }}
            >
              <option value={""}>Status: Active and Done</option>
              <option value={""}>Active and Done </option>
              <option value={false}>Active</option>
              <option value={true}>Done</option>
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
          {newArray?.map((el, index) => (
            <Project
              key={index}
              {...el}
              options={options}
              setOptions={setOptions}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBody;
