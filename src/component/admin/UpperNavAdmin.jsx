import React from "react";

import { NavLink, useNavigate } from "react-router-dom";
function UpperNavAdmin() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("login");
    const reload = window.location.reload("/");
    navigate(reload);
  };
  return (
    <>
      <div
        style={{ backgroundColor: "#dedee0", height: "45px", fontSize: "18px" }}
      >
        &nbsp;&nbsp;
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            color: "blue",
          }}
        >
          Home
        </NavLink>
        &nbsp;&nbsp;
        <NavLink
          to="/addProduct"
          style={{
            textDecoration: "none",
            color: "red",
          }}
        >
          Add Product
        </NavLink>
        &nbsp;&nbsp;
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            color: "red",
            paddingLeft: "1100px",
          }}
          onClick={logout}
        >
          Log Out
        </NavLink>
      </div>
    </>
  );
}

export default UpperNavAdmin;
