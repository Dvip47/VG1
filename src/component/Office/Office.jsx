import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../context/DataState";
import { ItemList } from "./ItemList";

function Office() {
  const { setOrder } = useContext(DataContext);
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", fontFamily: "Cursive" }}>
          Shop The<i style={{ color: "red" }}> Collection For</i> Your Bussiness
          <h3
            style={{ textAlign: "center", color: "yellow", marginTop: "-20px" }}
          >
            ------------
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
      <div>
        <tr>
          <td style={{ paddingLeft: "150px" }}>Product</td>
          <td style={{ paddingLeft: "150px" }}>Name</td>
          <td style={{ paddingLeft: "150px" }}>Price</td>
          <td style={{ paddingLeft: "150px" }}>Discount</td>
        </tr>
        <div>
          {ItemList?.map((data, id) => {
            return (
              <div onClick={() => setOrder(data)}>
                <td>
                  <div className="">
                    <tr key={id}>
                      <td className="zoom1" style={{ paddingLeft: "90px" }}>
                        <img
                          src={data.src}
                          alt=""
                          height="100px"
                          width="100px"
                          style={{ marginTop: "-30px", marginBottom: "-40px" }}
                        />
                      </td>
                      <td
                        style={{
                          fontFamily: "Alkalami",
                          color: "#3a3a3b",
                          fontSize: "28px",
                          paddingLeft: "90px",
                        }}
                      >
                        {data.title}
                        <td
                          style={{
                            fontSize: "14px",
                            fontFamily: "sans-serif",
                            paddingLeft: "90px",
                          }}
                        >
                          {data.description}
                        </td>
                      </td>
                      <td
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: "black",
                          paddingLeft: "90px",
                        }}
                      >
                        {data.Price}
                      </td>
                      <td
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "30px",
                          paddingLeft: "130px",
                        }}
                      >
                        {data.discount}%<i style={{ fontSize: "15px" }}>OFF</i>
                      </td>
                      <NavLink to="/order" style={{ paddingLeft: "150px" }}>
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Office;
