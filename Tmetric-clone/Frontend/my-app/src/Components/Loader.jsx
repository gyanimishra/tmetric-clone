import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import styles from "../styles/projectbody.module.css";

const Loader = () => {
  return (
    <div className={styles.loader} >
      <div class="d-flex justify-content-center" style={{width:"5rem",height:"5rem"}}>
        <div class="spinner-border" role="status" style={{width:"5rem",height:"5rem"}}>
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;