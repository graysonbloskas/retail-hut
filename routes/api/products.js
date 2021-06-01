const router = require("express").Router();
const productController = require("../../controller/productController")

router.route("/")
    .get(productController.findAll)

// router
//     .route("/:id")
//     .get(productController.findById)
    
module.exports = router;