import React from "react";
//import {useNavigate} from "react-router-dom"
const Signup = ({ submitForm }) => {
 // const navigate = useNavigate()
const [name, setname] = React.useState("");

const [email, setemail] = React.useState("");
const [password, setpassword] = React.useState("");
const [formData, setFormData] = React.useState({
    status: false,
  });
const handleChange = (e) => {
  const type = e.target.name;
  if (type === "name") {
    const inputName = e.target.value;
    setname(e.target.value);
    setFormData({ ...formData, [inputName]: e.target.value });
  
  } else if (type === "email") {
    const inputName = e.target.value;
    setemail(e.target.value);
    setFormData({ ...formData, [inputName]: e.target.value });
  } else if (type === "password") {
    const inputName = e.target.value;
    setpassword(e.target.value);
    setFormData({ ...formData, [inputName]: e.target.value });
  } 
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const postvalue = {
    name: name,
    email: email,
  
    password: password,
  };
  const data = JSON.parse(localStorage.getItem("registeration")) || []
  data.push(postvalue);
  localStorage.setItem("registeration", JSON.stringify(data));
  setname("")
  setemail("")
 
  setpassword("")
  alert("Registeration Success!");
 // navigate("/signin")
};

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: "10px" }}>
          <img
            src="https://id.tmetric.com/images/tmetric_logo_and_text.svg"
            alt=""
          />
          <h5 style={{ marginTop: "10px" }}>Create Your Account</h5>

          {/* register */}
          <div>
            <form
              style={{
                boxShadow:
                  "box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
              }}
              onSubmit={handleFormSubmit}
            >
              <div style={{ marginTop: "10px" }}>
                <p
                  style={{
                    cursor: "pointer",
                    marginBottom: "2px",
                    marginLeft: "-80%",
                  }}
                >
                  {" "}
                  Name{" "}
                </p>

                <input
                  style={{
                    height: "15px",
                    width: "250px",
                    borderRadius: "5px",
                  }}
                  type="name"
                  name="name"
                  value={name}
                  placeholder="John Smith"
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={{ marginBottom: "2px" }}>
                <p
                  style={{
                    cursor: "pointer",
                    marginBottom: "2px",
                    marginLeft: "-80%",
                  }}
                >
                  Email{" "}
                </p>
                <input
                  style={{
                    height: "15px",
                    width: "250px",
                    borderRadius: "5px",
                  }}
                  type="email"
                  name="email"
                  placeholder="johnsmith@mail.com"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <p
                  style={{
                    cursor: "pointer",
                    marginBottom: "5px",
                    marginLeft: "-70%",
                  }}
                >
                  Password
                </p>
                <input
                  style={{
                    height: "15px",
                    width: "250px",
                    borderRadius: "5px",
                  }}
                  type="password"
                  name="password"
                  placeholder="Enter your password"
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
                  Sign Up
                </button>
              </div>
            </form>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "2px",
              }}
            >
              <input type="checkbox" name="checkbox" />
              <p style={{ cursor: "pointer" }}>I accept Terms of Service</p>
            </div>
          </div>
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
              <img src="https://id.tmetric.com/images/google_logo.svg" alt="" />
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
              <img src="https://id.tmetric.com/images/apple_logo.svg" alt="" />
              <p style={{ cursor: "pointer", marginTop: "1px" }}>
                Sign Up with Apple
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            style={{ height: "100%", width: "100" }}
            src="https://id.tmetric.com/images/side_image_register.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
