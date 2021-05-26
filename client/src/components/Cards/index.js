import React from "react";
import CardBody from "../CardBody";
import CardBtn from "../CardBtn";
import CardImg from "../CardImage";
import CardHeading from "../CardHeading";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

function Cards() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <CardHeading />
            <CardImg />
            <CardBody />
            <CardBtn style={{ opacity: 1 }} data-value="back" />
            <CardBtn style={{ opacity: 1 }} data-value="next" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cards;
