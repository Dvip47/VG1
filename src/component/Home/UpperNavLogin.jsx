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
        {/* <div
          style={{ color: "#828181", fontWeight: "bold", lineHeight: "-10px" }}
        >
          Welcome to Vishwakarma Group &nbsp;
          <i style={{ color: "red" }}>
            {" "}
            <NavLink
              to="/registation"
              style={{ textDecoration: "none", color: "red" }}
            >
              Register
            </NavLink>
          </i>{" "}
          OR &nbsp;
          <i style={{ color: "red" }}>
            <NavLink to="/" style={{ textDecoration: "none", color: "red" }}>
              Login{" "}
            </NavLink>
          </i>
          <i>
            <a href="">
              <FacebookIcon
                style={{
                  marginLeft: "750px",
                  marginRight: "10px",
                }}
              />
            </a>
            <a href="">
              <FmdGoodIcon style={{ marginRight: "10px" }} />
            </a>
            <a href="">
              <InstagramIcon style={{ marginRight: "10px" }} />
            </a>
            <a href="">
              <WhatsAppIcon />
            </a>
          </i>
        </div> */}
        <div></div>
      </div>
    </>
  );
}

export default UpperSocial;
