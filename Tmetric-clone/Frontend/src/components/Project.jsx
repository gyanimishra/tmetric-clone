import styles from "../styles/projectbody.module.css";
import { RiFolderOpenFill } from "react-icons/ri";
import { MdDone } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { delete_project, toggle_status } from "../redux/project/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Project = (el) => {
  const { index, options, setOptions, _id } = el;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className={styles.project_div}>
      <div className={styles.project_div_first}>
        <input type="checkbox" />
        <div className={styles.folder_logo}>
          <RiFolderOpenFill />
        </div>
        <p>{el.name}</p>

        {el.status && <span className={styles.project_div_status}>done</span>}
      </div>
      <div>
        <p>{el.code}</p>
      </div>
      <div className={styles.project_div_noteam}>
        <p>No team</p>
      </div>
      <div className={styles.more_options_div_last}>
        <FiMoreHorizontal
          className={styles.dotdotdot}
          fontSize={"18px"}
          onClick={() => {
            setOptions((prev) => {
              if (prev === index) {
                return false;
              } else {
                return index;
              }
            });
          }}
        />
        {index === options && (
          <div className={styles.other_btn}>
            <div>
              <button
                onClick={() => {
                  navigate(`/project/${_id}`);
                }}
              >
                Edit
              </button>
            </div>

            <hr />
            <div>
              <span>Status</span>
              <button
                onClick={() => {
                  dispatch(toggle_status({status:false}, el._id));
                }}
                disabled={!el.status}
              >
                {!el.status ? <MdDone /> : ""} Active
              </button>
              <button
                onClick={() => {
                  dispatch(toggle_status({status:true}, el._id));
                }}
                disabled={el.status}
              >
                
                {el.status ? <MdDone /> : ""}Done
              </button>
              <button>Archived</button>
            </div>

            <hr />
            <div>
              <button
                onClick={() => {
                  dispatch(delete_project(_id));
                  setOptions(false);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
