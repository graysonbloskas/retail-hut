import React, { useContext } from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Card from "../Card";
import {CardContainer, CardWrapper} from './element.js'
import ProductContext from "../../utils/ProductContext"

function FeaturedList() {
  const featuredList = useContext(ProductContext)
  return (
    <div>
<CardContainer> 
  <CardWrapper>
  {featuredList.length ? featuredList.map((product,i) => (
                    <Card
                    key={i}
                    {... product}
                    />
            )) : "we are loading your data"}
  </CardWrapper>
</CardContainer>



    </div>
  );
}

export default FeaturedList;
