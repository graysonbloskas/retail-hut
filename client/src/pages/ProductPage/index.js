import React, {useState, useEffect} from 'react'
import API from "../../utils/API";
import './styles.css'
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
      <h1 className="text">Hi Class! Normally, this is where the individual product page would go, but we're having some issues. :/ Come back next week.</h1>
        

      )
}

export default ProductPage;