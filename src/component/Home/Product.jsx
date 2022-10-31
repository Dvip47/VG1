// import { color } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import "./bestseller.css";
import { Bestproduct } from "./ListProduct";
import { useContext } from "react";
import { DataContext } from "../../context/DataState";
function Product() {
  const { setOrder } = useContext(DataContext);
  return (
    <>
      <div className="main-container">
        {" "}
        {Bestproduct?.map((data, id) => {
          return (
            <NavLink
              to=""
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
                        {data?.description}
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
                        class="btn-hover color-9"
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
        })}{" "}
      </div>
    </>
  );
}

export default Product;
