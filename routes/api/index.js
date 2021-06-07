const router = require("express").Router();
const WishListRoutes = require("./wishlist");
const ProductRoutes = require("./products");
const ShopRoutes = require("./shops");
const CategoryRoutes = require("./category");
router.use("/wishlist", WishListRoutes);
router.use("/products", ProductRoutes);
router.use("/category", CategoryRoutes);
router.use("/shops", ShopRoutes);

module.exports = router;