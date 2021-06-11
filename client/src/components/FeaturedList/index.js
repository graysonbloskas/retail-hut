import React, { useContext } from "react";

import Card from "../Card";
import './index.css'
import {CardContainer, CardWrapper} from './element.js'
import ProductContext from "../../utils/ProductContext"

function FeaturedList() {
  const featuredList = useContext(ProductContext)
  return (
    <div>
<CardContainer> 
  <h1 className="staff">Our Staff's Featured List!</h1>
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
