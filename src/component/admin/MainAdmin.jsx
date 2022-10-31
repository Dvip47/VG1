import React from "react";
import DashBoard from "./DashBoard";
import ProductDetails from "./ProductDetails";
import User from "./User";
function MainAdmin() {
  return (
    <>
      <h1 style={{ textAlign: "center", fontFamily: "Cursive" }}>
        Welcome<i style={{ color: "red" }}> To Admin</i> Pannel
      </h1>
      <div style={{ display: "flex" }}>
        <User />
        <ProductDetails />
      </div>
      <DashBoard />
    </>
  );
}

export default MainAdmin;
