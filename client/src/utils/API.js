import axios from "axios";

export default {
    getProducts: function() {
        return axios.get("/api/products");
      },
    getWishList: function() {
      return axios.get("/api/wishlist/");
    }
}