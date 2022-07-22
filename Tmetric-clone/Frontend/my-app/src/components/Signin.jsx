import React from "react";
import styled from "styled-components";
import styles from "./Signin.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
//import { useDispatch } from "react-redux";
//import { loginaction } from "../redux/action";
const Container = styled.div`
  height: 500px;
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
        <div style={{ backgroundColor: "ButtonHighlight", marginTop: "-20px" }}>
          <img
            style={{ marginTop: "10px", marginLeft: "100px" }}
            src="https://id.tmetric.com/images/tmetric_logo_and_text.svg"
            alt=""
          />
          <h5 style={{ marginTop: "10px", marginLeft: "130px" }}>
            Log into TMetric
          </h5>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.div}>
            <p style={{ marginLeft: "30px", marginTop: "25px" }}>Email </p>
            <input
              style={{
                height: "20px",
                width: "250px",
                borderRadius: "5px",
                border: "1.5px solid blue",
                marginLeft: "31px",
              }}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.div}>
            <p style={{ marginLeft: "30px", marginTop: "-10px" }}>Password</p>
            <input
              style={{
                height: "20px",
                width: "250px",
                borderRadius: "5px",
                border: "1.5px solid blue",
                marginLeft: "31px",
                marginTop: "-10px",
              }}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginTop: "-4px" }}>
            <button
              type="submit"
              style={{
                background: "#3070f0",

                width: "72%",
                height: "24px",
                borderRadius: "10px",
                cursor: "pointer",
                marginLeft: "30px",
              }}
            >
              Log In
            </button>
            <p style={{ marginLeft: "150px" }}>or</p>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "15px",
                  height: "25px",
                  width: "70%",
                  marginLeft: "35px",
                  borderRadius: "5px",
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
                  width: "70%",
                  marginLeft: "35px",
                  border: "1px solid black",
                  borderRadius: "5px",
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
                  marginLeft: "35px",
                  gap: "15px",
                  border: "1px solid black",
                  borderRadius: "5px",
                  height: "25px",
                  width: "70%",
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
              <hr style={{ marginTop: "10px" }} />
              <div style={{ display: "flex", gap: "210px" }}>
                <Link to="">Can't Log In?</Link>

                <Link to="SignUp"> Sign Up</Link>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
}

export default Signin;
