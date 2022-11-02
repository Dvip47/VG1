import React from "react";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FmdGoodIcon from "@mui/icons-material/FmdGood";
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
            to="/login"
            style={{
              textDecoration: "none",
              color: "red",
              marginLeft: "550px",
              marginRight: "10px",
            }}
          >
            Log In
          </NavLink>
          <NavLink
            to="/registation"
            style={{
              textDecoration: "none",
              color: "red",
              // marginLeft: "750px",
              // marginRight: "10px",
            }}
          >
            Register
          </NavLink>{" "}
        </div>
        <div></div>
      </div>
    </>
  );
}

export default UpperSocial;
