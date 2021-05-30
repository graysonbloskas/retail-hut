const router = require("express").Router();
const WishListRoutes = require("./wishlist");


router.use("/wishlist", WishListRoutes);

module.exports = router;