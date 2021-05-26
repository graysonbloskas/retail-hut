import React from "react";
import "./style.css";
import cartBtn from '../../assets/images/cart-Btn-06.png'

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function CartBtn() {
  return (
    <span className="cart-btn" role="button" tabIndex="0">
        🛒
      {/* <img src={cartBtn} alt="Logo" className="cartBtn" /> */}
    </span>
  );
}

export default CartBtn;