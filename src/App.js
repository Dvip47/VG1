// import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Bed from "./component/Bed/Bed";
import Chair from "./component/Chair/Chair";
import Door from "./component/Door/Door";
import Banner from "./component/Home/Banner";
import Footer from "./component/Home/Footer";
import Header from "./component/Home/Header";
import NavScrollExample from "./component/Home/Navbar";
import UpperSocial from "./component/Home/UpperSocial";
import UpperNavAdmin from "./component/admin/UpperNavAdmin";
import Sofa from "./component/sofa/Sofa";
import Index from "./component/Home/Index/Index";
import Login from "./component/Credentioal/Login";
import Register from "./component/Credentioal/Register";
import Order from "./component/Credentioal/Order";
import Office from "./component/Office/Office";
import Error from "./component/Home/Error";
import AddProduct from "./component/Product/AddProduct";
import MainAdmin from "./component/admin/MainAdmin";
import jwt from "jwt-decode";
function App() {
  return (
    <div style={{ backgroundColor: "#d4d2d2", height: "100%", width: "100%" }}>
      {localStorage.getItem("login") &&
      jwt(localStorage.getItem("token"))?.data?.role == "admin" ? (
        <>
          <UpperNavAdmin />
          <Routes>
            <Route path="/" element={<MainAdmin />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <>
          <UpperSocial />
          <Header />
          <NavScrollExample />
          <Banner />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registation" element={<Register />} />
            <Route path="/" element={<Index />} />
            <Route path="/bed" element={<Bed />} />
            <Route path="/chair" element={<Chair />} />
            <Route path="/door" element={<Door />} />
            <Route path="/sofa" element={<Sofa />} />
            <Route path="/order" element={<Order />} />
            <Route path="/office" element={<Office />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
