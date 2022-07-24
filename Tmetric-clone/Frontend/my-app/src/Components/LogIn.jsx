import React, { useState } from "react";
import style from "./LogIn.module.css";
import {useNavigate} from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  const [user,setuser]= useState({})

  const handleChange = (e) => {
    let {name, value} = e.target
    setuser( {
        ...user,
        [name] : value
    })
}

const handleSubmit = () => {
  let payload = JSON.stringify(user)
  console.log(payload)
  fetch("https://tmetric-backend.herokuapp.com/user/signin", {
    headers:{
      "content-type":"application/json"
    },
      method : 'POST',
      body : payload
  })
  .then((res) => res.json())
  .then((res) => {
      console.log(res)
      if(res._id){
          localStorage.setItem("userid", JSON.stringify(res._id))
          localStorage.setItem("username", JSON.stringify(res.name))
          navigate("/project")
      }
      else{
          console.log(res.message)
      }
  })
  .catch((err) => console.log(err))
}


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

        <div style={{bg:"white"}}>
          <div className={style.signupmaininputs}>
            {/* emai */}

            <div className={style.signupmaininputs1}  >
              <label>Email</label>
              <input type="text" placeholder="JohnSmith@gmail.com" name='email' onChange={handleChange}/>
            </div>

            {/* password */}

            <div className={style.signupmaininputs1}>
              <label>Password</label>
              <input type="text" placeholder="Enter your Password"  name="password" onChange={handleChange} />
            </div>

            {/* button */}

            <div>
              <button className={style.signupmaininputsbtn}  type='submit' onClick={handleSubmit}  >Log In</button>
            </div>

            {/* hr */}

            <div className={style.signupmaininputshr}>
              <hr />

              <span>or</span>

              <hr />
            </div>
          </div>





          <div className={style.signupadsection} >

<div className={style.signupadsection1} >

    <img src="https://id.tmetric.com/images/google_logo.svg" alt="" />
    <p>Log In with Google</p>

</div>



<div  className={style.signupadsection1}>
<img src="https://id.tmetric.com/images/microsoft_logo.svg" alt="" />
    <p>Log In with Google</p>
</div>
<div className={style.signupadsection1}>
<img src="https://id.tmetric.com/images/apple_logo.svg" alt="" />
    <p>Log In with Google</p>
</div>

<hr className={style.signupadsechr} />


<div className={style.signupadsechrunder}>
    <p  style={{color:"blue"}}>Can't Log In?</p>
   
    <p  style={{color:"blue"}}>Sign Up</p>
</div>

</div>


        </div>
      </div>
    </div>
  );
};

export default LogIn;
