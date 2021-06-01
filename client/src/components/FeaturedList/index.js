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
            <div className="card" style={{"width": "18rem"}} key={i}>
              <img className="card-img-top" src={product.image} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  {product.price}
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            )) : "we are loading your data"}

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FeaturedList;
