import React, { useEffect, useState } from "react";
import Col from '../../components/Col';
import {CardContainer, CardWrapper} from '../elements.js'
import Card from '../../components/Card'
import API from "../../utils/API";
import ShopContext from "../../utils/ShopContext";

const Business = () => {

    const [shopState, setShopState] = useState({
      name: "",
      href: "",
      type: [],
      products: [],
    })

    useEffect(() => {
        API.findShopProducts()
        .then((res) => {
          console.log(res.data);
          console.log(res.data[0]);
          var shopProducts = [];
          console.log("You have hit shops");
          for (var i = 0; i < res.data.length; i++) {
            shopProducts.push(res.data[i]);
          }
          setShopState(shopProducts)
        });
      }, []);

      return (
        <ShopContext.Provider value={shopState}>
                <Col size='md-6'>
                </Col>
                <CardContainer>
                  <CardWrapper>
                  {shopState.length ? shopState.map((shop,i) => (
                    <div>
                    <h1
                    
                    key={i}

                    ><a href={shop.href}>{shop.name}</a></h1>
                    </div>
                )) : "Loading shops, please wait! "}
                  </CardWrapper>
                </CardContainer>
        </ShopContext.Provider>
    )
}

export default Business;