const router = require("express").Router();
const productController = require("../../controller/productController")

router.route("/")
    .get(productController.findAll)

router.route("/:category")
    .get(productController.findByCategory)

// router.route("/:_id")
// .get(productController.findByProductId)


module.exports = router;