import React from "react";
import "./style.css";
// import { ImSearch } from "react-icons/im";
// import { FaHome, FaPlus } from "react-icons/fa";

const Nav = () => {
  return (
  <div className="containers">
<nav className="navbar navbar-expand-lg navbar-light bg-white mb-4">
  <a className="navbar-brand" href="/">Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse containers" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <a className="nav-item nav-link" href="/gallery">Browse All<span className="sr-only"></span></a>
      <a className="nav-item nav-link" href="/clothing">Clothing/Jewelry<span className="sr-only"></span></a>
      <a className="nav-item nav-link" href="/electronics">Electronics</a>
      <a className="nav-item nav-link" href="/shoes">Shoes</a>
      <a className="nav-item nav-link" href="/beauty">Beauty</a>
    </div>
  </div>
</nav> 
</div>
);
};





export default Nav;