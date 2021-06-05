import React, { useEffect, useState } from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Card from "../Card";
import API from "../../utils/API";
import ProductContext from "../../utils/ProductContext";


function StaffPicks() {
  const [productState, setProductState] = useState({
    title: "",
    price: 0,
    image: "",
    description: "",
    stock: 0,
    tags: [],
    category: "",
  });

  useEffect(() => {
    API.getCatProducts("60b8f5a74a14bbaa82602378")
    .then((res) => {
      var featuredProducts = [];
      console.log("This is the watchlist");
      for (var i = 0; i < res.data; i++) {
        featuredProducts.push(res.data[i]);
      }
      console.log(featuredProducts)
      setProductState(featuredProducts);
    });
  }, []);
  
  // let test = productState
  // console.log(productState['0'].category)

  return (
  <ProductContext.Provider value={productState}>
    <div>
      <Container>
        <Row>
          <Col>
            <h1>This is the staff picks list</h1>
            {productState.length ? productState.map((product,i) => (
                <Card
                key={i}
                {... product}
                />
            )) : "Loading our staffs favorite items!"}
          </Col>
        </Row>
      </Container>
    </div>
//   </ProductContext.Provider>
  );
};


export default StaffPicks;
