import React from "react";
import Container from "../Container"
import Row from "../Row"
import Col from "../Col"
import Card from "../Card"

function FeaturedList() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
          <h1>This is the featured list component!</h1>
          <Card />
          <Card />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FeaturedList;