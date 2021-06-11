import React from "react";
import "./style.css";
import HeroImage from "../../assets/images/lighted-lamps-are-hanging-from-ceiling-in-a-retail-5HGJWSW.jpg";

function Hero(props) {
  return (
    <div className="hero" style={{ backgroundImage: `url(${HeroImage})` }}>
      {props.children}
    </div>
  );
}
export default Hero;
