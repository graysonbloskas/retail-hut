import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import FeaturedList from "../../components/FeaturedList";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import ProductContext from "../../utils/ProductContext";

const Homepage = (id) => {
  const [productState, setProductState] = useState({
    title: "",
    price: 0,
    image: "",
    description: "",
    stock: 0,
    tags: [],
    category: ""
  })
  console.log(id);

  useEffect(() => {
    API.getProducts()
    .then((res) => {
      console.log(res.data);
      console.log(res.data[0]);
      var featuredProducts = [];

      for (var i = 0; i < res.data.length; i += 6) {
        featuredProducts.push(res.data[i]);
      }
      setProductState(featuredProducts)
    });
  }, []);




  return (
    <div>
      <ProductContext.Provider value={productState}>
        <Container fluid>
          <Row>
            <Col size="md-6">
            </Col>
          </Row>
          <Row>
            <FeaturedList />
          </Row>
          <Row>
            {/* <StaffPicks /> */}
          </Row>
          
        </Container>
      </ProductContext.Provider>
      <Footer/>
    </div>
  );
};


export default Homepage;
