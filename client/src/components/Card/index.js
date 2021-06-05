import React from "react";
import { Link } from "react-router-dom";
import {CardContainer, CardWrapper, ProductCard, CardH1, BarCard, CardH2, CardsP, CardImg, BtnContainer} from "./element.js";

function Card(props) {
  return (
        <ProductCard>
          <Link to={'/products/' + props._id}>
          <CardImg>
            <img src={props.image}
            style={{ "maxWidth": "300px", "maxHeight": "400px"}} />
          </CardImg>
          </Link>
          <CardH2>
            {props.title}
          </CardH2>
          <CardsP>
            {props.price}
          </CardsP>
          <BtnContainer>
            <a>Add to Cart</a>
          </BtnContainer>
        </ProductCard>
  );
}


export default Card;
