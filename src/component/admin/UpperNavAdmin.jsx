import React from "react";

import { NavLink } from "react-router-dom";
function UpperNavAdmin() {
  return (
    <>
      <div
        style={{ backgroundColor: "#dedee0", height: "45px", fontSize: "18px" }}
      >
        <div
          style={{ color: "#828181", fontWeight: "bold", lineHeight: "-10px" }}
        >
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "#424242",
              marginRight: "10px",
            }}
          >
            Welcome to Vishwakarma Group Admin Pannel
          </NavLink>
          &nbsp;
          <NavLink
            to="/addProduct"
            style={{
              textDecoration: "none",
              color: "red",
              marginRight: "10px",
            }}
          >
            Add Product
          </NavLink>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "red",
              marginLeft: "500px",
              marginRight: "10px",
            }}
          >
            Log Out
          </NavLink>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default UpperNavAdmin;
