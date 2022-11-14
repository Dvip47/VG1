import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../context/DataState";
function Sofa() {
  const { setOrder } = useContext(DataContext);
  const [sofaList, setSofaList] = useState([]);
  const CallSofaList = async () => {
    try {
      const res = await fetch("https://vishwagroup.herokuapp.com/sofa", {});
      const data = await res.json();
      if (res.status === 200) {
        setSofaList(data?.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    CallSofaList();
  }, []);
  // console.log(sofaList);
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center", fontFamily: "Cursive" }}>
          Our <i style={{ color: "red" }}>Best</i> Sofa Sets
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
          “Take One Diamond is For Ownself For Forever.”
        </p>
      </div>

      <div className="main-container">
        {sofaList?.map((data, id) => {
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
                        src={data?.src}
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
                      {data?.title}
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
                      {data?.Price}
                    </tr>
                    <tr
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      {data?.discount} %OFF
                    </tr>
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
                </div>
              </td>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Sofa;
