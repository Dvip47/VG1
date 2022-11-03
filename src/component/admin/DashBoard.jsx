import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function DashBoard() {
  const [orderDetail, setOrderDetail] = useState([]);
  const CallOrderDetails = async () => {
    try {
      const res = await fetch("/order", {
        method: "get",
        credentials: "include",
      });
      const data = await res.json();

      if (res.status === 200) {
        setOrderDetail(data?.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    CallOrderDetails();
  }, []);
  const handleDelete = async (data) => {
    const res = await axios(`/deleteOrder${data?._id}`);
    if (res.status === 200) {
      alert(`${data?.productName} delivered successfully`);
      CallOrderDetails();
    }
  };
  return (
    <>
      <div
        className="scroll"
        style={{
          // margin: "2.5%",
          width: "100%",
          height: "400px",
          backgroundColor: "#b5f7c6 ",
          border: "3px solid black",
        }}
      >
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <h5 className="header-title pb-3 mt-0">Order List</h5>
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead>
                    <tr className="align-self-center">
                      <th>Status</th>
                      <th>Product Name</th> &nbsp;&nbsp;
                      <th>Quantity</th>&nbsp;&nbsp;
                      <th>Paid Amount</th>&nbsp;&nbsp;
                      <th>Payment Mode</th>&nbsp;&nbsp;
                      <th>Mobile</th>
                      <th>Client Name</th>
                      <th>Company Name</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Pin Code</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderDetail?.reverse().map((data, id) => {
                      return (
                        <tr key={id} className="align-self-center">
                          <td
                            onClick={() => handleDelete(data)}
                            style={{ color: "blue" }}
                          >
                            <a href="" style={{ textDecoration: "none" }}>
                              Delivered?❌
                            </a>
                          </td>
                          <td>{data?.productName}</td>
                          &nbsp;&nbsp;
                          <td>{data?.quantity}</td>&nbsp;&nbsp;
                          <td>{data?.price}</td>&nbsp;&nbsp;
                          <td>{data?.pMode}</td>&nbsp;&nbsp;
                          <td>{data?.mobile}</td>
                          <td>
                            {data?.fname}&nbsp;{data?.lname}
                          </td>
                          <td>{data?.companyName}</td>
                          <td>{data?.email}</td>
                          <td>
                            {data?.street}&nbsp;{data?.city}&nbsp;
                            {data?.state}
                          </td>
                          <td>{data?.pinCode}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
