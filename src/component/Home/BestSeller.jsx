import React from "react";
import Product from "./Product";
import "./bestseller.css";
function BestSeller() {
  return (
    <>
      {" "}
      <div>
        <h1 style={{ textAlign: "center", fontFamily: "Cursive" }}>
          Our <i style={{ color: "red" }}>Best</i> Sellers
          <h3
            style={{ textAlign: "center", color: "yellow", marginTop: "-20px" }}
          >
            ---------------
          </h3>
        </h1>
        <p
          style={{
            color: "#5b7bf0",
            textAlign: "center",
            marginTop: "-50px",
            fontFamily: "Cursive",
          }}
        >
          “A Diamond For You For Forever.”
        </p>
      </div>
      <div>
        <Product />
      </div>
    </>
  );
}

export default BestSeller;
