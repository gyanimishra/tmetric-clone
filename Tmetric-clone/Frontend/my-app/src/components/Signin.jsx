import React from "react";
import styled from "styled-components";
import styles from "./Signin.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
//import { useDispatch } from "react-redux";
//import { loginaction } from "../redux/action";
const Container = styled.div`
  height: 370px;
  width: 400px;
  border: 1px solid gray;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-top: 20px;
`;
function Signin() {
  //const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [formData, setFormData] = React.useState({
    status: false,
  });
  const handleChange = (e) => {
    const type = e.target.name;
    if (type === "email") {
      const inputName = e.target.value;
      setemail(e.target.value);
      setFormData({ ...formData, [inputName]: e.target.value });
    } else if (type === "password") {
      const inputName = e.target.value;
      setpassword(e.target.value);
      setFormData({ ...formData, [inputName]: e.target.value });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const postvalue = {
      email: email,
      password: password,
    };
    setemail("");
    setpassword("");
    const data = JSON.parse(localStorage.getItem("registeration")) || [];
    if (data.length === 0) {
      alert("Please Register");
      navigate("/signup");
    } else {
      var flag = false;
      for (var i = 0; i < data.length; i++) {
        if (
          postvalue.email === data[i].email &&
          postvalue.password === data[i].password
        ) {
          alert("Login success");
          localStorage.setItem("logindata", JSON.stringify(postvalue));
          //dispatch(loginaction());
          navigate("/");
          flag = true;
          break;
        }
      }
      if (flag === false) {
        alert("Login failure");
      }
    }
  };
  return (
    <>
      <Container>
        <img
          src="https://id.tmetric.com/images/tmetric_logo_and_text.svg"
          alt=""
        />
        <h5 style={{ marginTop: "10px" }}>Log into TMetric</h5>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.div}>
            <p>Email </p>
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.div}>
            <p>Password:</p>
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <button
              type="submit"
              style={{
                background: "#3070f0",

                width: "100%",
                height: "28px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Log In
            </button>
            <p style={{ marginTop: "-3px" }}>or</p>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "15px",
                  height: "25px",
                  border: "1px solid black",
                }}
              >
                <img
                  src="https://id.tmetric.com/images/google_logo.svg"
                  alt=""
                />
                <p style={{ cursor: "pointer", marginTop: "1px" }}>
                  Sign Up with Google
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "15px",
                  height: "25px",
                  border: "1px solid black",
                  marginTop: "10px",
                }}
              >
                <img
                  src="https://id.tmetric.com/images/microsoft_logo.svg"
                  alt=""
                />
                <p style={{ cursor: "pointer", marginTop: "1px" }}>
                  Sign Up with Microsoft
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "15px",
                  border: "1px solid black",
                  height: "25px",
                  marginTop: "10px",
                }}
              >
                <img
                  src="https://id.tmetric.com/images/apple_logo.svg"
                  alt=""
                />
                <p style={{ cursor: "pointer", marginTop: "1px" }}>
                  Sign Up with Apple
                </p>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
}

export default Signin;
