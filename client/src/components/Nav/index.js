import React from "react";
import "./style.css";
// import { ImSearch } from "react-icons/im";
// import { FaHome, FaPlus } from "react-icons/fa";

const Nav = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-white mb-4">
  <a className="navbar-brand" href="/">Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav cats">
      <a className="nav-item nav-link active" href="/gallery">Clothing/Jewelry<span class="sr-only"></span></a>
      <a className="nav-item nav-link" href="/gallery">Electronics</a>
      <a className="nav-item nav-link" href="/gallery">Shoes</a>
      <a className="nav-item nav-link" href="/gallery">Beauty</a>
    </div>
  </div>
</nav> 

);
};





export default Nav;