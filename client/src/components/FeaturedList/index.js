import React, { useContext } from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Card from "../Card";
import ProductContext from "../../utils/ProductContext"

function FeaturedList() {
  const featuredList = useContext(ProductContext)
  return (
    <div>
      <Container>
        <Row>
          <Col>
          {featuredList.length ? featuredList.map((product,i) => (
                    <Card
                    key={i}
                    {... product}
                    />
            )) : "we are loading your data"}

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FeaturedList;
