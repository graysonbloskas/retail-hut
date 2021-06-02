import React, { useEffect, useState } from "react";
import Col from '../../components/Col';
import Card from '../../components/Card'
import {CardContainer, CardWrapper} from './elements.js'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import API from "../../utils/API";
import ProductContext from "../../utils/ProductContext";

const Gallery = () => {

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
        API.getProducts()
        .then((res) => {
          console.log(res.data);
          console.log(res.data[0]);
          var featuredProducts = [];
          console.log("This is the watchlist");
          for (var i = 0; i < res.data.length; i++) {
            featuredProducts.push(res.data[i]);
          }
          setProductState(featuredProducts)
        });
      }, []);

    return (
        <ProductContext.Provider value={productState}>
                <Col size='md-6'>
                    <Header />
                    <Nav />
                </Col>
                <CardContainer>
                  <CardWrapper>
                  {productState.length ? productState.map((product,i) => (
                    <Card
                    key={i}
                    {... product}
                    />
                )) : "Loading products, please wait! "}
                  </CardWrapper>
                </CardContainer>

        </ProductContext.Provider>
    )
}

export default Gallery;