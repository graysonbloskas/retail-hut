import React, { useEffect, useState } from "react";
import Col from '../../components/Col';
import Card from '../../components/Card'
import {CardContainer, CardWrapper} from '../elements.js'
import Header from '../../components/Header'
import API from "../../utils/API";
import ProductContext from "../../utils/ProductContext";

const Clothing = () => {

    const [productState, setProductState] = useState({
        title: "",
        price: 0,
        image: "",
        description: "",
        stock: 0,
        tags: [],
        category: ""
      })
    
      useEffect(() => {
        API.getCatProducts("60b7a8b472bce34d0b371dab")
        .then((res) => {
          console.log(res.data);
          console.log(res.data[0]);
          var featuredProducts = [];
          for (var i = 0; i < res.data.length; i++) {
            featuredProducts.push(res.data[i]);
          }
          setProductState(featuredProducts)
        });
      }, []);


      return (
        <ProductContext.Provider value={productState}>
                <Col size='md-6'>
                </Col>
                <CardContainer>
                  <CardWrapper>
                  {productState.length ? productState.map((product,i) => (
                    <Card
                    key={i}
                    {... product}
                    />
                )) : "There are no products available :( "}
                  </CardWrapper>
                </CardContainer>

        </ProductContext.Provider>
    )
}

export default Clothing;