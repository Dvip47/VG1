import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  function filter() {
    return "abc";
  }
  return (
    <>
      <div style={{ height: "45px" }}>
        {" "}
        <ol>
          <NavLink
            to="/bed"
            style={{
              marginLeft: "160px",
              textDecoration: "none",
              color: "#303030",
            }}
          >
            Bed
          </NavLink>

          <NavLink
            to="/sofa"
            style={{
              marginLeft: "155px",
              textDecoration: "none",
              color: "#303030",
            }}
          >
            Sofa
          </NavLink>
          <NavLink
            to="/door"
            style={{
              marginLeft: "155px",
              textDecoration: "none",
              color: "#303030",
            }}
          >
            Door
          </NavLink>
          <NavLink
            to="/chair"
            style={{
              marginLeft: "155px",
              textDecoration: "none",
              color: "#303030",
            }}
          >
            Chair
          </NavLink>
          <NavLink
            to="/office"
            style={{
              marginLeft: "155px",
              textDecoration: "none",
              color: "#303030",
            }}
          >
            office Forniture
          </NavLink>
          {/* <input
            type="search"
            id="search"
            name="search"
            style={{
              height: "25px",
              width: "95px",
              marginLeft: "30px",
              backgroundColor: "skyblue",
            }}
          />

          <button
            type="Search"
            onClick={filter}
            style={{ height: "35px", width: "100px" }}
          >
            {" "}
            Search
          </button> */}
        </ol>
      </div>
    </>
  );
};

export default Navbar;
