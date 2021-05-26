import React from "react";


function CardImg() {
  return (
    <div style={{"width": "18rem"}}>
      <img className="card-img-top" src="..." alt="Card image cap" />
      {<i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
  );
}

export default CardImg;