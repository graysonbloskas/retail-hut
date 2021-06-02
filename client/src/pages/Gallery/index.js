import React, { useEffect, useState } from "react";
import Container from '../../components/Container';
import Col from '../../components/Col';
import Row from '../../components/Row';
import homepageHero from '../../components/Homepage-Hero';
import Card from '../../components/Card'
import Header from '../../components/Header'
import FeaturedList from '../../components/FeaturedList';
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
        <Container fluid>
            <Row>
                <Col size='md-6'>
                    <Header />
                    <Nav />
                </Col>
                <Col>
                {productState.length ? productState.map((product,i) => (
                    <Card
                    key={i}
                    {... product}
                    />
                )) : "Loading products, please wait! "}
                </Col>
            </Row>
        </Container>
        </ProductContext.Provider>
    )
}

export default Gallery;