import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function AddProduct() {
  const [product, setProduct] = useState({
    id: "",
    category: "",
    src: "",
    title: "",
    Price: "",
    description: "",
    discount: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { id, category, src, title, description, Price, discount } = product;
    const res = await fetch("https://vishwagroup.herokuapp.com/addProduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        category,
        src,
        title,
        Price,
        description,
        discount,
      }),
    });
    const data = await res.json();
    if (data.status == 422) {
      console.log("Product Not Add");
      alert(data.error);
    } else if (data.status == 200) {
      console.log(data.message);
      alert(data.message);
    } else {
      console.log(data);
      alert("Server Error! Try after some time");
    }
  };
  return (
    <div>
      <div className="abc3">
        <form enctype="multipart/form-data">
          <div className="container3">
            <h1 className=" Auth-form-title1">Add New Product</h1>
            <p>Fill information about product</p>
            {/* <hr> */}
            <label for="email">
              <b>Id</b>
            </label>
            <input
              type="Number"
              placeholder="Enter product id"
              name="id"
              // value="id"
              id=""
              className="input3"
              required
              onChange={handleInputs}
            />{" "}
            <b>Category</b>
            <br />
            <input
              type="radio"
              id="kraken"
              name="category"
              value="Bed"
              onChange={handleInputs}
            />
            <label for="kraken">Bed</label>
            &nbsp; &nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              id="sasquatch"
              name="category"
              value="Sofa"
              onChange={handleInputs}
            />
            <label for="sasquatch">Sofa</label>
            &nbsp; &nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              id="mothman"
              name="category"
              value="Door"
              onChange={handleInputs}
            />
            <label for="mothman">Door</label>
            &nbsp; &nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              id="mothman"
              name="category"
              value="Chair"
              onChange={handleInputs}
            />
            <label for="mothman">Chair</label>
            &nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              id="mothman"
              name="category"
              value="Office"
              onChange={handleInputs}
            />
            <label for="mothman">Office</label>
            <br />
            <br />
            <br />
            <label for="email">
              <b>Image</b>
            </label>
            <input type="file" id="src" name="src" onChange={handleInputs} />
            <br></br>
            <br />
            <label for="email">
              <b>Title</b>
            </label>
            <input
              type="text"
              placeholder="Enter product title"
              name="title"
              // value="title"
              id=""
              className="input3"
              required
              onChange={handleInputs}
            />
            <label for="email">
              <b>Price</b>
            </label>
            <br />
            <input
              type="Number"
              placeholder="Enter product price"
              name="Price"
              // value="Price"
              id=""
              className="input3"
              required
              onChange={handleInputs}
            />
            <br />
            <b>Discription</b>
            <br />
            <label for="email"></label>
            <textarea
              className=""
              placeholder="Discription"
              name="description"
              // value="description"
              cols={30}
              rows={10}
              onChange={handleInputs}
            ></textarea>
            <br />
            <br />
            <label for="email">
              <b>Discount</b>
            </label>
            <br />
            <input
              type="Number"
              placeholder="Total Discount in %"
              name="discount"
              // value="discount"
              id=""
              className="input3"
              required
              onChange={handleInputs}
            />
            <button type="submit" className="registerbtn3" onClick={PostData}>
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
