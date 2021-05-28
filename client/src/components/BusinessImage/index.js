import React from "react";
import "./style.css";
import BusiImg from "../../assets/images/Yin_and_Yang.png";

function BusinessImg() {
  return (
    <div style={{display: "flex", alignItems: "center"}}>
      <img className="businessImg" src={BusiImg} alt="Company's Logo" />
      <div>
        <h1 style={{margin: "0"}}>Stickers By Brandi</h1>
        <p  style={{margin: "0"}}>Orlando, Florida</p>
      </div>
    </div>
  );
}

export default BusinessImg;
