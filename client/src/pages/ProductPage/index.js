import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import API from "../../utils/API";
import ProductContext from "../../utils/ProductContext";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";

const ProductPage = () => {

    const [productState, setProductState] = useState({
        title: "",
        price: 0,
        image: "",
        description: "",
        stock: 0,
        tags: [],
        category: ""
      })
    
      const {id} = useParams();

    useEffect(() => {
        API.findOne(id)
        .then((res) => {
          console.log(res.data);
          console.log(res.data[0]);
          var featuredProducts = [];
          for (var i = 0; i < res.data.length; i++) {
            featuredProducts.push(res.data[i]);
          }
          setProductState(featuredProducts)
        });
      }, []);

      return (
      <Header />
        

      )
}

export default ProductPage;