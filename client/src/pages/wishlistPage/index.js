import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import Nav from "../../components/Nav"
import Col from "../../components/Col";
import Row from "../../components/Row";
import Header from "../../components/Header";
import Card from "../../components/Card";
import API from "../../utils/API";
import { CardContainer, CardWrapper } from "./elements";

const WishlistPage = () => {
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    API.getWishList().then((res) => {
      console.log(res.data);
      let wishlistedArray = [];
      for (let i = 0; i < res.data.length; i++) {
        wishlistedArray.push(res.data[i]);
      }
      setWishList(wishlistedArray);
    });
  }, []);
  //do map function
  if (!wishList)
    return (
      <Container fluid>
        <Row>
          <h1>You Have No Wishlist Items</h1>
        </Row>
      </Container>
    );
  return (
    <Container fluid>
      <Row>
        <Col>
          <CardContainer>
            <CardWrapper>
              {wishList.length
                ? wishList.map((item, i) => <Card key={i} {...item} />)
                : "Loading products, please wait! "}
            </CardWrapper>
          </CardContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default WishlistPage;
