import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import homepageHero from "../../components/Homepage-Hero";
import Header from "../../components/Header";
import FeaturedList from "../../components/FeaturedList";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import ProductContext from "../../utils/ProductContext";
import StaffPicks from "../../components/StaffPicksList";

const Homepage = () => {
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

      for (var i = 0; i < res.data.length; i += 3) {
        featuredProducts.push(res.data[i]);
      }
      setProductState(featuredProducts)
    });
  }, []);

  useEffect(() => {
    cardInfoGetter();
  }, []);


  const cardInfoGetter = () => {
    API.getProducts()
      return ((res) => {
          setProductState(res.data)
          console.log(res.data)
        })
  }



  return (
    <div>
      <ProductContext.Provider value={productState}>
        <Container fluid>
          <Row>
            <Col size="md-6">
              <Header />
            </Col>
            <Nav />
          </Row>
          <Row>
            <FeaturedList />
          </Row>
          <Row>
            <StaffPicks />
          </Row>
          
        </Container>
      </ProductContext.Provider>
      <Footer/>
    </div>
  );
};


export default Homepage;
