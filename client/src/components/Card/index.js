import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import {CardContainer, CardWrapper, ProductCard, CardH1, BarCard, CardH2, CardsP, CardImg, BtnContainer} from "./element.js";
import {FaHeart} from 'react-icons/fa';

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
            <p>${props.price}</p>
          </CardsP>
          <BtnContainer>
            <a className="cu-cart-btn">Add to Cart</a>
          </BtnContainer>
          <BtnContainer>
            <a className="heart-btn"><FaHeart /></a>
          </BtnContainer>
        </ProductCard>
  );
}


export default Card;
