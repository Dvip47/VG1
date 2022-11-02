import React from "react";

import { NavLink } from "react-router-dom";
function UpperSocial() {
  return (
    <>
      <div
        style={{ backgroundColor: "#dedee0", height: "45px", fontSize: "18px" }}
      >
        <div
          style={{ color: "#828181", fontWeight: "bold", lineHeight: "-10px" }}
        >
          Welcome to Vishwakarma Group &nbsp;
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "red",
              marginLeft: "750px",
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

export default UpperSocial;
