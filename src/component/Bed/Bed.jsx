import React from "react";
import { NavLink } from "react-router-dom";
import { BedList } from "./BedList";
import { useContext } from "react";
import { DataContext } from "../../context/DataState";
import { useState } from "react";
function Bed() {
  const { setOrder } = useContext(DataContext);
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center", fontFamily: "Cursive" }}>
          Our <i style={{ color: "red" }}>Best</i> Beds
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
          “Take One Diamond For Ownself For Forever.”
        </p>
      </div>
      <div className="main-container">
        {" "}
        {BedList?.map((data, id, string) => {
          return (
            <NavLink
              to="/order"
              style={{ textDecoration: "none" }}
              onClick={() => setOrder(data)}
            >
              <td>
                <div className="container">
                  <tr key={id}>
                    <tr className="zoom">
                      <img
                        src={data.src}
                        alt=""
                        height={"100%"}
                        width={"100%"}
                      />
                    </tr>
                    <tr
                      style={{
                        fontFamily: "Alkalami",
                        color: "#3a3a3b",

                        fontSize: "28px",
                      }}
                    >
                      {data.title}
                      <tr
                        style={{ fontSize: "14px", fontFamily: "sans-serif" }}
                      >
                        {data.description}
                      </tr>
                    </tr>
                    <tr
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      {data.Price}
                    </tr>
                    <tr
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      {data.discount} %OFF
                    </tr>
                    <NavLink to="/order">
                      <button
                        className="btn-hover color-9"
                        style={{
                          margin: "10px",
                          borderRadius: "10px",
                          width: "120px",
                          height: "50px",
                        }}
                      >
                        Buy Now
                      </button>
                    </NavLink>
                  </tr>
                </div>
              </td>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Bed;
