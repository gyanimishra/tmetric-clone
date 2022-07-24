import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import styles from "../styles/projectbody.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div
        className="d-flex justify-content-center"
        style={{ width: "5rem", height: "5rem" }}
      >
        <div
          className="spinner-border"
          role="status"
          style={{ width: "5rem", height: "5rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
