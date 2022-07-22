import React from "react";
import style from "./NewSignup.module.css";
const NewSignup = () => {
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
              {/* name */}
              <div className={style.signupmaininputs1}>
                <label>Name</label>
                <input type="text" placeholder="John Smith" />
              </div>
              {/* emai */}

              <div className={style.signupmaininputs1}>
                <label>Email</label>
                <input type="text" placeholder="JohnSmith@gmail.com" />
              </div>

              {/* password */}

              <div className={style.signupmaininputs1}>
                <label>Password</label>
                <input type="text" placeholder="Enter your Password" />
              </div>

              {/* button */}

              <div>
                <button className={style.signupmaininputsbtn}>Sign Up</button>
              </div>

              {/* hr */}

              <div className={style.signupmaininputshr}>
                <hr />

                <span>or</span>

                <hr />
              </div>
            </div>



            {/* ad section /////////////// */}


            <div className={style.signupadsection} >



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

export default NewSignup;
