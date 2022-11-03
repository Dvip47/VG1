import React from "react";
function Footer() {
  return (
    <div
      style={{
        height: "250px",
        width: "100%",
        backgroundColor: "#111138",
        display: "flex",
        marginTop: "40px",
      }}
    >
      <div style={{ marginLeft: "100px", marginTop: "50px" }}>
        {" "}
        <h1 style={{ color: "white", textAlign: "center" }}>
          <i style={{ color: "red" }}>Vishwakarma</i> <i>Group</i>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Complete Forniture's Soluntion For You
        </p>
      </div>
      <div
        style={{
          color: "white",
          marginLeft: "150px",
          marginTop: "100px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "white", textAlign: "center" }}>
          Desined By RoundPay Voice Tech
        </p>
      </div>
      <div style={{ marginLeft: "140px", marginTop: "100px" }}>
        <p style={{ color: "white", textAlign: "center" }}>
          All Copy right Reserve By Vishwakarma Group
        </p>
      </div>
    </div>
  );
}

export default Footer;
