import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const LoginUser = async (e) => {
    e.preventDefault();
    const { email, pass } = user;
    const res = await fetch("https://vishwagroup.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        pass,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid usernme or password");
    } else {
      localStorage.setItem("token", data?.token);
      localStorage.setItem("login", "true");
      alert(`Login Successfull`);
      navigate("/");
    }
  };

  return (
    <>
      <div className="Auth1">
        <form className="Auth-form1">
          <div className="Auth-form-content1">
            <h3 className="Auth-form-title1">Sign In</h3>

            <div className="form-group mt-3">
              <label className="lable1">Email address</label>
              <input
                type="text"
                className="form-control mt-1 input3"
                placeholder="Enter email"
                name="email"
                onChange={handleInputs}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label className="lable1">Password</label>
              <input
                type="password"
                className="form-control mt-1 input3"
                placeholder="Enter password"
                name="pass"
                onChange={handleInputs}
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="button1" onClick={LoginUser}>
                Submit
              </button>
            </div>
            <p
              className="forgot-password text-right mt-2"
              style={{ textDecoration: "underline", color: "#3d3d3d" }}
            >
              Forgot password?
              {/* <a href="#">password?</a> */}
            </p>
            <p
              className="forgot-password text-right mt-2"
              style={{ color: "#3d3d3d" }}
            >
              New User
              <Link to="/registation">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
