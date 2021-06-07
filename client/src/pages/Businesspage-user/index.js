import React, { useEffect, useState } from "react";
import Col from '../../components/Col';
import {CardContainer, CardWrapper} from '../elements.js'
import Card from '../../components/Card'
import API from "../../utils/API";
import ShopContext from "../../utils/ShopContext";
import Hero from '../../components/Hero'
import Header from '../../components/Header'
// import SignOut from '../../components/SignOut';
import BusinessImage from '../../components/BusinessImage';
// import BusinessName from './BusinessName';
import Footer from '../../components/Footer';


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

      console.log("********************************", shopState);

      // const test = shopState.map((test, i => [
      //   test.ShopContext[i].name[0],
      //   test.ShopContext[i].href[0],
      //   console.log(test)
      // ]))
      
      // const idiot = [
    // map through the products array from state and push the values into this array
      // ]
      // set the value of the provider to be the idiot array

      return (
        <ShopContext.Provider value={shopState}>
                <Col size='md-6'>
                </Col>
                <CardContainer>
                  <CardWrapper>
                    {/* map through the idiot array here */}
                  {shopState.length ? shopState.map((shop,i) => (
                    <div>
                    <h1
                    
                    key={i}
          
                    // {... shop}
                    ><a href={shop.href}>{shop.name}</a></h1>
                    </div>
                )) : "Loading shops, please wait! "}
                  </CardWrapper>
                </CardContainer>
        </ShopContext.Provider>
    )
}

export default Business;