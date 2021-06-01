import React from "react";

const ProductContext = React.createContext({
  title: "",
  price: 0,
  image: "",
  description: "",
  stock: 0,
  tags: [],
  category: ""
});

export default ProductContext;