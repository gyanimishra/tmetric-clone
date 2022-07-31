import React, { useState } from "react";
import style from "../styles/login.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin_post } from "../redux/auth/actions";

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setuser] = useState({});

  const [showErr, setShowErr] = useState(false);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
    setShowErr(false)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin_post(user, navigate, setShowErr));
  };

  return (
    <div className={style.log}>
      <div className={style.loginmain}>
        <div className={style.loginmainimg}>
          <div className={style.signupmaindiv1inputimg}>
            <img
              src="https://id.tmetric.com/images/tmetric_logo_and_text.svg"
              alt=""
            />
          </div>

          <div className={style.signupmaindiv1inputh1}>
            <h1>Log into TMetric</h1>
          </div>
        </div>

        <div style={{ bg: "white" }}>
          <div className={style.signupmaininputs}>
            {/* emai */}
            <form onSubmit={handleSubmit}>
              <div className={style.signupmaininputs1}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="JohnSmith@gmail.com"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* password */}

              <div className={style.signupmaininputs1}>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* button */}
              {showErr && (
                <div style={{marginLeft:'60px',color:"red"}}>
                  <p>Wrong credentials</p>
                </div>
              )}
              <div>
                <button className={style.signupmaininputsbtn} type="submit">
                  Log In
                </button>
              </div>
            </form>
            {/* hr */}

            <div className={style.signupmaininputshr}>
              <hr />

              <span>or</span>

              <hr />
            </div>
          </div>

          <div className={style.signupadsection}>
            <div className={style.signupadsection1}>
              <img src="https://id.tmetric.com/images/google_logo.svg" alt="" />
              <p>Log In with Google</p>
            </div>

            <div className={style.signupadsection1}>
              <img
                src="https://id.tmetric.com/images/microsoft_logo.svg"
                alt=""
              />
              <p>Log In with Google</p>
            </div>
            <div className={style.signupadsection1}>
              <img src="https://id.tmetric.com/images/apple_logo.svg" alt="" />
              <p>Log In with Google</p>
            </div>

            <hr className={style.signupadsechr} />

            <div className={style.signupadsechrunder}>
              <p style={{ color: "blue" }}>Can't Log In?</p>

              <p style={{ color: "blue" }}>Sign Up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
