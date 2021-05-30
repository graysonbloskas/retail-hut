import axios from "axios";

export default {
    getProducts: function() {
        return axios.get("/api/product");
      },
    getWishList: function(id) {
      return axios.get("/api/wishlist/" + id);
    }
}