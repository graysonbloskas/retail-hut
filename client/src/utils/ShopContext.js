import React from "react";

const ShopContext = React.createContext({
  name: "",
  href: "",
  type: [],
  products: [],
});

export default ShopContext;