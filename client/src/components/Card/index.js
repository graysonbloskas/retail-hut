import React from "react";

function Card(key, title, description, price, image) {
  return (
    <div className="card" style={{ width: "18rem" }} key={key}>
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="description">{description}</p>
        <p className="card-text">{price}</p>
        <a href="#" className="btn btn-primary">
          Add to Cart
        </a>
      </div>
    </div>
  );
}

export default Card;
