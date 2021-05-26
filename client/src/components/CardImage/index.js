import React from "react";


function CardImg() {
  return (
    <div>
      <img className="card-img" alt="user thumbnail" />
      {<i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
  );
}

export default CardImg;