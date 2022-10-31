import React from "react";
import desktopImage from "../../assets/img/banner4.jpg";
import mobileImage from "../../assets/img/banner4.jpg";
import "./Banner.css";
function Banner() {
  const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
  return (
    <>
      <div
        className="App4"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="App4-content">
          <h1>Check Our Royal Fornitures</h1>
          <i style={{ color: "#fadedc" }}>Royal Farniture For Royal People</i>
          <br />
          <button class="btn-hover color-9" id="bootan4">
            Check It
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
