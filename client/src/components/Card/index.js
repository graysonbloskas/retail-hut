import React from "react";

function Card(props) {
  return (
    <div className="card" style={{ "width": "18rem" }} key={props.i}>
      <img className="card-img-top" src={props.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="description">{props.description}</p>
        <p className="card-text">{props.price}</p>
        <a href="#" className="btn btn-primary">
          Add to Cart
        </a>
      </div>
    </div>
  );
}


export default Card;
