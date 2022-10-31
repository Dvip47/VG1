import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function ProductDetails() {
  const [product, setProduct] = useState([]);
  const CallProductData = async () => {
    try {
      const res = await fetch("/product", {
        method: "get",
        credentials: "include",
      });
      const data = await res.json();
      if (res.status === 200) {
        setProduct(data?.message);
        // console.log(data?.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    CallProductData();
  }, []);
  const handleDelete = async (data) => {
    const res = await axios(`/deleteProduct${data?._id}`);
    if (res.status === 200) {
      alert(`${data?.title} deleted`);
      CallProductData();
    }
  };
  console.log(product);
  return (
    <>
      <div
        className="scroll"
        style={{
          margin: "2.5%",
          width: "45%",
          height: "500px",
          backgroundColor: "#b5f7c6 ",
          border: "3px solid black",
        }}
      >
        <div className="card">
          <div className="card-body">
            <center>
              {" "}
              <h3 className="header-title pb-3 mt-0">Available Product</h3>
            </center>
            <table className="">
              <tbody>
                <thead>
                  <tr className="align-self-center">
                    <th>Category</th>
                    &emsp;
                    <th>Title</th>
                    &emsp;&emsp; &emsp;
                    <th>Discription</th>
                    &emsp;&emsp;&emsp;&emsp;
                    <th>Discount</th>
                    &emsp;
                    <th>Price</th>
                    &emsp;
                    <th>Action</th>
                  </tr>
                </thead>
                {product?.reverse().map((data, id) => {
                  return (
                    <div>
                      <tr key={id}>
                        <td className="">
                          <div className="media">
                            {/* <img
                        src="/images/users/avatar-2.jpg"
                        alt=""
                        className="thumb-md rounded-circle"
                      /> */}
                            <div className="">
                              <td>{data?.category}</td>
                              <td>{data?.title}</td>
                              <td>{data?.description}</td>
                              <td>{data?.discount}%</td>
                              <td>{data?.Price}</td>
                              <td
                                onClick={() => handleDelete(data)}
                                style={{ color: "blue" }}
                              >
                                Delete Product
                              </td>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </div>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
