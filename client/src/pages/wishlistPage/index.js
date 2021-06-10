import React, { useState, useEffect, useContext } from "react";
import Container from "../../components/Container";
import Nav from "../../components/Nav"
import Col from "../../components/Col";
import Row from "../../components/Row";
import Header from "../../components/Header";
import Card from "../../components/Card";
import API from "../../utils/API";
import { UserContext } from "../../utils/UserContext";
import { CardContainer, CardWrapper } from "./elements";
import {useHistory} from "react-router-dom"
const WishlistPage = () => {
  
  const [wishList, setWishList] = useState([]);
  // const [user, dispatch] = useContext(UserContext)
  // const history = useHistory();
  // console.log(user)

    // useEffect(() => {
    //     API.userAuth, {
    //         credentials: 'include'
    //     }
    //         .then((res) => {
    //             console.log(`response to authenticate ${res}`);
    //             return res.json(res)

    //         })
    //         .then(data => {
    //             console.log(data);
    //             dispatch({
    //                 type: "GET_USER",
    //                 payload: data
    //             })

    //         })
    //         .catch((err) => {
    //             console.log('Error fetching authorized user.');
    //         });

    // }, []);
    
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
              {wishList.length
                ? wishList.map((item, i) => <Card key={i} {...item} />)
                : "Loading products, please wait! "}
        </Col>
      </Row>
    </Container>
  );
};

export default WishlistPage;
