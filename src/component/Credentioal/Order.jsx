import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../context/DataState";
import "./form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Order() {
  const { order } = useContext(DataContext);
  const [quantity, setQuantity] = useState(1);
  const discountPrice = `${
    order?.Price - (order?.Price * order?.discount) / 100
  }`;

  const [placeOrder, setPlaceOrder] = useState({
    fname: "",
    lname: "",
    companyName: "",
    street: "",
    city: "",
    state: "",
    pinCode: "",
    mobile: "",
    email: "",
    productName: `${order?.title}`,
    quantity: `${quantity}`,
    price: `${discountPrice * quantity}`,
    pMode: "",
  });
  const navigate = useNavigate();
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setPlaceOrder((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const PlaceOrder = async (e) => {
    const {
      fname,
      lname,
      companyName,
      street,
      city,
      state,
      pinCode,
      mobile,
      email,
      productName,
      quantity,
      price,
      pMode,
    } = placeOrder;
    const res = await fetch("https://vishwagroup.herokuapp.com/order", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fname,
        lname,
        companyName,
        street,
        city,
        state,
        pinCode,
        mobile,
        email,
        productName,
        quantity,
        price,
        pMode,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Order not place, TRY AGAIN");
    } else {
      window.alert("Order Placed");
    }
  };
  const componentDidMount = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  };

  const openPayModal = () => {
    componentDidMount();
    // var amount = price * quantity; //Razorpay consider the amount in paise
    var options = {
      key: process.env.REACT_APP_razorpaytest_id,
      // amount: price * quantity, // 2000 paise = INR 20, amount in paisa
      amount: discountPrice, // 2000 paise = INR 20, amount in paisa
      name: "VishwakarmaGroup",
      description: "Thanks for purchasing",
      // order_id: "",
      handler: function (response) {
        var values = {
          razorpay_signature: response.razorpay_signature,
          razorpay_order_id: response.razorpay_order_id,
          transactionid: response.razorpay_payment_id,
          transactionamount: 1,
        };
        axios
          .post("/payment", values)
          .then((res) => {
            // go();
            // orderStore();
            // navigate(`/status/${idd}/${brandd}/`);
            // navigate("/");
            console.log(res);
          })
          .catch((e) => console.log(e));
      },
      // user details
      prefill: {
        name: placeOrder?.fname + placeOrder?.lname,
        email: placeOrder?.email,
        contact: placeOrder?.mobile,
      },
      notes: {
        address:
          placeOrder?.companyName +
          placeOrder?.street +
          placeOrder?.city +
          placeOrder?.state +
          placeOrder?.pinCode,
      },
      theme: {
        color: "#528ff0",
      },
    };
    axios
      .post("https://vishwagroup.herokuapp.com/paymentgateway", {
        amount: discountPrice,
      })
      .then((res) => {
        options.order_id = res.data.id;
        options.amount = res.data.amount;
        // paymentID = options.order_id;
        // payment = options.amount / 100;
        let rzp1 = new window.Razorpay(options);
        rzp1.open();
      })
      .catch((e) => {
        // alert("Please fill correct details");
        // navigate("/");
        console.log(e);
      });
  };

  // razorpay over

  return (
    <>
      <div className="container2">
        <div className="title2">
          <h2 className="heading2">Fill Form And Choose Payment Mode</h2>
        </div>

        <div className="d-flex2">
          <form
            action=""
            method=""
            className="form2"
            style={{
              display: "flex",
              marginLight: "30px",
              border: "2px solid #211b1b",
              backgroundColor: "#878787",
            }}
          >
            <div>
              <div className="form-group mt-3">
                <label className="lable1">First Name</label>
                <input
                  type="text"
                  className="form-control mt-1 input3"
                  placeholder="Enter First Name"
                  name="fname"
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label className="lable1">Last Name</label>
                <input
                  type="text"
                  className="form-control mt-1 input3"
                  placeholder="Enter Last Name"
                  name="lname"
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label className="lable1">Company Name</label>
                <input
                  type="text"
                  className="form-control mt-1 input3"
                  placeholder="Enter Company Name  (Option)"
                  name="companyName"
                  onChange={handleInputs}
                />
              </div>
              <div className="form-group mt-3">
                <label className="lable1">Street Address</label>
                <input
                  type="text"
                  className="form-control mt-1 input3"
                  placeholder="Enter Street Address"
                  name="street"
                  onChange={handleInputs}
                  required
                />
              </div>

              <div className="form-group mt-3">
                <label className="lable1">Town/City</label>
                <input
                  type="text"
                  className="form-control mt-1 input3"
                  placeholder="Enter Town/City"
                  name="city"
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label className="lable1">State</label>
                <input
                  type="text"
                  className="form-control mt-1 input3"
                  placeholder="Enter Your State"
                  name="state"
                  onChange={handleInputs}
                  required
                />
              </div>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <div className="form-group mt-3">
                <label className="lable1">Country</label>
                <input
                  type="text"
                  className="form-control mt-1 input3"
                  placeholder="India"
                  style={{ backgroundColor: "#b3c3f2" }}
                  disabled
                />
              </div>
              <div className="form-group mt-3">
                <label className="lable1">Pin Code</label>
                <input
                  type="text"
                  className="form-control mt-1 input3"
                  placeholder="Enter Your Pin Code"
                  name="pinCode"
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label className="lable1">Contact Number</label>
                <input
                  type="text"
                  className="form-control mt-1 input3"
                  placeholder="Enter Mobile Number"
                  name="mobile"
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label className="lable1">Email address</label>
                <input
                  type="text"
                  className="form-control mt-1 input3"
                  placeholder="Enter Email"
                  name="email"
                  onChange={handleInputs}
                  required
                />
              </div>
            </div>
          </form>
          <div className="Yorder2">
            <table className="table2">
              <tr>
                <th colspan="2">Your order</th>
              </tr>
              <tr>
                <td>Product</td>
                <td
                  name="title"
                  onChange={handleInputs}
                >{`${order?.title}`}</td>
              </tr>
              <tr>
                <td>Total Quantity</td>
                <td name="quantity" onChange={handleInputs}>
                  <button
                    onClick={() => {
                      if (quantity !== 1) {
                        setQuantity(quantity - 1);
                      }
                    }}
                  >
                    -
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp; {quantity} &nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    onClick={() => {
                      setQuantity(quantity + 1);
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free shipping</td>
              </tr>
              <tr>
                <td>Total Price</td>
                <td style={{ color: "red" }}>
                  {` ₹ ${order?.Price * quantity}`} <br />-
                  {` ${order?.discount} % `} <br />
                  <i style={{ color: "black" }}>-----------</i>
                  <br /> = ₹ {discountPrice * quantity}
                </td>
              </tr>
            </table>
            <br />

            <button type="button" className="button1" onClick={openPayModal}>
              Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
