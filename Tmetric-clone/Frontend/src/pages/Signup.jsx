import React from "react";
import style from "../styles/SignUp.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup_post } from "../redux/auth/actions";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [char, setChar] = useState(false);
  const [upper, setUpper] = useState(false);
  const [lower, setLower] = useState(false);
  const [SpChar, setSpChar] = useState(false);
  const [Num, setNum] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [cont, setCont] = useState(false);

  const checkUpper = (el) => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < el.length; i++) {
      for (let j = 0; j < str.length; j++) {
        if (el[i] === str[j]) {
          return true;
        }
      }
    }
    return false;
  };
  const checkLower = (el) => {
    let str = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < el.length; i++) {
      for (let j = 0; j < str.length; j++) {
        if (el[i] === str[j]) {
          return true;
        }
      }
    }
    return false;
  };
  const checkSpChar = (el) => {
    let str = "!@#$%^&*";
    for (let i = 0; i < el.length; i++) {
      for (let j = 0; j < str.length; j++) {
        if (el[i] === str[j]) {
          return true;
        }
      }
    }
    return false;
  };
  const checkNum = (el) => {
    let str = "1234567890";
    for (let i = 0; i < el.length; i++) {
      for (let j = 0; j < str.length; j++) {
        if (el[i] === str[j]) {
          return true;
        }
      }
    }
    return false;
  };
  // eslint-disable-next-line no-unused-vars
  var count;
  const handlePassword = (val) => {
    if (val.length === 0) {
      setChar(false);
      setUpper(false);
      setLower(false);
      setSpChar(false);
      setNum(false);
    }
    count = 0;
    // setPassword(val);
    if (val.length > 7) {
      count++;
      setChar(true);
    } else {
      setChar(false);
    }
    if (checkUpper(val)) {
      count++;
      setUpper(true);
    } else {
      setUpper(false);
    }
    if (checkLower(val)) {
      count++;
      setLower(true);
    } else {
      setLower(false);
    }
    if (checkSpChar(val)) {
      count++;
      setSpChar(true);
    } else {
      setSpChar(false);
    }
    if (checkNum(val)) {
      count++;
      setNum(true);
    } else {
      setNum(false);
    }
    if (char && upper && lower && SpChar && Num) {
      setCont(true);
    } else {
      setCont(false);
    }
  };

  const [user, setuser] = useState({});

  const [showErr, setShowErr] = useState(false);
  const handlechange = (e) => {
    let { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
    setShowErr(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup_post(user, navigate, setShowErr));
  };

  return (
    <div className={style.signup}>
      <div className={style.signupmain}>
        <div className={style.signupmaindiv1}>
          <div className={style.signupmaindiv1input}>
            <div className={style.signupmaindiv1inputimg}>
              <img
                src="https://id.tmetric.com/images/tmetric_logo_and_text.svg"
                alt=""
              />
            </div>

            <div className={style.signupmaindiv1inputh1}>
              <h1>Create Your Account</h1>
            </div>

            <div className={style.signupmaininputs}>
              <form onSubmit={handleSubmit}>
                {/* name */}
                <div className={style.signupmaininputs1}>
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    name="name"
                    onChange={handlechange}
                    required
                  />
                </div>
                {/* emai */}

                <div className={style.signupmaininputs1}>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="JohnSmith@gmail.com"
                    name="email"
                    onChange={handlechange}
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
                    onChange={handlechange}
                    onKeyUp={(e) => handlePassword(e.target.value)}
                    required
                  />
                  <div className={style.passRow1}>
                    <p className={char ? style.check : undefined}>
                      <i className="fas fa-check"></i>8-14 characters
                    </p>
                    <p className={upper ? style.check : undefined}>
                      <i className="fas fa-check"></i>1 uppercase letter
                    </p>
                    <p className={lower ? style.check : undefined}>
                      <i className="fas fa-check"></i>1 lowercase letter
                    </p>
                  </div>
                  <div className={style.passRow2}>
                    <p className={SpChar ? style.check : undefined}>
                      <i className="fas fa-check"></i>One special character
                    </p>
                    <p className={Num ? style.check : undefined}>
                      <i className="fas fa-check"></i>1 number
                    </p>
                  </div>
                </div>

                {showErr && (
                  <div style={{ marginLeft: "25px", color: "red" }}>
                    <p>User already exist</p>
                  </div>
                )}
                {/* button */}

                <div>
                  <button type="submit" className={style.signupmaininputsbtn}>
                    Sign Up
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

            {/* ad section /////////////// */}

            <div className={style.signupadsection}>
              <div className={style.signupadsection1}>
                <img
                  src="https://id.tmetric.com/images/google_logo.svg"
                  alt=""
                />
                <p>Sign Up with Google</p>
              </div>

              <div className={style.signupadsection1}>
                <img
                  src="https://id.tmetric.com/images/microsoft_logo.svg"
                  alt=""
                />
                <p>Sign Up with Google</p>
              </div>
              <div className={style.signupadsection1}>
                <img
                  src="https://id.tmetric.com/images/apple_logo.svg"
                  alt=""
                />
                <p>Sign Up with Google</p>
              </div>

              <hr className={style.signupadsechr} />

              <div className={style.signupadsechrunder}>
                <p>Alraedy Have a account?</p>
                <Link to="/login">
                  <p style={{ color: "blue" }}>Log In</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* img section ////////////////////////////////////////////////////////// */}
        <div className={style.signupmaindiv2}>
          <img
            src="https://id.tmetric.com/images/side_image_register.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
