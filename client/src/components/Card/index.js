import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import {ProductCard, CardTitle, CardsPrice, CardImg, BtnContainer} from "./element.js";
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
          <CardTitle>
            {props.title}
          </CardTitle>
          <CardsPrice>
            <p>${props.price}</p>
          </CardsPrice>
            <a className="cu-cart-btn">Add to Cart</a>
            <a className="heart-btn"><FaHeart /></a>
   
        </ProductCard>
  );
}


export default Card;
