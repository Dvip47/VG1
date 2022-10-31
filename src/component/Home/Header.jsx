import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <center>
        <div>
          {" "}
          <h1>
            <Link to="/" style={{ textDecoration: "none" }}>
              {" "}
              <i style={{ color: "red", textDecoration: "none" }}>
                Vishwakarma
              </i>
              <i>Group</i>
            </Link>
          </h1>
          <span style={{ color: "#303030" }}>
            Complete Forniture's Soluntion For You
          </span>
        </div>
      </center>
    </>
  );
}

export default Header;
