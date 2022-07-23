import React, { useState } from "react";
import styles from "../styles/projectbody.module.css";
import { RiFolderOpenFill } from "react-icons/ri";
import { FiMoreHorizontal } from "react-icons/fi";
const Project = (el) => {
    const {index, options, setOptions}=el
    
//   const [options, setOptions] = useState(false);
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
            setOptions(prev=>{
                if(prev===index){
                    return false
                }else{
                    return index
                }
            });
          }}
        />
        {index===options && (
          <div className={styles.other_btn}>
            <button>Show</button>
            <button>Show</button>
            <button>Show</button>
            <button>Show</button>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
