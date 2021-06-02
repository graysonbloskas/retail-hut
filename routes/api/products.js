const router = require("express").Router();
const productController = require("../../controller/productController")

router.route("/")
    .get(productController.findAll)

router
    .route("/:category")
    .get(productController.findByCategory)
    

module.exports = router;