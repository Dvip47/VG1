import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./Reg.css";
function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    pass: "",
    cpass: "",
  });
  // console.log(user);
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      // console.log(prev);
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, mobile, pass, cpass } = user;
    const res = await fetch("/registation", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        mobile,
        pass,
        cpass,
      }),
    });
    const data = await res.json();
    if (res.status !== 201 || !data) {
      console.log("Registation Not success, Try again");
      alert("Registation Not success, Try again");
    } else {
      console.log("Registation Successfull");
      alert("Registation Successfull");
      navigate("/login");
    }
  };
  return (
    <>
      <div className="abc3">
        <form>
          <div className="container3">
            <h1 className=" Auth-form-title1">Register</h1>
            <p>Please fill in this form to create an account.</p>
            {/* <hr> */}
            <label for="name">
              <b>Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              name="name"
              id="name"
              className="input3"
              onChange={handleInputs}
              required
            />{" "}
            <label for="contact">
              <b>Mobile</b>
            </label>
            <input
              type="Number"
              placeholder="Enter Mobile Number"
              name="mobile"
              id=""
              className="input3"
              maxLength={10}
              required
              onChange={handleInputs}
            />
            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id=""
              className="input3"
              required
              onChange={handleInputs}
            />
            <label for="password">
              <b>Password</b>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              name="pass"
              id=""
              className="input3"
              required
              onChange={handleInputs}
            />
            <label for="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="cpass"
              id=""
              className="input3"
              required
              onChange={handleInputs}
            />
            {/* <hr> */}
            {/* <p>
              By creating an account you agree to our{" "}
              <a href="#">Terms & Privacy</a>.
            </p> */}
            <button type="submit" className="registerbtn3" onClick={PostData}>
              Register
            </button>
          </div>

          <div className="container signin3">
            <p>
              Already have an account? <NavLink to="/login">Sign in</NavLink>.
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
