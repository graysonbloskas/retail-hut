import React from "react";
import {CardContainer, CardWrapper, ProductCard, CardH1, BarCard, CardH2, CardsP, CardImg, BtnContainer} from "./element.js";

function Card(props) {
  return (
    <CardContainer>
      <CardWrapper>
        <ProductCard>
          <CardImg>
            <img src={props.image}
            style={{ "max-width": "300px", "max-height": "400px"}} />
          </CardImg>
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
      </CardWrapper>
    </CardContainer>
  );
}


export default Card;
